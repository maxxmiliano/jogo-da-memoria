const input = document.querySelector('.login_input');
const Button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

 const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        Button.removeAttribute('disabled');
        return;
    }

    Button.setAttribute('disabled', '');
    
 }
 
   const handleSubmit = (event) => {
      event.preventDefault();
      
      localStorage.setItem('player', input.value);
      window.location = 'pages/game.html';
   }

    input.addEventListener('input', validateInput);

    form.addEventListener('Submit', handleSubmit);