(function changeBack() {
    document.querySelector('.button').addEventListener('click', function setBG(){
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        document.querySelector('.value').innerHTML = randomColor.toUpperCase();
    });
})();