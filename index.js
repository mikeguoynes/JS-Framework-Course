// Import stylesheets
import './style.css';
import { Framework } from './framework.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>1 way data binding</h1>`;

const x = Framework();
x.init();
x._render();

/**
 * Attaches change detection to the component.
 * @param component
 */
function attachChangeDetection(component) {
  // The proxy lets us listen for when the component updates the state.
  return new Proxy(component, {
    set(target, property, value) {
      // On State Updates, re-render the component
      if (property === '_state') {
        target[property] = value;
        document.getElementById('app').innerHTML = component.render();
      }
      return true;
    },
  });
}
