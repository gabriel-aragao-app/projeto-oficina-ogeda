/**
 * Módulo: Rodapé (Refinado)
 */

const icons = {
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>'
};

const rodapeHTML = `
    <footer id="rodape-principal">
        <div class="container">
            <div class="rodape-grid">
                
                <!-- Coluna 1: Marca & Social -->
                <div class="coluna-marca">
                    <div class="brand-area">
                        <div class="brand-icon">${icons.settings}</div>
                        <h2 class="brand-name">Ogeda Car Tech</h2>
                    </div>
                    <p class="brand-desc">
                        Elevando o padrão da manutenção automotiva em Salvador através da ciência e tecnologia.
                    </p>
                    <div class="social-row">
                        <a href="#" class="social-btn" aria-label="Twitter">${icons.twitter}</a>
                        <a href="#" class="social-btn" aria-label="Instagram">${icons.instagram}</a>
                        <a href="https://wa.me/5571999999999" class="social-btn" aria-label="WhatsApp">${icons.whatsapp}</a>
                    </div>
                </div>

                <!-- Coluna 2: Serviços -->
                <div class="coluna-links">
                    <h4 class="coluna-titulo">SERVIÇOS</h4>
                    <ul class="lista-vertical">
                        <li><a href="#">Manutenção de Câmbio AL4</a></li>
                        <li><a href="#">Reparo de DSG/Dualogic</a></li>
                        <li><a href="#">Limpeza de Bicos GDI</a></li>
                        <li><a href="#">Diagnóstico via Scanner</a></li>
                        <li><a href="#">Check-up de Suspensão</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Unidades (Tags) -->
                <div class="coluna-tags">
                    <h4 class="coluna-titulo">UNIDADES ATENDIDAS</h4>
                    <div class="tags-cloud">
                        <span class="tag-item">Pau da Lima</span>
                        <span class="tag-item">Águas Claras</span>
                        <span class="tag-item">Cajazeiras X</span>
                        <span class="tag-item">Valéria</span>
                        <span class="tag-item">Castelo Branco</span>
                        <span class="tag-item">Sussuarana</span>
                    </div>
                </div>

                <!-- Coluna 4: Horário (Card) -->
                <div class="coluna-horario">
                    <h4 class="coluna-titulo">HORÁRIO</h4>
                    <div class="horario-card">
                        <div class="horario-row">
                            <span class="dia">Seg - Sex</span>
                            <span class="hora">08:00 - 18:00</span>
                        </div>
                        <div class="horario-row">
                            <span class="dia">Sábado</span>
                            <span class="hora">08:00 - 12:00</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Copyright -->
            <div class="copyright-area">
                <p class="copy-text">
                    &copy; 2024 Ogeda Car Tech. Todos os direitos reservados. CNPJ: 00.000.000/0001-00. Desenvolvido com foco em Performance.
                </p>
            </div>
        </div>
    </footer>
`;

export function inicializarRodape() {
    injetarCSS();

    // Remove se já existir para evitar duplicação em reload
    const antigo = document.getElementById('rodape-principal');
    if (antigo) antigo.remove();

    const app = document.getElementById('conteudo-principal') || document.getElementById('aplicacao');
    if (!app) return;

    const div = document.createElement('div');
    div.innerHTML = rodapeHTML;
    app.appendChild(div.firstElementChild);
}

function injetarCSS() {
    const linkId = 'css-rodape';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/rodape/rodape.css';
        document.head.appendChild(link);
    }
}
