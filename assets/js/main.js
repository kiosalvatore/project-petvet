let setasDuvida = document.querySelectorAll('.duvida') 

setasDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
});