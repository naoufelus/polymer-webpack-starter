import { MyApp } from './app';

const elements = [
    MyApp,
    // Add your STATIC elements here
];

for (const el of elements) {
    customElements.define(el.is, el);
}
