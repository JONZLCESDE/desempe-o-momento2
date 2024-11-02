
const depositosAdicionales = [];


function agregarDeposito() {
    const deposito = prompt("Ingresa el monto del depósito adicional:");
    const anio = prompt("Ingresa el año en el que se realizará el depósito:");

    if (deposito && anio) {
        depositosAdicionales.push({ monto: parseFloat(deposito), anio: parseInt(anio) });
        mostrarDepositos();
    } else {
        alert("Por favor, ingrese un monto y un año válidos.");
    }
}


function mostrarDepositos() {
    const depositosContainer = document.getElementById("depositosContainer");
    depositosContainer.innerHTML = "";

    depositosAdicionales.forEach((deposito, index) => {
        depositosContainer.innerHTML += `<p>Depósito de $${deposito.monto.toFixed(2)} en el año ${deposito.anio}</p>`;
    });
}


function calcularInteresCompuesto() {
    const capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
    const interesAnual = parseFloat(document.getElementById("interesAnual").value) / 100;
    const anos = parseInt(document.getElementById("anos").value);

    if (isNaN(capitalInicial) || isNaN(interesAnual) || isNaN(anos)) {
        alert("Por favor, ingresa todos los valores correctamente.");
        return;
    }

    let capitalFinal = capitalInicial;

    
    for (let i = 1; i <= anos; i++) {
        
        const depositosAnuales = depositosAdicionales.filter(deposito => deposito.anio === i);
        
        
        depositosAnuales.forEach(deposito => {
            capitalFinal += deposito.monto;
        });

        
        capitalFinal += capitalFinal * interesAnual;
    }

    
    document.getElementById("resultado").innerText = `Capital final después de ${anos} años: $${capitalFinal.toFixed(2)}`;
}

