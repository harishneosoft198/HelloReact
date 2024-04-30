import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div',{id:'parent'},[React.createElement('h1',{id:'head1'},'Namaste React'),React.createElement('h2',{id:'head2'},'hello from h2')]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);