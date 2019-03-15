
import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';


export class BindingElement extends PolymerElement {
  // dynamicPath = 'test';

    static get template() {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html`
        <paper-input placeholder="Insert your name" value="{{dynamicPath}}"></paper-input>
          <paper-button>
            Go&nbsp;
            <iron-icon icon="my-icons:chevron-right"></iron-icon>
          </paper-button>
    `;
    }

    static get is() {
      return 'binding-element';
    }

    static get properties() {
      return {
        dynamicPath: String,
      };
    }


}
