const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const fetch = require("node-fetch");
const { gerarDadosFunc } = require("../dados(data)/fakeData");
const { base_url } = require('../config/baseURL');

let putURL;
let dadosFunc;
let responseAtt;
let id;

Given("que o usuario altere uma informacao de funcionario", async () => {
    id = 9;
    putURL = `${base_url}/update/${id}`;

    dadosFunc = gerarDadosFunc();
});

When("ele enviar as novas infomracoes", async () => {
    const response = await fetch(putURL, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Node.js test)",
    },
    body: JSON.stringify(dadosFunc),
});

const responseBody = await response.json();

responseAtt = {
    status: response.status,
    message: responseBody.message,
    data: responseBody.data,
};

console.log("📤 Resposta do PUT:", responseAtt);
});

Then("as informacoes serao alteradas", async () => {
    assert.strictEqual(responseAtt.status, 200); // so passa de o status for exatamente 200
    assert.strictEqual(responseAtt.message.toLowerCase(), 'successfully! record has been updated.');
    // assert.strictEqual(responseAtt.data.employee_name, 'Douglas testPut'); // verifica se o nome foi enviado
    assert.ok(responseAtt.data, "Nenhuma informação de funcionário foi retornada"); //valida se a API realmente retornou um objeto com os dados do funcionário.
});
