  const heading = React.createElement('h1', {id:"heading"},"Ram Rama Reactjs")
  const root  = ReactDOM.createRoot(document.getElementById('root'));

  const parent  = React.createElement('div',{id:"parent"}, React.createElement('div',{id:"child"},[ React.createElement('h1',{key:'h1'}, "nested child elements in React"),  React.createElement('h2',{key:'h2'}, "nested child elements in React")]))
  console.log(parent);
  root.render(parent)
