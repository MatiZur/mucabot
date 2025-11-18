let lista = []; // arreglo donde se guardan los productos seleccionados

function toggleProducto(nombre, precio) {
    // busca si el producto ya esta en la lista
    const existente = lista.find(item => item.nombre === nombre);

    if (existente) {
        // si ya estaba, lo elimina de la lista
        lista = lista.filter(item => item.nombre !== nombre);
    } else {
        // si no estaba, lo agrega como objeto con nombre y precio
        lista.push({ nombre, precio });
    }

    mostrarLista(); // actualiza la lista visible en pantalla
}

function mostrarLista() {
    const cont = document.getElementById("listaFinal"); // contenedor en el html
    cont.innerHTML = ""; // limpia el contenido anterior

    // si no hay items seleccionados, muestra mensaje base
    if (lista.length === 0) {
        cont.innerHTML = "No hay productos seleccionados.";
        return;
    }

    // recorre cada producto de la lista y lo muestra en el html
    for (let item of lista) {
        cont.innerHTML += `✔ ${item.nombre} — $${item.precio}<br>`; // agrega una linea por producto
    }
}

mostrarLista(); // llama a la funcion apenas carga la pagina