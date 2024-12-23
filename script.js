//// Array de objetos personajes

const personajes = [
    {
        nombre: "Michael Scott",
        actor: "Steve Carell",
        imagen: "images/michael.jpg"
    },
    {
        nombre: "Jim Halpert",
        actor: "John Krasinski",
        imagen: "images/jimhalpert.jpg"
    },
    {
        nombre: "Dwight Schrute",
        actor: "Rain Wilson",
        imagen: "images/dwigth.jpg"
    },
    {
        nombre: "Pam Beesly",
        actor: "Jenna Fisher",
        imagen: "images/pam.jpg"
    },
    {
        nombre: "Ryan Howard",
        actor: "B.J. Novak",
        imagen: "images/ryan.jpg"
    },
    {
        nombre: "Stanley Hudson",
        actor: "Leslie David Baker",
        imagen: "images/stanley.jpg"
    },
    {
        nombre: "Kevin Malone",
        actor: "Brian Baumgartner",
        imagen: "images/kevin2.jpg"
    },
    {
        nombre: "Creed Bratton",
        actor: "Creed Bratton",
        imagen: "images/creed.jpg"
    },
    {
        nombre: "Meredith Palmer",
        actor: "Kate Flannery",
        imagen: "images/meredith.jpg"
    },
    {
        nombre: "Kelly Kapoor",
        actor: "Mindy Kaling",
        imagen: "images/kelly.jpg"
    },
    {
        nombre: "Angela Martin",
        actor: "Angela Kinsey",
        imagen: "images/angela2.jpg"
    },
    {
        nombre: "Toby Flenderson",
        actor: "Paul Lieberstein",
        imagen: "images/toby.jpg"
    },
    {
        nombre: "Oscar Martinez",
        actor: "Oscar Nunez",
        imagen: "images/oscar.jpg"
    },
    {
        nombre: "Darryl Philbin",
        actor: "Craig Robinson",
        imagen: "images/darryl.jpg"
    },
    {
        nombre: "Phyllis Lapin",
        actor: "Phyllis Smith",
        imagen: "images/phyllis.jpg"
    }
];

const contenedorPersonajes = document.getElementById('personajes')

personajes.forEach(personaje => {
    const personajeDiv = document.createElement('div');
    personajeDiv.classList.add('personaje','text-black','bg-success', 'bg-opacity-50');

    personajeDiv.innerHTML = `
        <img src="${personaje.imagen}" alt="${personaje.nombre}">
        <h3>${personaje.nombre}</h3>
        <p>Actor: ${personaje.actor}</p>
    `;

    contenedorPersonajes.appendChild(personajeDiv);
});