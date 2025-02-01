document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const message = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const loader = submitBtn.querySelector('.loader');
  const btnText = submitBtn.querySelector('.btn-text');

  // Estado inicial
  message.style.display = 'none';
  btnText.textContent = 'Enviando...';
  loader.style.display = 'inline-block';
  submitBtn.disabled = true;

  try {
    // Validar telefone
    const phone = form.telefone.value;
    if (!/^\d{11}$/.test(phone)) {
      throw new Error('Telefone inválido! Use o formato 11999999999');
    }

    // Preparar dados
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);

    // Envio para Google Sheets
    const response = await fetch('https://script.google.com/macros/s/AKfycbwe0oPpbko_Zf8qcKwG9Se_HGlYEIwxF7kjrur_55NGYvgQ186w-YmBPyXFN7DoSIsHpQ/exec', {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro no servidor');
    }

    // Feedback de sucesso
    message.textContent = 'Agendamento realizado com sucesso! Entraremos em contado em até 24h.';
    message.className = 'alert success';
    form.reset();

  } catch (error) {
    console.error('Erro:', error);
    message.textContent = error.message;
    message.className = 'alert error';
  } finally {
    message.style.display = 'block';
    btnText.textContent = 'Enviar';
    loader.style.display = 'none';
    submitBtn.disabled = false;
    
    setTimeout(() => {
      message.style.display = 'none';
    }, 5000);
  }
});