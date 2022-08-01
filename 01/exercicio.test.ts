import { celsiusParaFahrenheit } from "./exercicio";

describe("Exercício 01 - Celsius para Fahrenheit", () => {
    test("-17 °C para °F", () => {
        expect(celsiusParaFahrenheit(-17)).toBeCloseTo(1.4);
    });

    test("0 °C para °F", () => {
        expect(celsiusParaFahrenheit(0)).toBe(32);
    });

    test("27,5 °C para °F", () => {
        expect(celsiusParaFahrenheit(27.5)).toBe(81.5);
    });

    test("99 °C para °F", () => {
        expect(celsiusParaFahrenheit(99)).toBe(210.2);
    });

    test("100 °C para °F", () => {
        expect(celsiusParaFahrenheit(100)).toBe(212);
    });
});