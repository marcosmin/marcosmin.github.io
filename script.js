// valor de ticket
const valorTicket = 200;

// porcentajes
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//tomo los campos
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoriaSelect');
const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');
const parrafo = document.querySelector('#parrafo');



function totalPagar() {
    //calculo valor total
    let totalValor = parseInt(cantidad.value) * valorTicket;

    //condicionar por descuento
    if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2) {
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior);
    }

    parrafo.innerHTML = `Total a pagar : $ ${totalValor}`;


    // Hacer algo con los valores obtenidos
    console.log("----------------------------------");
    console.log("Nombre:", nombre.value);
    console.log("Apellido:", apellido.value);
    console.log("Correo:", correo.value);
    console.log("Cantidad de Tickets:", cantidad.value);
    let selected = categoria.options[categoria.selectedIndex].text;
    console.log("Categoria:", selected);
    console.log("Total a pagar: $", totalValor);
    console.log("----------------------------------");
    

}

botonCalcular.addEventListener('click', totalPagar); 


//boton reset 
botonReset.addEventListener('click', () => {
    nombre.value = '';
    apellido.value = '';
    correo.value = '';
    cantidad.value = '';
    categoria.value = '';
    parrafo.innerHTML = 'Total a pagar : '
    
    
})