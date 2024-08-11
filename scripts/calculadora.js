
divs = document.querySelectorAll('.button');
divs.forEach((div) => {
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = 'black';
    });
    div.addEventListener('mouseleave', function () {
        div.style.backgroundColor = 'initial';
    });
});