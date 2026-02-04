/**
 * Módulo: Coleção de Serviços (Slider Interativo)
 */

const servicos = [
    { label: "Preventiva", img: "./assets/servico-preventiva.png" },
    { label: "Câmbio", img: "./assets/servico-cambio.png" },
    { label: "Motor", img: "./assets/servico-motor.png" },
    { label: "Suspensão", img: "./assets/servico-suspensao.png" },
    { label: "Elétrica", img: "./assets/servico-eletrica.png" },
    { label: "Ar Cond.", img: "./assets/servico-ar.png" },
    { label: "Injeção", img: "./assets/servico-destaque-injecao.png" },
    { label: "Freios", img: "./assets/hero-bg.png" } // Placeholder
];

const colecaoHTML = `
    <section id="colecao-servicos">
        <div class="container">
            <div class="colecao-header">
                <span class="colecao-subtitulo">Soluções Completas</span>
                <h2 class="colecao-titulo">Nossa Coleção de Serviços</h2>
            </div>

            <div class="colecao-carousel-wrapper">
                <!-- Botão Esquerda -->
                <button class="nav-btn-colecao nav-btn-prev" id="btn-col-prev" aria-label="Anterior">❮</button>

                <!-- Track Cards -->
                <div class="colecao-grid" id="colecao-track">
                    ${servicos.map(s => `
                        <div class="col-card" onclick="irParaCatalogo()">
                            <img src="${s.img}" alt="${s.label}" class="col-card-bg" onerror="this.style.opacity=0.1">
                            <div class="col-card-overlay"></div>
                            <div class="col-card-conteudo">
                                <span class="col-card-label">${s.label}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Botão Direita -->
                <button class="nav-btn-colecao nav-btn-next" id="btn-col-next" aria-label="Próximo">❯</button>
            </div>
        </div>
    </section>
`;

// Função Global de Redirecionamento
window.irParaCatalogo = function () {
    const catalogo = document.getElementById('catalogo-servicos') || document.getElementById('servicos-especializados');
    if (catalogo) {
        catalogo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.warn('Seção de catálogo não encontrada para rolagem.');
    }
};

export function inicializarColecao() {
    injetarCSS();

    // Inserção
    const hero = document.getElementById('hero-section');
    const main = document.getElementById('conteudo-principal') || document.getElementById('aplicacao');

    // Elemento container temporário
    const div = document.createElement('div');
    div.innerHTML = colecaoHTML;
    const novoElemento = div.firstElementChild;

    if (hero && hero.parentNode) {
        hero.parentNode.insertBefore(novoElemento, hero.nextSibling);
    } else if (main) {
        main.appendChild(novoElemento);
    }

    // Inicializar Lógica dos Botões
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
