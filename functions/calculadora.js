function estimativaDeVida (person){
    let lifeExpectancy = 76;

    if (person.fumante == 'on'){
        lifeExpectancy += -5.5;
    }
    if (person.sexo == 'Feminino'){
        // Considerando que metade da população é composta por mulheres, então elas influenciam em metade da média da expectativa de vida.
        lifeExpectancy += 2.5;
    }
    if (person.otimista == 'on'){
        lifeExpectancy += 1;
    }
    if (person.frutas == 'on'){
        lifeExpectancy += 1.4;
    }
    if (person.legumes == 'on'){
        lifeExpectancy += 0.9;
    }
    if (person.formacao == 'EnsinoSuperior'){
        lifeExpectancy += 13;
    }
    if (person.estresse == 'on'){
        lifeExpectancy += -2.3;
    }


    if (Number(person.bebida) > 15 && Number(person.bebida) <= 18){
        // Considerando uma pessoa que bebe entre 16 e 18 doses de bebida por semana
        lifeExpectancy += -1.5;
    }else if(Number(person.bebida) > 18) {
        // Considerando uma pessoa que bebe mais de 18 doses de bebida por semana.
        lifeExpectancy += -4.5;
    }else{}


    
    if (person.diabetes == 'on'){
        if(person.frutas == undefined && person.legumes == undefined && person.atividade == undefined){
            // Considerando uma pessoa diabetica que não se cuida.
            lifeExpectancy += -5.3;
        }
    }
    else{
        if (person.atividade == undefined){
            // Considerando uma pessoa que não pratica atividades fisicas regularmente e não é diabetica.
            lifeExpectancy += -2.4;
        }
    }

    return Math.round(lifeExpectancy);
}

module.exports = estimativaDeVida;