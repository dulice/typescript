// lesson - 11 ( DOM and type casting)

// lesson - 14 ( module )
import { Invoie } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/Hasformatter.js";

const inOne = new Invoie('kay', 'build website', 200);
const inTwo = new Invoie('pwint', 'build on aa website', 160);

let invoice: Invoie[] = [];
invoice.push(inOne);
invoice.push(inTwo);

invoice.forEach(inv => {
    // console.log(inv.client, inv.amount, inv.format());
    // console.log(inv.details);
})

// ============================================================= 

// lesson - 15 (interfaces)
//class use with "interface", data type use wiht "type"
export interface Person {
    name: string;
    age?: number;
    speak (a: string): void; 
    spend (b: number): number;
}

const me: Person = {
    name: 'hnin',
    age: 20,
    speak( text: string): void {
        console.log(`${me.name} speaks ${text}`)
    },
    spend(amount: number): number {
        console.log(`${me.name} spend ${amount}`)
        return amount;
    }
}
// console.log(me.speak('hello'));

const greetPerson = (person: Person) => {
    // person.name = 'aye';
    console.log(`hello ${person.name}`);
}
greetPerson(me);

// ============================================================= 

const anchorTag = document.querySelector('a')!;
if(anchorTag) {
    // console.log(anchorTag);
}
// console.log(anchorTag);

const formTag = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formTag);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('ul')!;

formTag.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.value
    // );

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoie(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc.format());
    let template = new ListTemplate(ul);
    template.render(type.value, doc, 'end');
})

// ============================================================= 

// lesson - 18 (generics)

// lesson - 19 (enum)
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR }

// const addUUID = (obj: object) => { (if we write uuidOne.name will raise error and obj does not know name properties)
// const addUUID = <T>(obj: T) => { ( will not provide specific type)
// const addUUID = <T extends object>(obj: T) => { ( obj is only allow obj)
const addUUID = <T extends {name: string}>(obj: T) => {
    let uuid = Math.floor(Math.random() * 100);
    return { ...obj, uuid}
}

let uuidOne = addUUID({name: 'nang', age: 30});
// let uuidTwo = addUUID('hello');
console.log(uuidOne.name); 

//with interface
interface Resource<T> {
    uuid: number,
    resorceName: ResourceType,
    data: T
};

let personOne: Resource<string> = {
    uuid: 34,
    resorceName: ResourceType.AUTHOR,
    data: 'kay'
}

let personTwo: Resource<object> = {
    uuid: 34,
    resorceName: ResourceType.DIRECTOR,
    data: {age: 21, ismarried: false}
};

console.log(personTwo)

// ============================================================= 

// lesson - 20 (tuples)
let arr = ['nang', 21, true];
arr[0] = false;
arr[1] = 'kay';
arr[2] = 30;

let tup: [string, number, boolean] = ['nang', 21, true];
// tup[0] = false
tup[0] = 'kay';