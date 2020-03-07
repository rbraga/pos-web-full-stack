const getPrice = (symbol, callback) => {
    setTimeout(() => {
        const data = {
            symbol: 'PETR4.SA',
            price: 10
        }

        callback(data);
    }, 2000);
}

// const price = getPrice('PETR4.SA');
// console.log(price);

// getPrice('PETR.4', (data) => {
//     console.log(data);
// })

const somaAsync = (valor1, valor2, callback) => {
    setTimeout(() => {
        const resultadoSoma = valor1 + valor2;
        callback(resultadoSoma);
    }, 3000)
}

somaAsync(2, 6, (resultadoSoma) => {
    console.log(resultadoSoma);
})