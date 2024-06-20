// Crear el elemento h1
const h1 = document.createElement('h1');
h1.textContent = 'Este es un título';
h1.setAttribute('title', 'Soy un título');

// Crear el botón
const button = document.createElement('button');
button.textContent = 'Haz click aquí';
button.classList.add('rounded');
button.style.backgroundColor = 'tomato';
button.style.color = 'white';
button.setAttribute('data-id', '12345');

// Insertar el h1 y el botón
document.body.appendChild(h1);
document.body.appendChild(button);

// Anidar elementos
document.body.style.backgroundColor = 'aqua';