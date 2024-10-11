const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acha que IA vai dominar o mundo?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA vai dominar o mundo"}, 

            {texto: "Não",
            afirmação:"A IA não dominará o mundo"}]
    },
    { 
        enunciado: "VOCÊ ESTA PRONTO PARA ISSO?",
        alternativas: [
            {texto: "Sim",
            afirmação:" SEMPRE ESTIVE PRONTO "}, 
                
            {texto: "Não",
            afirmação:" NUNCA ESTIVE PRONTO "}]
    },
    { 
        enunciado: "ESTÁ REALMETE PRONTO PARA ESSA MUDANÇA?",
        alternativas: [
            {texto: "Sim",
            afirmação:" COM TODA CERTEZA, SIM "}, 
                
            {texto: "Não",
            afirmação:" COM TODA CERTEZA QUE NÃO "}]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
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
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + ""; 
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();