const formularioNoticias = document.getElementById("formulario-noticias");
const noticiasContainer = document.getElementById("noticias");

formularioNoticias.addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;

    // Crear un nuevo elemento de noticia
    const noticiaElement = document.createElement("div");
    noticiaElement.classList.add("noticia");
    noticiaElement.innerHTML = `
        <h2>${titulo}</h2>
        <p>${contenido}</p>
    `;

    // Agregar la noticia al contenedor
    noticiasContainer.appendChild(noticiaElement);

    // Limpiar el formulario
    formularioNoticias.reset();
});
