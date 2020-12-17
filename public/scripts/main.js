

const options = {
    method: 'GET',
    mode: 'cors',
    cacahe: 'default'
}

fetch(`https://reqres.in/api/login`, options)
    .then(response =>{response.json()
        .then(data => console.log(data))
    })
    .catch(erro => console.log ('Erro: ' + erro))



