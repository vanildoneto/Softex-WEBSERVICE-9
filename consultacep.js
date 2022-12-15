const {consultarCep} = require('correios-brasil');
const cep = '51250350';
consultarCep(cep).then(response => {
    console.log(response);
});