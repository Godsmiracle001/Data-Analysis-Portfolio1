// Example for interactivity: Display a dynamic alert when viewing a project
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.text-blue-500');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      alert('You are about to view this project on GitHub!');
    });
  });
});

