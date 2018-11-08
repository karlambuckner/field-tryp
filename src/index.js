var title = React.createElement('h1', {}, 'Field Tryp');
var about = React.createElement('h3', {}, 'Making day trips possible and environmentally more friendly. See the places you can go in cities across the US.');
var city = React.createElement('h2', {}, 'Select a location');
var app = React.createElement('div', {}, title, about, city);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
