import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, array, button } from '@storybook/addon-knobs';
import '@storybook/addon-knobs/register';
import Typed from '../src';

import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Storybook Knobs', module);
const description = `

* typedInstance.toggle() :Toggle start() and stop() of the Typed instance.
* typedInstance.Stop: typing / backspacing and enable cursor blinking.
* typedInstance.start(): Start typing / backspacing after being stopped.
* destroy(): Destroy this instance of Typed.
* reset(restart?): Reset Typed and optionally restarts.

 You can get typed instance like this\n
<Typed typedRef={ (typedInstance)=>{ this.typed = typedInstance; } } />
`

let typedInstance; // only for demo
const defaults = {
  strings:
    [
      'welcome to react-typed',
      'This is a react component that wraps up the <a href="https://github.com/mattboldt/typed.js/">typed.js</a>',
      'If you like the project add a star in <a href="https://github.com/mattboldt/typed.js/">typed.js</a> and <a href="https://github.com/mattboldt/typed.js/">react-typed</a>'
    ],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
  startDelay: 0,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1,
  fadeOut: false,
  fadeOutDelay: 100,
  loopCount: 0,
  showCursor: true,
  cursorChar: '|',
  attr: 'placeholder',
  bindInputFocusEvents: false,
}

storiesOf('react-typed', module).addDecorator(withKnobs)
  .add('Basic Example', withInfo(description)(() =>
    <div>
      <Typed
        typedRef={(typed) => { typedInstance = typed; }}
        loop={boolean('loop', defaults.loop)}
        typeSpeed={number('type speed', defaults.typeSpeed)}
        backSpeed={number('backspeed', defaults.backSpeed)}
        strings={array('Strings', defaults.strings)}
        smartBackspace={boolean('smartBackspace', defaults.smartBackspace)}
        shuffle={boolean('shuffle', defaults.shuffle)}
        backDelay={number('backDelay', defaults.backDelay)}
        fadeOut={boolean('fadeOut', defaults.fadeOut)}
        fadeOutDelay={number('fadeOutDelay', defaults.fadeOutDelay)}
        loopCount={number('loopCount', defaults.loopCount)}
        showCursor={boolean('showCursor', defaults.showCursor)}
        cursorChar={text('cursorChar', defaults.cursorChar)}
      />
      {button('Reset', () => { typedInstance.reset(); })}
      {button('Start', () => { typedInstance.start(); })}
      {button('Stop', () => { typedInstance.stop(); })}
      {button('Stop', () => { typedInstance.stop(); })}
      {button('Toggle', () => { typedInstance.toggle(); })}
      {button('Destroy', () => { typedInstance.destroy(); })}
    </div>
  )).add('With input', withInfo(description)(() =>
    <div>
      <Typed
        typedRef={(typed) => { typedInstance = typed; }}
        loop={boolean('loop', false)}
        loopCount={number('loopCount', defaults.loopCount)}
        typeSpeed={number('type speed', defaults.typeSpeed)}
        startDelay={number('startDelay', defaults.startDelay)}
        backSpeed={number('backspeed', defaults.backSpeed)}
        backDelay={number('backDelay', defaults.backDelay)}
        strings={array('Strings', ['Add something here'])}
        stopped={boolean('Stopped', defaults.stopped)}
        smartBackspace={boolean('smartBackspace', defaults.smartBackspace)}
        shuffle={boolean('shuffle', defaults.shuffle)}
        fadeOut={boolean('fadeOut', defaults.fadeOut)}
        fadeOutDelay={number('fadeOutDelay', defaults.fadeOutDelay)}
        attr={text('attr', defaults.attr)}
        bindInputFocusEvents={boolean('bindInputFocusEvents', defaults.bindInputFocusEvents)}
      >
        <input type="text" />
      </Typed>
      {button('Reset', () => { console.log(typedInstance); typedInstance.reset(); })}
      {button('Start', () => { typedInstance.start(); })}
      {button('Stop', () => { typedInstance.stop(); })}
      {button('Stop', () => { typedInstance.stop(); })}
      {button('Toggle', () => { typedInstance.toggle(); })}
      {button('Destroy', () => { typedInstance.destroy(); })}
    </div>
  )).add('Smart backspace', withInfo(description)(() =>
    <div>
      <Typed
        strings={['Here you can find hardware', 'Here you can find software', 'Here you can find net tools']}
        typeSpeed={number('type speed', defaults.typeSpeed)}
        backSpeed={number('backspeed', 50)}
        backDelay={number('backDelay', defaults.backDelay)}
        loop={boolean('loop', true)}
        smartBackspace={boolean('smartBackspace', defaults.smartBackspace)}
      />
    </div>
  )).add('Stopped', withInfo(description)(() =>
    <div>
      Press start <br /><br />
      <Typed
        typedRef={(typed) => { typedInstance = typed; }}
        stopped={boolean('Stopped', true)}
        strings={['Here you can find hardware', 'Here you can find software', 'Here you can find net tools']}
        typeSpeed={number('type speed', defaults.typeSpeed)}
        backSpeed={number('backspeed', 50)}
        backDelay={number('backDelay', defaults.backDelay)}
        loop={boolean('loop', true)}
        smartBackspace={boolean('smartBackspace', defaults.smartBackspace)}
      />
      {button('Start', () => { typedInstance.start(); })}
    </div>
  ));
// {/**  */ }
// {/** */ }