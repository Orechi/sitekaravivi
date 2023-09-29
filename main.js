function tocar(idAudio) {

    document.querySelector(idAudio).play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    lista[contador].onclick = function () {
        tocar('idAudio');

    }

    const classe = lista[contador].classList[1];
    console.log(classe);
    contador = contador + 1;
    console.log(contador);

    contador = contador + 1;
    console.log(contador);
    const idAudio = `#som_${classe}`;
    console.log(idAudio);

}




