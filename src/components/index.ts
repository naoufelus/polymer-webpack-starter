import { MyApp } from './app';
import { BindingElement } from './app/binding-element';
import { LazyElement } from './app/lazy-element';

const elements = [
    MyApp,
    LazyElement,
    BindingElement
    // Add your STATIC elements here
];

for (const el of elements) {
    customElements.define(el.is, el);
}
