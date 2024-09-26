const form = document.getElementById('form-atividade');
let linhas = '';
let quantidadeContatos = 0; // Variável para contar os contatos

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const table = document.querySelector('tbody');
    table.innerHTML = linhas;

    // Atualiza a quantidade de contatos
    quantidadeContatos++;
    document.getElementById('qtd-contatos').textContent = quantidadeContatos;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    inputEmail.value = '';
});

// Função para formatar o telefone
const formatarTelefone = (input) => {
    input.value = input.value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/^(\d{2})(\d)/, '($1) $2') // Formata o DDD
        .replace(/(\d{5})(\d)/, '$1-$2') // Formata o número
        .replace(/(-\d{4})\d+$/, '$1'); // Limita a 4 dígitos após o traço
};

const inputNumeroContato = document.getElementById('numero-contato');
inputNumeroContato.addEventListener('input', () => formatarTelefone(inputNumeroContato));