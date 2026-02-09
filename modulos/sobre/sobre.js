/**
 * Módulo: Sobre Nós - Ogeda Car Tech
 * Foco: Autoridade Técnica e SEO Local em Cajazeiras
 */

// Ícones SVG Inline (Mantidos e Otimizados)
const icons = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
};

const sobreHTML = `
    <section id="sobre-nos" aria-labelledby="sobre-titulo-seo">
        <div class="container sobre-container">
            
            <div class="sobre-imagem-wrapper">
                <img src="./assets/sobre-nos.png" 
                     alt="Equipe técnica da Ogeda Car Tech em atendimento - Oficina em Cajazeiras Salvador" 
                     class="img-mecanicos"
                     loading="lazy">
                
                <div class="float-card">
                    <div class="icon-check-box">
                        ${icons.check}
                    </div>
                    <div class="float-card-content">
                        <span class="float-label">REFERÊNCIA LOCAL</span>
                        <strong>CAJAZEIRAS 8</strong>
                    </div>
                </div>
            </div>

            <div class="sobre-conteudo">
                <span class="label-autoridade">TECNOLOGIA E CONFIANÇA</span>
                <h2 id="sobre-titulo-seo" class="sobre-titulo">
                    A OFICINA QUE OS<br>
                    <span class="destaque-azul">ESPECIALISTAS</span><br>
                    RECOMENDAM.
                </h2>
                <p class="sobre-texto">
                    A <strong>Ogeda Car Tech</strong> não é apenas uma oficina; somos um centro de <strong>tecnologia automotiva em Salvador</strong>. 
                    Localizada na Rua Deputado Herculano de Menezes, nossa equipe utiliza equipamentos de ponta para atender os veículos mais modernos com precisão cirúrgica.
                </p>

                <div class="features-grid">
                    <div class="feature-item">
                        <div class="feature-icon" aria-hidden="true">
                            ${icons.chart}
                        </div>
                        <div class="feature-text">
                            <h5>ZERO TENTATIVA E ERRO</h5>
                            <p>Diagnóstico computadorizado preciso.</p>
                        </div>
                    </div>

                    <div class="feature-item">
                        <div class="feature-icon" aria-hidden="true">
                            ${icons.star}
                        </div>
                        <div class="feature-text">
                            <h5>DIDÁTICA ATUALIZADA</h5>
                            <p>Você entende cada serviço.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
`;

export function inicializarSobre() {
    injetarCSS();

    const main = document.getElementById('conteudo-principal');
    if (!main) return;

    const div = document.createElement('div');
    div.innerHTML = sobreHTML;

    // Inserção segura para manter o fluxo do site
    main.appendChild(div.firstElementChild);
}

function injetarCSS() {
    const linkId = 'css-sobre';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/sobre/sobre.css';
        document.head.appendChild(link);
    }
}