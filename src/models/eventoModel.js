


const eventos = []

function adicionarEvento(nome, data, local){
    eventos.push({
        id: Date.now(),
        nome: nome,
        data: data,
        local: local,
        criadoEm: new Date()
    })


    console.log(eventos)
}

module.exports = {
    adicionarEvento
}