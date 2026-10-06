// =====================================
// CALCULADORA MATEMÁTICA
// =====================================


// Obtener elementos del HTML

const numero1 = document.getElementById("numero1");

const numero2 = document.getElementById("numero2");

const operacion = document.getElementById("operacion");

const botonCalcular = document.getElementById("calcular");

const resultado = document.getElementById("resultado");


// =====================================
// FUNCIÓN PARA CALCULAR
// =====================================

botonCalcular.addEventListener("click", function () {

    // Convertir los valores a números

    const n1 = parseFloat(numero1.value);

    const n2 = parseFloat(numero2.value);

    const operador = operacion.value;


    // Comprobar si los valores son números

    if (isNaN(n1) || isNaN(n2)) {

        resultado.textContent =
            "⚠️ Introduce los dos números.";

        return;
    }


    // Variable para guardar el resultado

    let calculo;


    // Realizar operación

    switch (operador) {

        case "+":

            calculo = n1 + n2;

            break;


        case "-":

            calculo = n1 - n2;

            break;


        case "*":

            calculo = n1 * n2;

            break;


        case "/":

            // Comprobar división entre cero

            if (n2 === 0) {

                resultado.textContent =
                    "⚠️ No se puede dividir entre cero.";

                return;
            }

            calculo = n1 / n2;

            break;
    }


    // Mostrar resultado

    resultado.textContent =
        "Resultado: " + calculo;
});
