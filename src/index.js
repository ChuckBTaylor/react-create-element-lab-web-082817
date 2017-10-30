import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact = React.createElement('div', {className: "me"},
  [
    React.createElement('h1',null, "An Awesome Person"),
    React.createElement('p', null, "Who is learning React"),
    React.createElement('ul', {className: "my-interests"},
      [
        React.createElement('li', null, "JavaScript"),
        React.createElement('li', null, "React"),
        React.createElement('li', null, "Movies"),
        React.createElement('li', null, "Ice cream")
      ]
    )
  ]
)

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
