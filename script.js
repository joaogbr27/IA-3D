const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "O que você acha da IA?",
        alternativas:["Criativa, fenomenal ","Paia"]
    },
    {
        enunciado: "IA é legal?",
        alternativas:["Sim, pois aprendo, muito","Não."]
    },
    {
        enunciado: "Gosta da IA?",
        alternativas:["Não","Sim, muito!"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botao.alternativa = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
    }
}
