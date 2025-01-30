document.getElementById('form-contato').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const dados = {
      nomeCompleto: document.getElementById('nomeCompleto').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      motivoConsulta: document.getElementById('motivoConsulta').value
    };
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyXAzmHI4KSdcScSZlIQ3anIjuw7rdk3LsyZp0OoVPs8x-j0foa72Uuk8DTdjKb_afdkg/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      
      const result = await response.json();
      if (result.success) {
        alert('Dados salvos!');
        document.getElementById('form-contato').reset();
      } else {
        alert('Erro: ' + result.error);
      }
    } catch (error) {
      alert('Falha na conexão. Tente novamente.');
    }
  });