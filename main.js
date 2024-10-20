const loaderContainer = document.querySelector('.loader-container');
const redirectUrl = 'https://your-target-website.com'; // Replace with your desired URL

setTimeout(() => {
  window.location.href = redirectUrl;
}, 3000); // Adjust the timeout duration as needed (in milliseconds)
