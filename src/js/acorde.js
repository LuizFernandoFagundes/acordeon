const itens = document.querySelectorAll('.itens');
itens.forEach((item, index) => {
    item.addEventListener('click', () => {

        const atual = document.querySelector('.itens.ativo');
        item.classList.toggle('ativo');
        if (atual) {
            atual.classList.remove('ativo');

        }
        else {
            item.classList.add('ativo');
        }

    });

});
