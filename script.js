let competicoes = [];
let atletas = [];

function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === "admin@olimpiadas.com" && senha === "admin321") {
        alert("Bem-vindo ao sistema de gerenciamento de olimpíadas");
        document.getElementById("menu").style.display = "block";
        document.getElementById("login").style.display = "none";
    } else {
        alert("Email ou senha incorreto");
    }
}

function exibirFuncionalidade(funcionalidade) {
    const secoes = document.querySelectorAll('#funcionalidade > div');
    secoes.forEach(secao => secao.classList.add('oculto'));
    document.getElementById(funcionalidade).classList.remove('oculto');

    if (funcionalidade === 'configurarCompeticao') {
        atualizarListaCompeticoes();
    } else if (funcionalidade === 'sistemaAntidoping') {
        atualizarListaAtletas();
    } else if (funcionalidade === 'consultarCompeticao') {
        consultarCompeticoes();
    } else if (funcionalidade === 'cancelarCompeticao') {
        atualizarListaCompeticoes();
    }
}

function criarCompeticao() {
    const nome = document.getElementById('nomeCompeticao').value;
    const descricao = document.getElementById('descricaoCompeticao').value;
    const dataAbertura = document.getElementById('dataAbertura').value;
    const dataEncerramento = document.getElementById('dataEncerramento').value;
    const pais = document.getElementById('paisCompeticao').value;
    const status = "Ativo";

    if (nome && descricao && dataAbertura && dataEncerramento && pais) {
        const competicao = { nome, descricao, dataAbertura, dataEncerramento, pais, status };
        competicoes.push(competicao);
        alert("Competição criada e enviada ao banco de dados com sucesso.");
        document.getElementById('nomeCompeticao').value = '';
        document.getElementById('descricaoCompeticao').value = '';
        document.getElementById('dataAbertura').value = '';
        document.getElementById('dataEncerramento').value = '';
        document.getElementById('paisCompeticao').value = '';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function configurarCompeticao() {
    const indice = document.getElementById('selecionarCompeticao').value;
    const horarioInicio = document.getElementById('horarioInicio').value;
    const local = document.getElementById('localCompeticao').value;
    const cidade = document.getElementById('cidadeCompeticao').value;

    if (indice && horarioInicio && local && cidade) {
        competicoes[indice].horarioInicio = horarioInicio;
        competicoes[indice].local = local;
        competicoes[indice].cidade = cidade;
        alert("Configuração salva com sucesso.");

        // Resetar os campos após salvar
        document.getElementById('horarioInicio').value = '';
        document.getElementById('localCompeticao').value = '';
        document.getElementById('cidadeCompeticao').value = '';
        document.getElementById('selecionarCompeticao').value = '';
    } else {
        alert("Preencha todos os campos.");
    }
}


function adicionarAtleta() {
    const nome = document.getElementById('nomeAtleta').value;
    const nacionalidade = document.getElementById('nacionalidadeAtleta').value;
    const altura = document.getElementById('alturaAtleta').value;
    const peso = document.getElementById('pesoAtleta').value;
    const dataNascimento = document.getElementById('dataNascimentoAtleta').value;
    const genero = document.getElementById('generoAtleta').value;
    const status = document.getElementById('statusAtleta').value;

    if (nome && nacionalidade && altura && peso && dataNascimento) {
        const atleta = { nome, nacionalidade, altura, peso, dataNascimento, genero, status };
        atletas.push(atleta);
        alert("Atleta adicionado com sucesso.");
        document.getElementById('nomeAtleta').value = '';
        document.getElementById('nacionalidadeAtleta').value = '';
        document.getElementById('alturaAtleta').value = '';
        document.getElementById('pesoAtleta').value = '';
        document.getElementById('dataNascimentoAtleta').value = '';
    } else {
        alert("Preencha todos os campos.");
    }
}

function salvarAntidoping() {
    const indice = document.getElementById('selecionarAtleta').value;
    const resultado = document.getElementById('resultadoAntidoping').value;

    if (indice && resultado) {
        atletas[indice].antidoping = resultado;
        alert("Resultado do teste antidoping salvo com sucesso.");
    } else {
        alert("Selecione um atleta e resultado.");
    }
}

function consultarCompeticoes() {
    const lista = document.getElementById('listaCompeticoes');
    lista.innerHTML = '';
    competicoes.forEach((competicao, index) => {
        const item = document.createElement('li');
        item.textContent = `${competicao.nome} - Status: ${competicao.status}`;
        lista.appendChild(item);
    });
}

function cancelarCompeticao() {
    const indice = document.getElementById('selecionarCompeticaoCancelar').value;

    if (indice) {
        competicoes[indice].status = "Cancelada";
        alert("Competição cancelada.");
        consultarCompeticoes();
    } else {
        alert("Selecione uma competição.");
    }
}

function atualizarListaCompeticoes() {
    const seletorCompeticoes = document.getElementById('selecionarCompeticao');
    const seletorCompeticoesCancelar = document.getElementById('selecionarCompeticaoCancelar');

    seletorCompeticoes.innerHTML = '';
    seletorCompeticoesCancelar.innerHTML = '';

    competicoes.forEach((competicao, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = competicao.nome;
        seletorCompeticoes.appendChild(option);
        seletorCompeticoesCancelar.appendChild(option.cloneNode(true));
    });
}

function atualizarListaAtletas() {
    const seletorAtletas = document.getElementById('selecionarAtleta');
    seletorAtletas.innerHTML = '';

    atletas.forEach((atleta, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = atleta.nome;
        seletorAtletas.appendChild(option);
    });
}

function consultarCompeticoes() {
    const lista = document.getElementById('listaCompeticoes');
    lista.innerHTML = '';
    competicoes.forEach((competicao, index) => {
        const item = document.createElement('div');
        item.classList.add('competicao-item');

        const nome = document.createElement('h3');
        nome.textContent = competicao.nome;
        item.appendChild(nome);

        const descricao = document.createElement('p');
        descricao.textContent = `Descrição: ${competicao.descricao}`;
        item.appendChild(descricao);

        const dataAbertura = document.createElement('p');
        dataAbertura.textContent = `Data de Abertura: ${competicao.dataAbertura}`;
        item.appendChild(dataAbertura);

        const dataEncerramento = document.createElement('p');
        dataEncerramento.textContent = `Data de Encerramento: ${competicao.dataEncerramento}`;
        item.appendChild(dataEncerramento);

        const pais = document.createElement('p');
        pais.textContent = `País: ${competicao.pais}`;
        item.appendChild(pais);

        const horarioInicio = competicao.horarioInicio ? competicao.horarioInicio : 'Não configurado';
        const horario = document.createElement('p');
        horario.textContent = `Horário de Início: ${horarioInicio}`;
        item.appendChild(horario);

        const local = competicao.local ? competicao.local : 'Não configurado';
        const localCompeticao = document.createElement('p');
        localCompeticao.textContent = `Local: ${local}`;
        item.appendChild(localCompeticao);

        const cidade = competicao.cidade ? competicao.cidade : 'Não configurado';
        const cidadeCompeticao = document.createElement('p');
        cidadeCompeticao.textContent = `Cidade: ${cidade}`;
        item.appendChild(cidadeCompeticao);

        const status = document.createElement('p');
        status.textContent = `Status: ${competicao.status}`;
        if (competicao.status === 'Cancelada') {
            status.classList.add('competicao-status-cancelada');
        }
        item.appendChild(status);

        lista.appendChild(item);
    });
}

