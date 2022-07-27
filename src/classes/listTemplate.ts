import { HasFormatter } from "../interfaces/Hasformatter";

export class ListTemplate {
    constructor(
        private container: HTMLUListElement
    ){}

    render(
        heading: string,
        item: HasFormatter,
        pos: 'start' | 'end'
    ) {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;

        const p = document.createElement('p');
        p.innerText = item.format();
        
        if(pos === 'start') {
            li.prepend(h4, p);
        } else {
            li.append(h4, p);
        }
        this.container.append(li);
    }
}