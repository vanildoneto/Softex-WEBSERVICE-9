const {rastrearEncomendas} = require('correios-brasil');
let codRastreio = [' NA338343825BR '];
rastrearEncomendas(codRastreio).then(response =>  {
    console.log(response[0].eventos.reserve());
});