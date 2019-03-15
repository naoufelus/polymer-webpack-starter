import { PolymerElement, html } from '@polymer/polymer/polymer-element';
// import { property } from '@polymer/decorators';

import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-checkbox/paper-checkbox';

import '../shared-styles';
import '../icons';
import './binding-element';

import view from './app.template.html';
import style from './app.style.scss';

export class MyApp extends PolymerElement {
  /* @property({ type: String }) message: string = 'foo';
  @property({ type: Boolean }) pie: boolean = true;
  @property({ type: Boolean }) loadComplete: boolean = true; */

  message: string;
  pie = true;
  loadComplete = true;

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  static get is() {
    return 'my-app';
  }

  static get properties() {
    return {
      message: {
        type: String,
        value: ''
      },
      pie: {
         type: Boolean,
         value: false,
         observer: 'togglePie'
       },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    super();
    console.log(this);
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  togglePie() {
    if (this.pie && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import('./lazy-element').then((le) => {
        console.log("LazyElement loaded", le);
      }).catch((reason) => {
        console.log("LazyElement failed to load", reason);
      });
      this.loadComplete = true;
    }
  }

}