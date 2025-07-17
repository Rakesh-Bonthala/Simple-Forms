document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  alert('Thanks,Your message has been sent.');
  e.target.reset();
});

function showDetails(project) {
  let message = '';
  if (project === 'ecommerce') {
    message = 'An e-commerce site using HTML, CSS Grid, and vanilla JS. Optimized for performance.';
  } else if (project === 'blog') {
    message = 'Dynamic blog using localStorage and form validation. Responsive layout included.';
  }
  alert(message);
}


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[loading='lazy']");
  images.forEach(img => {
    img.onload = () => console.log('Loaded: ${img.src}');
  });
});