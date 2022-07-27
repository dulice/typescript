"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.detail}`;
    }
}
const invOne = new Invoice('kay', 'build website', 200);
const invTwo = new Invoice('pwint', 'build on aa website', 160);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
