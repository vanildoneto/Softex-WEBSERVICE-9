const {consultarCep} = require('correios-brasil');
const cep = '00000000';
consultarCep(cep).then(response => {
    console.log(response);
});
