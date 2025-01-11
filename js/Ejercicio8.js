const invitados = new Set();

function agregarInvitado(nombre) {

    if (invitados.has(nombre)) {
        console.log(`${nombre} ya está en la lista.`);
    } else {
        invitados.add(nombre);
        console.log(`${nombre} ha sido agregado a la lista.`);
    }
}

function eliminarInvitado(nombre) {

    if (invitados.has(nombre)) {
        invitados.delete(nombre);
        console.log(`${nombre} ha sido eliminado de la lista.`);
    } else {
        console.log(`${nombre} no está en la lista.`);
    }
}

function mostrarInvitados() {
    if (invitados.size === 0) {
        console.log("La lista de invitados está vacía.");
    } else {
        console.log("Lista de invitados:");
        console.log(invitados);
    }
}

agregarInvitado("Ana");
agregarInvitado("Carlos");
agregarInvitado("Ana"); 
eliminarInvitado("Carlos");
mostrarInvitados();