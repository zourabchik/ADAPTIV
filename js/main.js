var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function () {
    modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
});

setTimeout(function () {
    document.getElementById('modal').style.display = 'none';
}, 5000);