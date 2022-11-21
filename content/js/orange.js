let burger = document.getElementById('burger');
let closeBur = document.getElementById('closeBur');

burger.addEventListener('click', () => {
    document.getElementById('overlayHidden').style.display = 'block';
    burger.style = 'display: none;';
    closeBur.style = 'display: block;'
});

closeBur.addEventListener('click', () => {
    document.getElementById('overlayHidden').style.display = 'none';
    burger.style = 'display: block;';
    closeBur.style = 'display: none;'
});