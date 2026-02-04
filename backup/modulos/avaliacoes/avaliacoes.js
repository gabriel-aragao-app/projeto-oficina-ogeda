/**
 * Módulo: Avaliações
 * Gerencia o carrossel de depoimentos
 */

const dadosAvaliacoes = [
    { nome: 'Carlos Eduardo', texto: 'Recuperei meu câmbio Dualogic aqui. A única oficina em Salvador que realmente entende do assunto. Recomendo!', inicial: 'C' },
    { nome: 'Fernanda Lima', texto: 'Atendimento excelente! Troca de óleo por sucção feita com transparência. Dá pra ver que os equipamentos são de ponta.', inicial: 'F' },
    { nome: 'Roberto Menezes', texto: 'Levei meu iMotion que ninguém resolvia. Diagnóstico preciso e preço justo. Virei cliente fiel.', inicial: 'R' },
    { nome: 'Anderson Silva', texto: 'A estrutura é impressionante, nível de concessionária. O scanner identificou o problema na hora.', inicial: 'A' },
    { nome: 'Juliana Costa', texto: 'Profissionais muito educados e técnicos. Explicaram tudo o que seria feito no meu carro. Nota 10!', inicial: 'J' },
    { nome: 'Paulo Ricardo', texto: 'Serviço de primeira na suspensão. O carro parece zero km novamente. Muito satisfeito.', inicial: 'P' },
    { nome: 'Mariana Santos', texto: 'Confiança é tudo. Levo meu carro aqui há 2 anos e nunca tive surpresas desagradáveis.', inicial: 'M' }
];

const googleIconSVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>`;

function gerarCardHTML(dados) {
    return `
        <div class="card-avaliacao">
            <div class="card-avaliacao-conteudo">
                <div class="card-header">
                    <div class="avatar-initial">${dados.inicial}</div>
                    <div class="cliente-info">
                        <h4>${dados.nome}</h4>
                        <div class="cliente-stars">★★★★★</div>
                    </div>
                </div>
                <p class="card-texto">"${dados.texto}"</p>
                <div class="google-icon-footer">
                    ${googleIconSVG}
                </div>
            </div>
        </div>
    `;
}

const avaliacoesHTML = `
    <section id="avaliacoes-google">
        <div class="container avaliacoes-header">
            <h2 class="avaliacoes-titulo">O Que Dizem Nossos <span class="titulo-destaque">Clientes</span></h2>
            <div class="google-rating">
                <span>Avaliação 4.9/5 no Google</span>
                <span class="star">★</span>
            </div>
        </div>

        <div class="carrossel-avaliacoes-wrapper">
            <div class="track-avaliacoes" id="track-avaliacoes">
                <!-- Cards Inseridos via JS -->
            </div>
        </div>
    </section>
`;

export function inicializarAvaliacoes() {
    injetarCSS();

    const main = document.getElementById('conteudo-principal');
    if (!main) return;

    // Renderiza Container
    const div = document.createElement('div');
    div.innerHTML = avaliacoesHTML;
    main.appendChild(div.firstElementChild);

    // Renderiza Cards e Duplica para Loop
    renderizarCards();
}

function renderizarCards() {
    const track = document.getElementById('track-avaliacoes');
    if (!track) return;

    // Gera HTML de todos os cards
    const cardsHTML = dadosAvaliacoes.map(dado => gerarCardHTML(dado)).join('');

    // Insere Original + Cópia para Infinito (Duplo Buffer)
    // Se a lista for pequena, pode precisar de mais cópias para preencher a tela + scroll
    // Vamos triplicar para segurança
    track.innerHTML = cardsHTML + cardsHTML + cardsHTML;
}

function injetarCSS() {
    const linkId = 'css-avaliacoes';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/avaliacoes/avaliacoes.css';
        document.head.appendChild(link);
    }
}
