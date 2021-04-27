var maquina
let promises = [];
fetch(`/maquina/${sessionStorage.cnpj}`, {
    method: 'GET',
}).then(function (response) {
    return response.json();
}).then((maquinas) => {
    return maquinas;
}).then((res) => {
    maquina = res
    for (var i = 0; i < maquina.length; i++) {
        promises.push(fetch(`/log/ultimo/${maquina[i].hostName}`, {method: 'GET',}))
    }
}).then(() => {
    Promise.all(promises).then(function (response) {
        return Promise.all(response.map(function (resposta) {
            return resposta.json();
          }));
    }).then((log) => {
        for (var i = 0; i < maquina.length; i++) {
        console.log(maquina[i].hostName);
        montaTabela(maquina[i], log[i])
        }
    })
})




function montaTabela(info, dados) {
    var Tr = montaTr(info, dados);

    var tabela = document.querySelector('tbody');
    tabela.appendChild(Tr);
}

function montaTr(info, dados) {
    var Tr = document.createElement('tr');

    Tr.appendChild(montaTd(info.hostName));
    Tr.appendChild(montaTd(dados.usoCpu.toString() + "%"));
    Tr.appendChild(montaTd(((dados.usoMemoria * 100) / info.qtdMemoria).toFixed(2) + "%"));
    Tr.appendChild(montaTd(((dados.usoArmazenamento * 100) / info.qtdArmazenamento).toFixed(2) + "%"));

    return Tr;
}

function montaTd(dado) {
    var td = document.createElement('td');
    td.textContent = dado;
    return td;
}