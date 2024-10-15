function applySystemTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
}

applySystemTheme();

const centeredText = document.querySelector('.centered-text');
centeredText.addEventListener('click', () => {
    centeredText.classList.toggle('clicked');
});