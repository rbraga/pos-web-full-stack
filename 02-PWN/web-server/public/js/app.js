console.log('javascript no frontend');

fetch("http://localhost:3000/cotacoes?ativo=PETR4.SA").then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data);
            console.log(`Alguma coisa deu errada ${data.error.message} código ${data.error.code}`);
        } else {
            console.log(data.symbol);
            console.log(data.price);
            console.log(data.price_open);
        }
    })
})