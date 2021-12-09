const app = document.getElementById('app');

let routes = {};

export function addRoute(path, render_function) {
  routes[path] = render_function;
  console.log(routes[path]);
}

function checkRoute(path) {
  //checking if the path exists
  return routes[path];
}

function Router() {
  const url = window.location.pathname;
  console.log(url);
  app.innerHTML = '';
  console.log(routes[url]);
  const render_view = checkRoute(url);
  console.log(render_view);
  render_view();
}

window.addEventListener('load', Router);
window.addEventListener('hashchange', Router);
