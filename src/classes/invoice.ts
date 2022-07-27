// lesson - 13 ( public, private, readonly)

import { HasFormatter } from "../interfaces/Hasformatter.js";

export class Invoie implements HasFormatter {
    // public client: string;
    // private details: string;
    // readonly amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`
    }
}

