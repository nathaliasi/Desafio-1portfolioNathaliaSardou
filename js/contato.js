// Função para obter os dados preenchidos no formulário e salvar no Local Storage
function salvarMensagem() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const mensagemObjeto = { nome, email, mensagem };

  const mensagensAntigas = JSON.parse(localStorage.getItem('mensagens')) || [];
  const mensagensAtualizadas = [...mensagensAntigas, mensagemObjeto];
  localStorage.setItem('mensagens', JSON.stringify(mensagensAtualizadas));

  alert('Mensagem enviada com sucesso!');
}

// Captura o envio do formulário
const formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  salvarMensagem();

  formulario.reset();
});
