const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        if(b === 0) throw new Error("División por cero");
        return a / b;
    }
};

module.exports = calculadora;
