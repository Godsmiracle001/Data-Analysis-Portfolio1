// Example for interactivity: Display a dynamic alert when viewing a project
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.text-blue-500');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      alert('You are about to view this project on GitHub!');
    });
  });
});

// Interactive greeting based on time of day
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const hour = now.getHours();
  const greetingElement = document.querySelector('h2');

  if (hour < 12) {
    greetingElement.textContent = 'Good Morning! Welcome to My Portfolio';
  } else if (hour < 18) {
    greetingElement.textContent = 'Good Afternoon! Welcome to My Portfolio';
  } else {
    greetingElement.textContent = 'Good Evening! Welcome to My Portfolio';
  }
});
