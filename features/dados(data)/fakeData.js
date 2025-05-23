const { faker } = require('@faker-js/faker');

function gerarDadosFunc() {
    return{
        employee_name: faker.person.fullName(),
        employee_salary: faker.number.int({ min: 5000, max: 20000 }),
        employee_age: faker.number.int({ min: 20, max: 60 }),
        profile_image: '',
    }
};

module.exports = { gerarDadosFunc };