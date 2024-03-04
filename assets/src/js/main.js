function  setChatBoxHeight(){
    const chatboxElement = document.querySelector('.wpsms-chatbox__elements');
    if (chatboxElement) {
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(windowWidth>=768){
            chatboxElement.style.maxHeight = (windowHeight * 0.65) + 'px';
        }else{
            chatboxElement.style.maxHeight = (windowHeight * 0.54) + 'px';
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const htmlElement = document.documentElement;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        htmlElement.classList.add('dark-theme');
        htmlElement.classList.remove('light-theme');
    } else {
        htmlElement.classList.remove('dark-theme');
        htmlElement.classList.add('light-theme');
    }


    const chatboxContent = document.querySelector('.wpsms-chatbox__content');
    const toggleButton = document.querySelector('.js-wpsms-chatbox__button');
    const closeButton = document.querySelector('.js-wpsms-chatbox__close-button');

    toggleButton.addEventListener('click', function () {
        if (chatboxContent.classList.contains('open')) {
            chatboxContent.classList.remove('open');
            chatboxContent.classList.add('closing');
          } else {
            chatboxContent.style.display = 'block'; // Show the content before animating
            chatboxContent.classList.add('open', 'opening');
        }
        document.body.classList.toggle('chatbox-open');
    });
    closeButton.addEventListener('click', function () {
        chatboxContent.classList.remove('open');
        chatboxContent.classList.add('closing');
    });

    setChatBoxHeight();

    chatboxContent.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'opacity' && !chatboxContent.classList.contains('open')) {
            chatboxContent.style.display = 'none';
        }
        chatboxContent.classList.remove('opening', 'closing');
    });
});
window.addEventListener('resize', setChatBoxHeight);