// lesson - 13 ( public, private, readonly)
export class Invoie {
    // public client: string;
    // private details: string;
    // readonly amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
