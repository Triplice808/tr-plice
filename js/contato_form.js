document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const dados = {
      nomeCompleto: document.getElementById('nomeCompleto').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      motivoConsulta: document.getElementById('motivoConsulta').value
    };

    // Use SEU_URL_DO_SCRIPT
    fetch('https://script.google.com/macros/s/AKfycbxzFyDYtmkCiohtFSMcY80eqOpwyfMek_dFpP5JotaM0ZHjxRm5OdQjEPcrTnUOd6Mt/exec', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json()) // Alterado para .json()
    .then(result => {
      if (result.success) {
        alert(result.message);
        document.getElementById('form-contato').reset();
      } else {
        alert("Erro: " + result.error);
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Falha ao conectar ao servidor.');
    });
  });