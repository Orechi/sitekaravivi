function raissa() {

    document.querySelector('#som_tecla_Pom').play()
}

const lista = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < 9) {
    lista[contador].onclick = raissa;
    contador = contador + 1;
    console.log(contador)

}


