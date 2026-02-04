/**
 * Módulo: Localização (Adaptado 1:1 do Snippet Original)
 */

const content = {
    title: "DONO DA RUA",
    description: "Nossa matriz em <span class='text-gold'>Cajazeiras 8</span> é referência tecnológica para todo o setor automotivo da região.",
    stats: [
        { value: "10+", label: "Anos de Mercado" },
        { value: "5k+", label: "Veículos Atendidos" }
    ],
    address: {
        title: "Onde Estamos?",
        text: "Estrada da Paciência, Setor 13, Cajazeiras - Salvador/BA",
        link: "https://maps.google.com/maps?q=Ogeda+Car+Tech+Cajazeiras"
    }
};

const localizacaoHTML = `
    <section id="localizacao-mapa">
        <div class="container">
            <div class="loc-wrapper"> <!-- mt-16... handled by CSS -->
                <div class="loc-grid">
                    
                    <!-- Left: Info & Stats (Map Background) -->
                    <div class="loc-map-card group">
                        <div class="loc-map-inner">
                            <!-- Google Maps Iframe -->
                            <iframe 
                                src="https://maps.google.com/maps?q=Ogeda+Car+Tech+Cajazeiras&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                class="loc-iframe" 
                                frameborder="0" 
                                scrolling="no" 
                                loading="lazy">
                            </iframe>
                            
                            <!-- Overlays -->
                            <div class="grad-right"></div>
                            <div class="grad-bottom"></div>

                            <div class="loc-content">
                                <div>
                                    <h3 class="loc-title">
                                        ${content.title}
                                    </h3>
                                    <p class="loc-desc">
                                        ${content.description}
                                    </p>
                                </div>

                                <!-- Mini Bento Stats -->
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

                    <!-- Right: Action (Blue Card) -->
                    <div class="loc-action-card">
                        <div class="loc-action-inner">
                            <div class="bg-glow-right"></div>
                            
                            <!-- Icon Box -->
                            <div class="relative z-10">
                                <div class="loc-icon-box">
                                    <div class="loc-icon-inner">
                                        <svg class="loc-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                </div>

                                <h4 class="loc-action-title">${content.address.title}</h4>
                                <p class="loc-action-desc">
                                    ${content.address.text}
                                </p>

                                <a href="${content.address.link}" target="_blank" class="btn-gps-action">
                                    <span class="btn-text-fix">Abrir no GPS</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
`;

export function inicializarLocalizacao() {
    // 1. Injeta CSS
    const cssId = 'css-localizacao-v3';
    // Remove qualquer versão anterior
    const links = document.querySelectorAll('link[id^="css-localizacao"]');
    links.forEach(l => l.remove());

    const link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.href = './modulos/localizacao/localizacao.css';
    document.head.appendChild(link);

    // 2. Remove HTML antigo
    const sectionAntiga = document.getElementById('localizacao-mapa');
    if (sectionAntiga) sectionAntiga.remove();

    // 3. Insere novo HTML no final
    const app = document.getElementById('conteudo-principal') || document.getElementById('aplicacao');
    const contato = document.getElementById('contato-diagnostico');

    const div = document.createElement('div');
    div.innerHTML = localizacaoHTML;
    const novoElemento = div.firstElementChild;

    // Tenta inserir após contato
    if (contato && contato.parentNode) {
        contato.parentNode.insertBefore(novoElemento, contato.nextSibling);
    } else {
        if (app) app.appendChild(novoElemento);
    }
}
