const calculadora = require('./calculadora');

test('suma 1 + 2 es igual a 3', () => {
    expect(calculadora.sumar(1, 2)).toBe(3);
});

test('resta 5 - 2 es igual a 3', () => {
    expect(calculadora.restar(5, 2)).toBe(3);
});

test('multiplica 3 * 4 es igual a 12', () => {
    expect(calculadora.multiplicar(3, 4)).toBe(12);
});

test('divide 10 / 2 es igual a 5', () => {
    expect(calculadora.dividir(10, 2)).toBe(5);
});

test('división por cero lanza un error', () => {
    expect(() => calculadora.dividir(5, 0)).toThrow("División por cero");
});