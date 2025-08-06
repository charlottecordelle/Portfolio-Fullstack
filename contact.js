document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name && email && message) {
        confirmationMessage.classList.remove('hidden');
  
        form.reset();
      }
    });
  });
  