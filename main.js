// main.js
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  formData.append('access_key', ACCESS_KEY);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      // Handle success
    } else {
      console.error('Form submission failed:', response.status);
      // Handle failure
    }
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle error
  }
});
