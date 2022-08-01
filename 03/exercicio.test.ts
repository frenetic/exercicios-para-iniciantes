import { calculoDeImpostoMensal } from "./exercicio";

describe("Exercício 03 - Cálculo de imposto mensal", () => {
    test("Quando a pessoa não recebe salário", () => {
        expect(calculoDeImpostoMensal(0)).toBe(0);
    });

    test("Quando recebe R$100,00", () => {
        expect(calculoDeImpostoMensal(100)).toBe(0);
    });

    test("Quando recebe R$1000,00", () => {
        expect(calculoDeImpostoMensal(1000)).toBe(0);
    });

    test("Quando recebe R$1500,00", () => {
        expect(calculoDeImpostoMensal(1500)).toBe(0);
    });

    test("Quando recebe R$1.903,98", () => {
        expect(calculoDeImpostoMensal(1903.98)).toBe(0);
    });

    test("Quando recebe R$1.903,99", () => {
        expect(calculoDeImpostoMensal(1903.99)).toBeCloseTo(142.799);
    });

    test("Quando recebe R$2.000,00", () => {
        expect(calculoDeImpostoMensal(2000.00)).toBe(150);
    });

    test("Quando recebe R$2.826,65", () => {
        expect(calculoDeImpostoMensal(2826.65)).toBeCloseTo(211.998);
    });

    test("Quando recebe R$2.826,66", () => {
        expect(calculoDeImpostoMensal(2826.66)).toBeCloseTo(423.99899);
    });

    test("Quando recebe R$3.751,05", () => {
        expect(calculoDeImpostoMensal(3751.05)).toBe(562.6575);
    });

    test("Quando recebe R$3.751,06", () => {
        expect(calculoDeImpostoMensal(3751.06)).toBe(843.9885);
    });

    test("Quando recebe R$4.664,68", () => {
        expect(calculoDeImpostoMensal(4664.68)).toBe(1049.553);
    });

    test("Quando recebe R$4.664,69", () => {
        expect(calculoDeImpostoMensal(4664.69)).toBe(1282.78975);
    });

    test("Quando recebe R$5.000,00", () => {
        expect(calculoDeImpostoMensal(5000)).toBe(1375);
    });

    test("Quando recebe R$10.000,00", () => {
        expect(calculoDeImpostoMensal(10000)).toBe(2750);
    });
});

