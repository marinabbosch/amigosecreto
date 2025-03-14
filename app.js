let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value;

    if (nombre === '') {
        alert('Debes ingresar un nombre');
        return;
    }

    listaAmigos.push(nombre);

    input.value = '';

}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacia, agregar nombres antes de sortear'); 
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indice];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`

}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}