import { PolymerElement } from '@polymer/polymer/polymer-element';

import * as view from './app.template.html';



export class MyApp extends PolymerElement {

    static get template() {
        return view;
    }

    constructor() {
        super()
    }

}