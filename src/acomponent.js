import Inferno from 'inferno'
import createElement from 'inferno-create-element'
import Component from 'inferno-component';
import myapp from './style.css'
import { red } from './style.css';

var message = 'subcomponent'

console.log("sssssss", red)

class MyComponent extends Component {
  render() {
    return <div>Hello world</div>;
  }
}

export default MyComponent
