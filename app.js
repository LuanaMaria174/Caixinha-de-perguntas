function CriaCartão( categoria, pergunta, resosta) {
    let container = Document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.ClassName = 'cartão'
    cartão.innerHTML = `
    <article class="cartão">
                <div class="cartão conteudo">
                    <h3>Deus?</h3>
                    <div class="cartão_conteudo_pergunta">
                        <p> A Santíssima Trindade, são um só Deus? Ou eles são distintos?</p>
                    </div>
                    <div class="cartão_conteudo_resposta">
                        <p> Sim! Eles são um só Deus, porém Deus Pai não é filho, nem Espirito Santo, nem o Espirito
                            Santo é Pai e filho, muito menos o Filho é Pai ou Espirito Santo.</p>
                    </div> 
`
container.appendChil(cartão)
}

let respostaEstaVisivel = false
function viraCartão
                
                
