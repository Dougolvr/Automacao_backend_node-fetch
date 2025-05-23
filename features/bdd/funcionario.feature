# language: pt

Funcionalidade: Pesquisar Funcionarios
    Para averiguar informacoes
    O usuário do sistema
    Deseja poder consultar informacoes dos funcionarios

@cenarioGet
Cenario: Buscar informações de funcionarios
    Dado que o usuario consulte informacoes de funcionario
    Quando ele realizar a pesquisa
    Entao uma lista de funcionarios deve retornar

@cenarioPost
Cenario: Cadastrar funcionario
    Dado que o usuario cadastre um novo funcionario
    Quando ele enviar as informacoes do funcionario
    Entao esse funcionario sera cadastrado

@cenarioPut
Cenario: Alterar informacoes cadastrais
    Dado que o usuario altere uma informacao de funcionario
    Quando ele enviar as novas infomracoes
    Entao as informacoes serao alteradas

@cenarioDelete
Cenario: Deletar cadastro de funcionario
    Dado que o usuario queira deletar um funcionario
    Quando ele enviar a indentificacao unica
    Entao esse funcionario sera deletado do sistema