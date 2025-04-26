const form = document.getElementById('signup-form');
const modal = document.getElementById('thankyou-modal');
const closeBtn = document.querySelector('.close-btn');

// তোমার Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbzrVzsP0Zu5PtvLrd3xq6fut6zak1bG0cLTSE4viK3w1XPtoMdSdBGVQYDAnCPsExHdNw/exec'; // তোমার URL বসাও

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    firstName: document.getElementById('firstName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    zipCode: document.getElementById('zipCode').value,
  };

  fetch(scriptURL, { method: 'POST', body: JSON.stringify(formData) })
    .then(response => {
      if (response.ok) {
        modal.style.display = 'block';
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Something went wrong. Please try again.');
    });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
