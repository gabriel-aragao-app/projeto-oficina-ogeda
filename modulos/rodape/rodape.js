/**
 * Módulo: Rodapé (Estratégico & SEO Optimized)
 */

const icons = {
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>'
};

const rodapeHTML = `
    <footer id="rodape-principal" role="contentinfo">
        <div class="container">
            <div class="rodape-grid">
                
                <div class="coluna-marca">
                    <div class="brand-area">
                        <div class="brand-icon">${icons.settings}</div>
                        <h2 class="brand-name">Ogeda Car Tech</h2>
                    </div>
                    <p class="brand-desc">
                        Referência técnica em <strong>câmbio automatizado e injeção eletrônica em Salvador</strong>. 
                        Tecnologia avançada no coração de <strong>Cajazeiras 8</strong>.
                    </p>
                    <div class="social-row">
                        <a href="https://instagram.com/ogedacartech" target="_blank" rel="noopener" class="social-btn" aria-label="Siga-nos no Instagram">${icons.instagram}</a>
                        <a href="https://www.facebook.com/ogedacartech/?locale=pt_BR" target="_blank" rel="noopener" class="social-btn" aria-label="Siga-nos no Facebook">${icons.facebook}</a>
                        <a href="https://wa.me/5571981303232" target="_blank" rel="noopener" class="social-btn" aria-label="Fale conosco pelo WhatsApp">${icons.whatsapp}</a>
                    </div>
                </div>

                <nav class="coluna-links" aria-label="Links de Serviços">
                    <h4 class="coluna-titulo">ESPECIALIDADES</h4>
                    <ul class="lista-vertical">
                        <li><a href="#catalogo-servicos">Reparo de Câmbio Dualogic</a></li>
                        <li><a href="#catalogo-servicos">Manutenção I-Motion e EasyR</a></li>
                        <li><a href="#catalogo-servicos">Diagnóstico Scanner Digital</a></li>
                        <li><a href="#catalogo-servicos">Limpeza de Bicos Injetores</a></li>
                        <li><a href="#catalogo-servicos">Revisão Preventiva Premium</a></li>
                    </ul>
                </nav>

                <div class="coluna-horario">
                    <h4 class="coluna-titulo">FUNCIONAMENTO</h4>
                    <address class="horario-card">
                        <div class="horario-row">
                            <span class="dia">Seg - Sex:</span>
                            <span class="hora">08:00 - 17:30</span>
                        </div>
                        <div class="horario-row">
                            <span class="dia">Sábado:</span>
                            <span class="hora">08:00 - 12:00</span>
                        </div>
                        <p class="observacao-expediente">*Exceto Domingo e Feriados.</p>
                    </address>
                </div>

            </div>

            <div class="copyright-area">
                <p class="copy-text">
                    &copy; 2026 Ogeda Car Tech. Todos os direitos reservados. <br>
                    Desenvolvido por <strong>Studio Aragão</strong> - Especialista em Performance Web.
                </p>
            </div>
        </div>
    </footer>
`;

export function inicializarRodape() {
    injetarCSS();
    const antigo = document.getElementById('rodape-principal');
    if (antigo) antigo.remove();

    const app = document.getElementById('conteudo-principal') || document.body;
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