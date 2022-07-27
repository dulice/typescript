// lesson - 11 ( DOM and type casting)
// lesson - 14 ( module )
import { Invoie } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
const inOne = new Invoie('kay', 'build website', 200);
const inTwo = new Invoie('pwint', 'build on aa website', 160);
let invoice = [];
invoice.push(inOne);
invoice.push(inTwo);
invoice.forEach(inv => {
    // console.log(inv.client, inv.amount, inv.format());
    // console.log(inv.details);
});
const me = {
    name: 'hnin',
    age: 20,
    speak(text) {
        console.log(`${me.name} speaks ${text}`);
    },
    spend(amount) {
        console.log(`${me.name} spend ${amount}`);
        return amount;
    }
};
// console.log(me.speak('hello'));
const greetPerson = (person) => {
    // person.name = 'aye';
    console.log(`hello ${person.name}`);
};
greetPerson(me);
// ============================================================= 
const anchorTag = document.querySelector('a');
if (anchorTag) {
    // console.log(anchorTag);
}
// console.log(anchorTag);
const formTag = document.querySelector('.new-item-form');
console.log(formTag);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
formTag.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.value
    // );
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoie(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc.format());
    let template = new ListTemplate(ul);
    template.render(type.value, doc, 'end');
});
// ============================================================= 
// lesson - 18 (generics)
// lesson - 19 (enum)
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
// const addUUID = (obj: object) => { (if we write uuidOne.name will raise error and obj does not know name properties)
// const addUUID = <T>(obj: T) => { ( will not provide specific type)
// const addUUID = <T extends object>(obj: T) => { ( obj is only allow obj)
const addUUID = (obj) => {
    let uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uuid });
};
let uuidOne = addUUID({ name: 'nang', age: 30 });
// let uuidTwo = addUUID('hello');
console.log(uuidOne.name);
;
let personOne = {
    uuid: 34,
    resorceName: ResourceType.AUTHOR,
    data: 'kay'
};
let personTwo = {
    uuid: 34,
    resorceName: ResourceType.DIRECTOR,
    data: { age: 21, ismarried: false }
};
console.log(personTwo);
// ============================================================= 
// lesson - 20 (tuples)
let arr = ['nang', 21, true];
arr[0] = false;
arr[1] = 'kay';
arr[2] = 30;
let tup = ['nang', 21, true];
// tup[0] = false
tup[0] = 'kay';
