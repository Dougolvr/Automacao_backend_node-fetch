const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const fetch = require('node-fetch');

let getUrl;
let apiResponse;

Given('que o usuario consulte informacoes de funcionario', async() => {
    getUrl = 'https://dummy.restapiexample.com/api/v1/employees';
});

When('ele realizar a pesquisa', async() => {
    const response = await fetch(getUrl);
    const body = await response.json();

    apiResponse = {
        status: response.status,
        message: body.message,
        data: body.data,
    };

    console.log(body);
});

Then('uma lista de funcionarios deve retornar', async() => {
    assert.strictEqual(apiResponse.status, 200);
    assert.strictEqual(apiResponse.message.toLowerCase(), 'successfully! all records has been fetched.'); // toLowerCase() é usado para evitar erro por diferença de letras maiúsculas/minúsculas
    assert.ok(Array.isArray(apiResponse.data), 'Esperava uma lista de funcionários'); // Verifica se apiResponse.data é realmente uma lista (array).
});
