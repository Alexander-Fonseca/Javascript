
function typeWrite(elemento) {
    //pegar os texto e separar cada letra 
    const textoArray = elemento.innerHTML.split('');
    //limpar o texto no html
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        //animação
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 100 * i)
    });
}

const titulo = document.querySelector('h1');
typeWrite(titulo);