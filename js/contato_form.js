document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const dados = {
      nomeCompleto: document.getElementById('nomeCompleto').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      motivoConsulta: document.getElementById('motivoConsulta').value
    };

    fetch('https://script.google.com/macros/s/AKfycbyo95kX9Fi0HRnEGTL1o6ciZJjJNR3KlMqYBNef-A4_6XokDSQgRTODA4jefLdqhBlOUw/exec', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(message => {
      alert(message); // Exibe a resposta do servidor
      document.getElementById('form-contato').reset(); // Limpa o formulário
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar o formulário.');
    });
  });