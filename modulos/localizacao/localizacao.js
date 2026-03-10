/**
 * Módulo: Localização - Referência de Confiança
 * Estratégia: Proximidade e Tecnologia em Cajazeiras 8
 */

const content = {
    // Título focado em hospitalidade e serviço
    title: "ESTAMOS PERTO DE VOCÊ",
    // SEO: Reforço de Cajazeiras 8 como ponto de referência técnica e didática
    description: "Nossa matriz em <span class='text-gold'>Cajazeiras 8</span> é equipada com o que há de mais moderno para garantir a segurança do seu veículo na região.",
    stats: [
        { value: "2019", label: "Desde" }, // Experiência comprovada
    ],
    address: {
        title: "Onde nos encontrar?",
        // Endereço oficial conforme briefing da Ogeda Car Tech
        text: "Rua Dep. Herculano de Menezes, n° 116, Cajazeiras 8 - Salvador/BA",
        link: "https://www.google.com/maps/dir//Ogeda+Car+Tech" // Link de GPS
    }
};

const localizacaoHTML = `
    <section id="localizacao-mapa" aria-labelledby="loc-header-title">
        <div class="container">
            <div class="loc-wrapper">
                <div class="loc-grid">
                    
                    <div class="loc-map-card group">
                        <div class="loc-map-inner">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11000.050196176177!2d-38.40843769946494!3d-12.900966571098087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71611dd8375b807%3A0xdc2f197d7eb7eea4!2sOgeda%20Car%20Tech!5e0!3m2!1spt-BR!2sbr!4v1772465452808!5m2!1spt-BR!2sbr"
                                class="loc-iframe" 
                                frameborder="0" 
                                scrolling="no" 
                                loading="lazy"
                                aria-label="Localização da Ogeda Car Tech no Google Maps">
                            </iframe>
                            
                            <div class="grad-right"></div>
                            <div class="grad-bottom"></div>

                            <div class="loc-content">
                                <div>
                                    <h3 id="loc-header-title" class="loc-title">
                                        ${content.title}
                                    </h3>
                                    <p class="loc-desc">
                                        ${content.description}
                                    </p>
                                </div>

                                <div class="loc-stats-grid">
                                    ${content.stats.map(stat => `
                                        <div class="loc-stat-item">
                                            <div class="loc-stat-inner">
                                                <span class="loc-stat-val">${stat.value}</span>
                                                <span class="loc-stat-sub">${stat.label}</span>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="loc-action-card">
                        <div class="loc-action-inner">
                            <div class="bg-glow-right"></div>
                            
                            <div class="relative z-10">
                                <div class="loc-icon-box">
                                    <div class="loc-icon-inner" aria-hidden="true">
                                        <svg class="loc-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <h4 class="loc-action-title">${content.address.title}</h4>
                                <p class="loc-action-desc">
                                    <strong>Ogeda Car Tech</strong><br>
                                    ${content.address.text}
                                </p>

                                <div class="botoes-gps-container">
                                    <a href="${content.address.link}" target="_blank" rel="noopener" class="btn-gps-action google" aria-label="Abrir rota no Google Maps">
                                        <span class="btn-text-fix">Abrir no GPS</span>
                                    </a>
                                    <a href="https://ul.waze.com/ul?place=ChIJB7h1g90RFgcRpO63fn0ZL9w&ll=-12.89795070%2C-38.41211560&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener" class="btn-gps-action waze" aria-label="Abrir rota no Waze">
                                        <span class="btn-text-fix">Abrir com Waze</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
`;

export function inicializarLocalizacao() {
    injetarCSS();

    // Busca pelos containers possíveis no seu projeto
    const main = document.getElementById('conteudo-principal') ||
        document.getElementById('aplicacao') ||
        document.querySelector('main');

    const contato = document.getElementById('contato-diagnostico');

    // Cria a seção e injeta o conteúdo
    const sectionLocal = document.createElement('section');
    sectionLocal.id = 'localizacao-mapa';
    sectionLocal.innerHTML = localizacaoHTML;

    try {
        // Tenta inserir após a seção de contato para manter a ordem lógica do site
        if (contato && contato.parentNode) {
            contato.insertAdjacentElement('afterend', sectionLocal);
        }
        // Se não encontrar o contato, insere no final do conteúdo principal
        else if (main) {
            main.appendChild(sectionLocal);
        } else {
            // Última instância: injeta no final do body
            document.body.appendChild(sectionLocal);
        }
    } catch (error) {
        console.error("Erro ao renderizar a seção de Localização:", error);
    }
}

function injetarCSS() {
    const linkId = 'css-localizacao-v3';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/localizacao/localizacao.css';
        document.head.appendChild(link);
    }
}