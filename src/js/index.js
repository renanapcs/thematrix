// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.img')
const descricao = document.querySelectorAll('.descricao') // variavel para mudar imagens junto com as imagens.



// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desmarcaBotaoSelecionado(); //Codigo Fatorado 

        //- passo 4 - marcar o botão clicado como se estivesse selecionada.
        botao.classList.add('select');//COdigo Fatorado.

        //- passo 5 - esconder a imagem anterior.
        escondeImagem();
        //- imcremento esconder descricao anterior.
        escondeDescricao();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado.
        imagens[indice].classList.add('ativa');
        descricao[indice].classList.add('ativa')
    })
});


function desmarcaBotaoSelecionado() {
    const botaoselecionado = document.querySelector('.select');
    botaoselecionado.classList.remove('select');
}

function escondeImagem() {
    const imagemAtiva = document.querySelector('.ativa.img');
    if(imagemAtiva){
        imagemAtiva.classList.remove('ativa');
    }
    
}
function escondeDescricao() {
    const descricaoAtiva = document.querySelector('.ativa.descricao');
    if(descricaoAtiva){
        descricaoAtiva.classList.remove('ativa');

    }

}