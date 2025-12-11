const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light-mode') {
  body.classList.add('light-mode');
  toggleButton.textContent = '🌞';
} else {
  toggleButton.textContent = '🌙';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');

  toggleButton.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', isLight ? 'light-mode' : '');
});

