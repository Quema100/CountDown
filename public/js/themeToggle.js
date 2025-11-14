const themeToggle = () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('securEnvTheme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☼';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleBtn.textContent = '☼';
        } else {
            themeToggleBtn.textContent = '☀';
        }
        localStorage.setItem('securEnvTheme', theme);
    });
}