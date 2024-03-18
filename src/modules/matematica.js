const suma = (num1, num2) => {
    return num1 + num2;
}

const resta = (num1, num2) => {
    return num1 - num2;
}

function multiplicar (num1, num2) {
    let PI = 3.14;
    return ((num1 * num2) * PI)
}

function sumarTodo () {
    const arrayNumeros = [2, 4, 8, 10];

    const sumarTodosLosNumeros = arrayNumeros.reduce((acc, numero) => acc + numero, 0);
    return sumarTodosLosNumeros;
}

export {suma, resta, multiplicar, sumarTodo};
