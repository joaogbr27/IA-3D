const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmativa;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta();
}
mostraPergunta();