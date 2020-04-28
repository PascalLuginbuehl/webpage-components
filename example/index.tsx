import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { Section } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <Section>
        <p>Test</p>
      </Section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
