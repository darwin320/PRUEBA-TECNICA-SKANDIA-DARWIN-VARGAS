import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { Err, Ok, Result } from "ts-results";
import { SearchResult } from "./apiTypes";




export interface ApiWithSearch<T> {
    search(
        userSearch?: string,
        currentSearchPage?: number,
        searchLimit?: number
    ): Observable<SearchResult<T>>;

    count(): Promise<number>;
}

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(protected httpClient: HttpClient) {}

 

    protected makeSimpleGetRequest<T>(url: string) {
        return this.observableToResult<T>(
            this.httpClient.get(`${url}`, {
                withCredentials: true,
            })
        );
    }

    protected async observableToResult<T>(
        observable: Observable<any>
    ): Promise<Result<T, Error>> {
        try {
            return Ok(await lastValueFrom(observable));
        } catch (error: any) {
            return Err(error);
        }
    }

    protected makeSimplePostRequest<T>(url: string, body: any) {
        return this.observableToResult<T>(
            this.httpClient.post(`${url}`, body, {
                withCredentials: true,
            })
        );
    }
}
