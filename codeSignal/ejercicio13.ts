function solution13(inputString: string): string {
    const primerParentesis = inputString.lastIndexOf("(");
    if (primerParentesis === -1) {
        return inputString;
    }
    const ultimoParentesis = inputString.indexOf(")", primerParentesis);

    const textoEnParentesis = inputString.slice(primerParentesis + 1, ultimoParentesis);
    const textoInvertido = textoEnParentesis.split("").reverse().join("");

    const nuevoString = inputString.slice(0, primerParentesis) + textoInvertido + inputString.slice(ultimoParentesis + 1);

    return solution13(nuevoString);
}