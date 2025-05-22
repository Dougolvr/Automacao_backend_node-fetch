const{ Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const fetch = require('node-fetch');

let postUrl;
let responseCadastro; // Representa a resposta da requisição de cadastro
let dadosFunc; 	// Representa os dados do funcionário enviados no corpo do POST

Given('que o usuario cadastre um novo funcionario', async() =>{
    postUrl = 'https://dummy.restapiexample.com/api/v1/create';

    dadosFunc = {
        "id": 24,
        "employee_name": 'Douglas tester',
        "employee_salary": 85600,
        "employee_age": 26,
        "profile_image": ''
    };
});

When('ele enviar as informacoes do funcionario', async() => {
    // Envia os dados do funcionário para a API via POST e espera a resposta
    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Node.js test)' // Isso ajuda a evitar bloqueio da API, assumindo que são bots.
        },
        body: JSON.stringify(dadosFunc),
    });

    // Converte a resposta da API (que vem como texto) em um objeto JavaScript
    const responseBody = await response.json();

    // Organiza a resposta da API em uma variável para ser usada nas validações do Then.
    responseCadastro ={
        status: response.status,
        message: responseBody.message,
        data: responseBody.data
    };

    console.log('🔄 Resposta do POST:', responseCadastro);

});

Then('esse funcionario sera cadastrado', async() => {
    assert.strictEqual(responseCadastro.status, 200);
    assert.strictEqual(responseCadastro.message.toLowerCase(), 'successfully! record has been added.');
    assert.ok(responseCadastro.data.id, 'Nenhum ID encontrado para o funcionario!'); // Caso não encontre um id nos dados recebidos a mensagem será exibida
});