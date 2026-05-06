const servicios = [

    {
        nombre: "Caminata Monte Tarn",
        precio: "$45.000",
        descripcion: "Disfruta una aventura extrema recorriendo los increíbles paisajes del Monte Tarn.",
        imagen: "img/monte-tarn.jpg"
    },

    {
        nombre: "Caminata Parrillar",
        precio: "$35.000",
        descripcion: "Explora bosques y senderos naturales en una experiencia inolvidable.",
        imagen: "img/parrillar.jpg"
    },

    {
        nombre: "Mirador Zapador Austral",
        precio: "$50.000",
        descripcion: "Conoce uno de los mejores miradores de la Patagonia chilena.",
        imagen: "img/zapador-austral.jpg"
    }

];



function mostrarServicios() {

    const contenedor = document.getElementById("contenedorServicios");

    servicios.forEach(servicio => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

        <img src="${servicio.imagen}">

        <div class="card-contenido">

            <h3>${servicio.nombre}</h3>

            <p>${servicio.descripcion}</p>

            <span class="precio">${servicio.precio}</span>

        </div>

        `;

        contenedor.appendChild(card);

    });

}




function validarFormulario(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let celular = document.getElementById("celular").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let ciudad = document.getElementById("ciudad").value;
    let consulta = document.getElementById("consulta").value;



    if (
        nombre === "" ||
        celular === "" ||
        email === "" ||
        pais === "" ||
        ciudad === "" ||
        consulta === ""
    ) {

        alert("Complete todos los campos");

        return;
    }



    if (isNaN(celular)) {

        alert("El celular debe contener solo números");

        return;
    }



    if (!email.includes("@")) {

        alert("Ingrese un correo válido");

        return;
    }



    document.getElementById("mensaje").innerHTML =
        "Formulario enviado correctamente";



    limpiarFormulario();

}




function limpiarFormulario() {

    document.getElementById("formulario").reset();

}




mostrarServicios();



document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);