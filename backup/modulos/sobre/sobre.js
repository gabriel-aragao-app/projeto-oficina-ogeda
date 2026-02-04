/**
 * Módulo: Sobre Nós
 */

// Ícones SVG Inline
const icons = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
};

const sobreHTML = `
    <section id="sobre-nos">
        <div class="container sobre-container">
            
            <!-- Imagem Esquerda -->
            <div class="sobre-imagem-wrapper">
                <img src="./assets/sobre-nos.png" alt="Mecânicos Ogeda Car Tech" class="img-mecanicos">
                
                <!-- Card Flutuante -->
                <div class="float-card">
                    <div class="icon-check-box">
                        ${icons.check}
                    </div>
                    <div class="float-card-content">
                        <h4>DONO DA RUA</h4>
                        <span>RUA DEP. HERCULANO</span>
                    </div>
                </div>
            </div>

            <!-- Conteúdo Direita -->
            <div class="sobre-conteudo">
                <span class="label-autoridade">AUTORIDADE TÉCNICA</span>
                <h2 class="sobre-titulo">
                    A OFICINA QUE OS<br>
                    ESPECIALISTAS<br>
                    RECOMENDAM.
                </h2>
                <p class="sobre-texto">
                    Não somos apenas uma oficina; somos um centro de tecnologia automotiva. 
                    Na Rua Deputado Herculano de Menezes, nossa equipe utiliza os equipamentos mais 
                    avançados do mercado mundial para garantir que seu veículo saia daqui melhor do que saiu da concessionária.
                </p>

                <div class="features-grid">
                    <!-- Feature 1 -->
                    <div class="feature-item">
                        <div class="feature-icon">
                            ${icons.chart}
                        </div>
                        <div class="feature-text">
                            <h5>DIAGNÓSTICO PRECISO</h5>
                            <p>SEM "TENTATIVA E ERRO"</p>
                        </div>
                    </div>

                    <!-- Feature 2 -->
                    <div class="feature-item">
                        <div class="feature-icon">
                            ${icons.star}
                        </div>
                        <div class="feature-text">
                            <h5>TREINAMENTO MASTER</h5>
                            <p>PADRÕES INTERNACIONAIS</p>
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
