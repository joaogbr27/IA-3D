const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas:[
         {
                texto:"sim" ,
                afirmativa:"Afirmativa da alternativa 1"
        },
            {
                texto:"não",
                afirmativa:"Afirmativa da alternativa 2"
            }
        ]
    },  
    {
        enunciado: "Pergunta 2",
        alternativas:[
            {
                   texto:"sim" ,
                   afirmativa:"Afirmativa da alternativa 1"
           },
               {
                   texto:"não",
                   afirmativa:"Afirmativa da alternativa 2"
               }
               
           ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:[
            {
                   texto:"sim" ,
                   afirmativa:"Afirmativa da alternativa 1"
           },
               {
                   texto:"não",
                   afirmativa:"Afirmativa da alternativa 2"
               }
           ]   
       },  
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            posicao++;
            mostraPergunta();
        });
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}