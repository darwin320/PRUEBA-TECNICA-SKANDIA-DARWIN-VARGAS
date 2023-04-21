import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbActiveOffcanvas } from "@ng-bootstrap/ng-bootstrap";



@Component({
    selector: "app-main-sidebar",
    templateUrl: "./main-sidebar.component.html",
    styleUrls: ["./main-sidebar.component.css"],
})
export class MainSidebarComponent {
    constructor(
        public activeOffcanvas: NgbActiveOffcanvas,
        private router: Router
    ) {}

    public async home() {
        this.router.navigate(["home"]);
    }

 

}
