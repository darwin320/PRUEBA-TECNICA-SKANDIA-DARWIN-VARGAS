export class Card {
    listCard!: Card[];
    constructor(
        public nameProduct: string,
        public numberProduct: number,
        public balanceProduct: string,
        public detaildProduct: string,
    ){}
};
