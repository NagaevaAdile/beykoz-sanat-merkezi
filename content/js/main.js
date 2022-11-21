// (function () {
//     function scrollHorizontally(e) {
//         e = window.event || e;
//         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//         document.documentElement.scrollLeft -= (delta * 100);
//         document.body.scrollLeft -= (delta * 100);
//         e.preventDefault();
//     }
//     if (window.addEventListener) {
//         window.addEventListener("mousewheel", scrollHorizontally, false);
//         window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
//     } else {
//         window.attachEvent("onmousewheel", scrollHorizontally);
//     }
// })();


let burger = document.getElementById('burger');
let closeBur = document.getElementById('closeBur');

burger.addEventListener('click', () => {
    document.getElementById('overlayHidden').style.display = 'block';
    document.getElementById('logoBtn').src = '././content/img/whiteLogin.png';
    document.getElementById('calen').src = '././content/img/whiteCal.png';
    burger.style = 'display: none;';
    closeBur.style = 'display: block;'
});

closeBur.addEventListener('click', () => {
    document.getElementById('overlayHidden').style.display = 'none';
    document.getElementById('logoBtn').src = '././content/img/login.png';
    document.getElementById('calen').src = '././content/img/calendar.png';
    burger.style = 'display: block;';
    closeBur.style = 'display: none;'
});