const parent = React.createElement('div',{id:'parent'},[React.createElement('h1',{id:'head1'},'hello from h1'),React.createElement('h2',{id:'head2'},'hello from h2')]);
console.log(parent);
const root = ReactDOM.root(document.getElementById('root'));
root.render(parent);