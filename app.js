// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAgregar = document.getElementById('amigo'); // Input del nombre
    let inputValor = inputAgregar.value.trim(); // Obtener y limpiar el valor

    if (inputValor === '') {
        alert('Debes agregar un nombre'); // Evitar nombres vacíos
        return;
    }

    amigos.push(inputValor); // Agregar el nombre al array
    actualizarListado(); // Actualizar la lista visual
    console.log('Lista de amigos actual:', amigos);

    inputAgregar.value = ''; // Limpiar el input
}

// Función para actualizar la lista visual
function actualizarListado() {
    // Seleccionar el elemento de la lista donde se mostrarán los amigos
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo 'amigos' y crear elementos de lista (<li>)
    for (let amigo of amigos) {
        
        let li = document.createElement('li');// Crear un nuevo elemento <li> para cada amigo
        li.textContent = amigo;

        
        lista.appendChild(li);// Agregar el elemento <li> al DOM (a la lista)
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear o ya se han sorteado todos.');
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio y seleccionar un nombre
    let nombreSeleccionado = amigos[indiceAleatorio];

    
    let resultado = document.getElementById('resultado'); // Mostrar el resultado en la lista de resultados
    let li = document.createElement('li');
    li.textContent = `🎉 ${nombreSeleccionado} es el amigo secreto seleccionado`;
    resultado.appendChild(li);

    
    amigos.splice(indiceAleatorio, 1); // Eliminar el nombre seleccionado del array
    actualizarListado(); // Actualizar la lista visual tras eliminar el amigo
    console.log('Nombre seleccionado:', nombreSeleccionado);
    console.log('Amigos restantes:', amigos);

    // Verificar si ya no quedan amigos después del sorteo
    if (amigos.length === 0) {  
        setTimeout(() => {
            document.getElementById('reiniciarBtn').style.display = 'flex';
            alert('Todos los amigos han sido sorteados. Reinicia el juego para volver a empezar.');

        }, 100); // Pequeño retraso para asegurar la visualización
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpiar el input
    document.getElementById('amigo').value = '';

    // Limpiar la lista visual y los resultados
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    // Vaciar el arreglo de amigos
    amigos = [];

    // Ocultar el botón de reinicio
    let reiniciarBtn = document.getElementById('reiniciarBtn');
    if (reiniciarBtn) {
        reiniciarBtn.style.display = 'none'; // Asegurarte de ocultar el botón correctamente
    }

    console.log('El juego ha sido reiniciado');
}