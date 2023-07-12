// Função para exibir as mensagens
function exibirMensagens() {
  const divMensagens = document.getElementById('divMensagens');

  // Obtenha as mensagens do Local Storage
  const mensagens = JSON.parse(localStorage.getItem('mensagens'));

  let msgStructure = '';
  if (mensagens && mensagens.length > 0) {
    mensagens.forEach(function (mensagem) {
      msgStructure += `<h3 class="text-primary" id="h2" style="font-family: 'Courier New', Courier, monospace;">${mensagem.nome}</h3>
        <p style="font-family: 'Courier New', Courier, monospace;">${mensagem.email}</p>
        <p style="font-family: 'Courier New', Courier, monospace;">${mensagem.mensagem}</p>
      `;
    });

    divMensagens.innerHTML = msgStructure;
  } else {
    divMensagens.innerHTML = `<p>Nenhuma mensagem encontrada.</p>`;
  }
}

// Função para limpar todas as mensagens do Local Storage
function limparMensagens() {
  localStorage.removeItem('mensagens');
  exibirMensagens();
}

// Exiba as mensagens ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  exibirMensagens();

  // Botão para limpar todas as mensagens
  const btnLimparMensagens = document.getElementById('btnLimparMensagens');
  btnLimparMensagens.addEventListener('click', function () {
    limparMensagens();
  });
});
