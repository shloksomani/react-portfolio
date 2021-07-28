# react-typed

### A react wrapper for [typed.js](https://github.com/mattboldt/typed.js)

---


[Installation](#installation)

[Examples](http://ssbeefeater.github.io/react-typed)

[Documentation](#documentation)

---

#### Installation

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/)

```sh
yarn add react-typed
        #or
npm install react-typed --save
```
---
#### Examples

```javascript
import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />
                <br/>

                <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
            </div>
        );
    }
}

render(
    <MyComponent/>,
    document.getElementById('app'),
);

```

###### Using typed start, stop, toggle, destroy, reset functions
```javascript
import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';

class MyComponent extends Component {
    render() {
        return (
                <div>
                    <Button onClick={this.typed.start()}>Start</Button>
                    <Button onClick={this.typed.stop()}>Stop</Button>
                    <Button onClick={this.typed.toggle()}>Toggle</Button>
                    <Button onClick={this.typed.destroy()}>Destroy</Button>
                    <Button onClick={this.typed.reset()}>Reset</Button>
                    <Typed
                    typedRef={(typed) => { this.typed = typed; }}
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                    />
                </div>
        );
    }
}

render(
    <MyComponent/>,
    document.getElementById('app'),
);

```

for blinking cursor ```import 'react-typed/dist/animatedCursor.css';```

#### Documentation


React-typed supports all official options that you can find [here](http://www.mattboldt.com/typed.js/docs/).
But also supports some extra props:


| propType  | required | default  | description |
| ------------- | ------------- | ------------- | ------------- |
| style(object) | no | - | styles for the outer element |
| className(string) | no | - | class name for the outer element |
| children(object) | no | - | the element to wrap |
| typedRef(func) | no | - | typedRef(self: Typed) returns the Typed instance |
| stopped(bool) | no | - | initialize in stopped state |
