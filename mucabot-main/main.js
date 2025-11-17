let lista = [];

function toggleProducto(nombre, precio) {

    const existente = lista.find(item => item.nombre === nombre);

    if (existente) {
        lista = lista.filter(item => item.nombre !== nombre);
    } else {
        lista.push({ nombre, precio });
    }

    mostrarLista();
}

function mostrarLista() {
    const cont = document.getElementById("listaFinal");
    cont.innerHTML = "";

    if (lista.length === 0) {
        cont.innerHTML = "No hay productos seleccionados.";
        return;
    }

    for (let item of lista) {
        cont.innerHTML += `✔ ${item.nombre} — $${item.precio}<br>`;
    }
}