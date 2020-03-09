console.log('javascript no frontend');



const cotacoesForm = document.querySelector('form');
cotacoesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const ativo = document.querySelector('input').value;
    
    if (!ativo)  {
        console.log('O ativo deve ser informado');
        return;
    }

    fetch(`http://localhost:3000/cotacoes?ativo=${ativo}`).then((response) => {
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

})