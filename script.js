const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".cafe");



botoes.forEach((botao, indice) =>{
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
        

        const cafeSelecionado = document.querySelector(".cafe.selecionado");
        cafeSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });    
});

