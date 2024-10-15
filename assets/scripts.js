
function applySystemTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
    } else if (prefersLightScheme) {
        document.body.classList.add('light-mode');
    }
    else {
        document.body.classList.add('grey-mode');
    }
}

applySystemTheme();

const centeredText = document.querySelector('.centered-text');
centeredText.addEventListener('click', () => {
    centeredText.classList.toggle('clicked');
});