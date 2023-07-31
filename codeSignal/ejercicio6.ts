function solution6(statues: number[]): number {
    let statuesNeeded = 0;
    //Ordenamos el array de más chico a más grande
    statues.sort((a, b) => {
        return a - b;
    })
    console.log(statues)
    //Iteramos a través del array para encontrar huecos entre los valores
    for (let i = 0; i < statues.length; i++) {
        //Si hay un hueco entre valores adyacentes, se resta el numero más alto del numero más bajo([3,6] seria 6 - 3. Hay un hueco de 3, asi que faltan dos numeros, 4 y 5)
        if (statues[i + 1] - statues[i] > 1) {
            statuesNeeded += statues[i + 1] - statues[i] - 1;
        }
    }
    return statuesNeeded;
}