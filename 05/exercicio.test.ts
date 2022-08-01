import { validaTriangulo } from "./exercicio";

describe("Exercício 05 - Validação de triângulo", () => {
    test("Lados 0, 0, 0", () => {
        expect(validaTriangulo(0, 0, 0)).toBeFalsy();
    });

    test("Lados 1, 1, 1", () => {
        expect(validaTriangulo(1, 1, 1)).toBeTruthy();
    });

    test("Lados 1, 2, 2", () => {
        expect(validaTriangulo(1, 2, 2)).toBeTruthy();
    });

    test("Lados 1, 2, 3", () => {
        expect(validaTriangulo(1, 2, 3)).toBeFalsy();
    });

    test("Lados 3, 2, 1", () => {
        expect(validaTriangulo(3, 2, 1)).toBeFalsy();
    });

    test("Lados 1, 4, 2", () => {
        expect(validaTriangulo(1, 4, 2)).toBeFalsy();
    });

    test("Lados 4, 2, 1", () => {
        expect(validaTriangulo(4, 2, 1)).toBeFalsy();
    });

    test("Lados 5, 7, 10", () => {
        expect(validaTriangulo(5, 7, 10)).toBeTruthy();
    });

    test("Lados 5, 10, 7", () => {
        expect(validaTriangulo(5, 10, 7)).toBeTruthy();
    });

    test("Lados 10, 7, 5", () => {
        expect(validaTriangulo(10, 7, 5)).toBeTruthy();
    });
});

