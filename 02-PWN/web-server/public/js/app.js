console.log('javascript no frontend');

const cotacoesForm = document.querySelector('form');
const mainMensage = document.querySelector('h3');
const price = document.querySelector('#price');
const price_open = document.querySelector('#price_open');
const day_high = document.querySelector('#day_high');
const day_low = document.querySelector('#day_low');

cotacoesForm.addEventListener('submit', (event) => {
    mainMensage.innerText = 'buscando...';
    price.innerText = '';
    price_open.innerText = '';
    day_high.innerText = '';
    day_low.innerText = '';
    event.preventDefault();
    const ativo = document.querySelector('input').value;
    
    if (!ativo)  {
        mainMensage.innerHTML = 'O ativo deve ser informado';
        return;
    }

    fetch(`/cotacoes?ativo=${ativo}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            mainMensage.innerText = `Alguma coisa deu errada`;
            price.innerText = `${data.error.message} | código ${data.error.code}`;
        } else {
            mainMensage.innerText = data.symbol;
            price.innerText = `PRICE USD ${data.price}`;
            price_open.innerText = `OPEN USD ${data.price_open}`;
            day_high.innerText = `HIGH USD ${data.day_high}`;
            day_low.innerText = `LOW USD ${data.day_low}`;
        }
    })
})

})