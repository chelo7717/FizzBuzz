import FizzBuzz from "./fizzbuzz.js"

describe("FizzBuzz para un numero", () => {
  it("deberia generar el mismo numero 1 no tiene reglas", () => {
    const fb=new FizzBuzz();
    const resultado = fb.generarPara(1);
    expect(resultado).toEqual('1');
  });
  it("deberia generar el mismo numero 2 no tiene reglas ", () => {
    const fb=new FizzBuzz();
    const resultado = fb.generarPara(2);
    expect(resultado).toEqual('2');
  });
  it("deberia generar fizz para el 3 ", () => {
    const fb=new FizzBuzz();
    const resultado = fb.generarPara(3);
    expect(resultado).toEqual('Fizz');
  });
  it("deberia generar fizz para el 6", () => {
    const fb=new FizzBuzz();
    const resultado = fb.generarPara(6);
    expect(resultado).toEqual('Fizz');
  });
  it("deberia generar buzz para el 5", () => {
    const fb=new FizzBuzz();
    const resultado = fb.generarPara(5);
    expect(resultado).toEqual('Buzz');
  });
  it("deberia generar buzz para el 10", () => {
    const fb=new FizzBuzz();
    const resultado = fb.generarPara(10);
    expect(resultado).toEqual('Buzz');
  });
});
