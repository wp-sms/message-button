document.addEventListener('DOMContentLoaded', function () {
    const htmlElement = document.documentElement;

    // Check if the user's system prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Add or remove the 'dark-theme' class based on the preference
    if (prefersDarkMode) {
        htmlElement.classList.add('dark-theme');
        htmlElement.classList.remove('light-theme');
    } else {
        htmlElement.classList.remove('dark-theme');
        htmlElement.classList.add('light-theme');
    }
});
