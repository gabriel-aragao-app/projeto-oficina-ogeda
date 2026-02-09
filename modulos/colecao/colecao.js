/**
 * Módulo: Coleção de Serviços (SEO & UX Optimized)
 */

// SEO: Rótulos atualizados para termos de busca reais em Salvador
const servicos = [
    { label: "Manutenção Preventiva", img: "./assets/servico-preventiva.png" },
    { label: "Câmbio Automatizado", img: "./assets/servico-cambio.png" },
    { label: "Mecânica de Motores", img: "./assets/servico-motor.png" },
    { label: "Suspensão e Direção", img: "./assets/servico-suspensao.png" },
    { label: "Elétrica Automotiva", img: "./assets/servico-eletrica.png" },
    { label: "Ar Condicionado", img: "./assets/servico-ar.png" },
    { label: "Injeção Eletrônica", img: "./assets/servico-destaque-injecao.png" },
    { label: "Sistema de Freios", img: "./assets/servico-freios.png" }
];

const colecaoHTML = `
    <section id="colecao-servicos" aria-labelledby="colecao-titulo-principal">
        <div class="container">
            <div class="colecao-header">
                <span class="colecao-subtitulo">Referência Técnica em Salvador</span>
                <h2 id="colecao-titulo-principal" class="colecao-titulo">Nossa Coleção de Serviços em Cajazeiras</h2>
            </div>

            <div class="colecao-carousel-wrapper">
                <button class="nav-btn-colecao nav-btn-prev" id="btn-col-prev" aria-label="Ver serviços anteriores">❮</button>

                <div class="colecao-grid" id="colecao-track" role="list">
                    ${servicos.map(s => `
                        <div class="col-card" 
                             onclick="irParaCatalogo()" 
                             role="listitem" 
                             tabindex="0" 
                             aria-label="Saiba mais sobre ${s.label} na Ogeda Car Tech">
                            <img src="${s.img}" 
                                 alt="Serviço de ${s.label} em Salvador - Ogeda Car Tech" 
                                 class="col-card-bg" 
                                 onerror="this.style.opacity=0.1"
                                 loading="lazy"> <div class="col-card-overlay"></div>
                            <div class="col-card-conteudo">
                                <span class="col-card-label">${s.label}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <button class="nav-btn-colecao nav-btn-next" id="btn-col-next" aria-label="Ver próximos serviços">❯</button>
            </div>
        </div>
    </section>
`;

// Função Global de Redirecionamento (Mantida)
window.irParaCatalogo = function () {
    const catalogo = document.getElementById('catalogo-servicos') || document.getElementById('servicos-especializados');
    if (catalogo) {
        catalogo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export function inicializarColecao() {
    injetarCSS();
    const hero = document.getElementById('hero-section');
    const main = document.getElementById('conteudo-principal') || document.getElementById('aplicacao');

    const div = document.createElement('div');
    div.innerHTML = colecaoHTML;
    const novoElemento = div.firstElementChild;

    if (hero && hero.parentNode) {
        hero.parentNode.insertBefore(novoElemento, hero.nextSibling);
    } else if (main) {
        main.appendChild(novoElemento);
    }

    initSlider();
}

function initSlider() {
    const track = document.getElementById('colecao-track');
    const prev = document.getElementById('btn-col-prev');
    const next = document.getElementById('btn-col-next');

    if (!track || !prev || !next) return;

    // Scroll Amount (Largura do card + gap)
    const scrollAmount = 200;

    prev.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

function injetarCSS() {
    const linkId = 'css-colecao';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/colecao/colecao.css';
        document.head.appendChild(link);
    }
}
