const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/users');

beforeAll(async () => {
    await User.deleteMany();
});

test('Should call GET method successfuly', async () => {
    await request(app).get('/users').expect(200);
});

test("Should call POST method successfuly and create a new user", async() => {
    await request(app)
            .post('/users')
            .send({ 
                name: 'Rafael Braga',
                email: 'rafabraga@gmail.com',
                password: 'meuSegredo'
            })
            .expect(201);
});

test('Should call GET method and gel all Users', async () => {
    const response = await request(app).get('/users').expect(200);
    expect(response.body[0].name).toBe('Rafael Braga');
});

// test('should pass', () => {
//     const valor1 = 10;
//     const valor2 = 20;

//     const soma = valor1 + valor2;
//     expect(soma).toBe(30);
// })

// test('should async 1', (done) => {
//     setTimeout(() => {
//         const valor1 = 10;
//         const valor2 = 20;
    
//         const soma = valor1 + valor2;
//         expect(soma).toBe(30);
//         done()
//     }, 200)
// })

// test('should async 2', (done) => {
//     funcao(1,2).then((resultado) => {
//         expect(resultado).toBe(3);
//         done();
//     })
// })

// test('should async 2', async (done) => {
//     const soma = await soma(1, 2);
//     expect(resultado).toBe(3);
// })
