const contactFormEl = document.querySelector('.login-form');

const onContactFormElSubmit = event => {
  event.preventDefault();
  const email = event.target.elements[0].value;
  const password = event.target.elements[1].value;
  if (email === '' || password === '') {
    alert("Всі поля мають бути заповнені!")
   }
   else {
    const finalObject = {email, password} ;
    console.log(finalObject)
    event.target.reset();
   }
};

contactFormEl.addEventListener('submit', onContactFormElSubmit);
