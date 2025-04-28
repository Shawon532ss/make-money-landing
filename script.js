const form = document.getElementById('signup-form');
const modal = document.getElementById('thankyou-modal');
const closeBtn = document.querySelector('.close-btn');
const popupMessage = document.getElementById('popup-message');

// তোমার Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbwHsqUTAcKj_bkXZOXAlogbIi3Y-5rkGzqcQ_E1CVw_LEvTh_AkzdTW4Dtti3dCbf8/exec'; // এখানে তোমার নিজের Apps Script URL বসাবে

// তোমার Adsterra Direct Link
const adLink = 'https://www.profitableratecpm.com/t68r3nih?key=13142b6bf3f8d8f81e3d58e001e47a75'; // এখানে তোমার Adsterra Direct Link বসাবে

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    firstName: document.getElementById('firstName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    zipCode: document.getElementById('zipCode').value,
  };

  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        modal.style.display = 'block';
        form.reset();

        // Popup Message আপডেট করবো "Redirecting" মেসেজ দিয়ে
        popupMessage.innerText = "Thank you! Please wait... Redirecting you!";

        // ৩ সেকেন্ড পরে রিডাইরেক্ট করবে
        setTimeout(() => {
          window.location.href = adLink;
        }, 3000);
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
