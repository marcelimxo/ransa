
// Cambia la ruta
const redirect = (path = '') => {
  window.location.hash = `/${path}`;
};

// Añade el contenido a nuestro div principal
const template = (view) => {
  const root = document.getElementById('root');
  root.innerHTML = view;
};



export { redirect, template };