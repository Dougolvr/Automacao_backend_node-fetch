const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const fetch = require('node-fetch');

let deleteURL;
let responseDelete; // nao sei se esse nome é ideal para a ação
let id;

Given('que o usuario queira deletar um funcionario', async() => {
    id = 3;
    deleteURL = `https://dummy.restapiexample.com/api/v1/delete/${id}`;
    
});

When('ele enviar a indentificacao unica', async() => {
    const response = await fetch(deleteURL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Node.js test)'
    }
});

const responseBody = await response.json();

responseDelete = {
    status: response.status,
    message: responseBody.message, // resposta em json
    data: responseBody.data, // resposta em json
};

console.log('🗑️  Resposta do DELETE:', responseDelete);
});

Then('esse funcionario sera deletado do sistema', async() =>{
    assert.strictEqual(responseDelete.status, 200);
    assert.strictEqual(responseDelete.message.toLowerCase(), 'successfully! record has been deleted');
    assert.strictEqual(responseDelete.data, `${id}`); // verificação confirma que o funcionário com ID 7 foi o que foi deletado 
});
