function tocar() {

    document.querySelector('#som_tecla_Pom').play()
}

const lista = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < 9) {
    lista[contador].onclick = tocar;
    contador = contador + 1;
    console.log(contador)

}




