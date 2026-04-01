const toggle = document.getElementById('theme-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
}