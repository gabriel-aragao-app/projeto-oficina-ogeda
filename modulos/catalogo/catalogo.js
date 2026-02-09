/**
 * Módulo: Catálogo de Serviços (SEO & UX Optimized)
 */
import { CatalogoAnimacoes } from './catalogo-animacoes.js';

const icons = {
    gear: '<path d="M12 2L12 4M12 20L12 22M4 12L2 12M22 12L20 12M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93M15 12A3 3 0 1 1 9 12A3 3 0 0 1 15 12Z" stroke-linecap="round" stroke-linejoin="round"/>',
    lightning: '<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke-linecap="round" stroke-linejoin="round"/>',
    funnel: '<path d="M22 3L2 3L10 12.46L10 19L14 21L14 12.46L22 3Z" stroke-linecap="round" stroke-linejoin="round"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    disc: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'
};

const catalogoHTML = `
    <section id="catalogo-servicos" aria-labelledby="cat-main-title">
        <div class="container">
            <div class="catalogo-header">
                <h2 id="cat-main-title" class="catalogo-titulo">Serviços Especializados em Salvador</h2>
                <div class="catalogo-linha"></div>
            </div>

            <div class="catalogo-grid" role="list">
                
                <article class="catalogo-card" role="listitem">
                    <div class="icon-box" aria-hidden="true">
                        <svg class="icon-svg" viewBox="0 0 24 24">${icons.gear}</svg>
                    </div>
                    <h3 class="card-titulo">CÂMBIO<br>AUTOMATIZADO</h3>
                    <p class="card-desc">Referência em <strong>Dualogic, iMotion e EasyR em Salvador</strong>. Diagnósticos precisos e reparos com peças originais.</p>
                    <ul class="card-lista">
                        <li>Calibração via Software</li>
                        <li>Troca de Atuadores</li>
                    </ul>
                </article>

                <article class="catalogo-card" role="listitem">
                    <div class="icon-box" aria-hidden="true">
                        <svg class="icon-svg" viewBox="0 0 24 24">${icons.lightning}</svg>
                    </div>
                    <h3 class="card-titulo">INJEÇÃO<br>ELETRÔNICA</h3>
                    <p class="card-desc">Diagnóstico avançado de bicos e sensores. Redução de consumo para motoristas de aplicativo em Cajazeiras.</p>
                    <ul class="card-lista">
                        <li>Teste de Vazão</li>
                        <li>Limpeza Ultrassônica</li>
                    </ul>
                </article>

                <article class="catalogo-card" role="listitem">
                    <div class="icon-box" aria-hidden="true">
                        <svg class="icon-svg" viewBox="0 0 24 24">${icons.funnel}</svg>
                    </div>
                    <h3 class="card-titulo">TROCA DE ÓLEO<br>POR SUCÇÃO</h3>
                    <p class="card-desc">Remoção total de impurezas com tecnologia a vácuo. O melhor cuidado para motores modernos em Salvador.</p>
                    <ul class="card-lista">
                        <li>Fluidos Premium</li>
                        <li>Limpeza 100% do Sistema</li>
                    </ul>
                </article>

                <article class="catalogo-card" role="listitem">
                    <div class="icon-box" aria-hidden="true">
                        <svg class="icon-svg" viewBox="0 0 24 24">${icons.monitor}</svg>
                    </div>
                    <h3 class="card-titulo">DIAGNÓSTICO<br>COM SCANNER</h3>
                    <p class="card-desc">Leitura em tempo real de parâmetros do veículo com equipamentos de última geração da Ogeda Car Tech.</p>
                    <ul class="card-lista">
                        <li>Histórico Digital</li>
                        <li>Check-up Computadorizado</li>
                    </ul>
                </article>

                <article class="catalogo-card" role="listitem">
                    <div class="icon-box" aria-hidden="true">
                        <svg class="icon-svg" viewBox="0 0 24 24">${icons.disc}</svg>
                    </div>
                    <h3 class="card-titulo">SUSPENSÃO<br>E FREIOS</h3>
                    <p class="card-desc">Segurança garantida para as ruas de Salvador. Revisão de amortecedores, discos e sistemas de ABS.</p>
                    <ul class="card-lista">
                        <li>Check-up 30 itens</li>
                        <li>Segurança Preventiva</li>
                    </ul>
                </article>

                <article class="catalogo-card card-destaque-azul" role="listitem">
                    <div class="icon-box" aria-hidden="true">
                        <svg class="icon-svg" viewBox="0 0 24 24">${icons.calendar}</svg>
                    </div>
                    <h3 class="card-titulo">REVISÃO<br>PREVENTIVA</h3>
                    <p class="card-desc">O ponto de confiança em Cajazeiras 8. Planos de revisão para garantir que seu carro nunca te deixe na mão.</p>
                    <button class="btn-ver-planos" aria-label="Ver planos de manutenção preventiva">AGENDAR REVISÃO</button>
                </article>

            </div>
        </div>
    </section>
`;

export function inicializarCatalogo() {
    injetarCSS();
    const main = document.getElementById('conteudo-principal');
    if (!main) return;

    const div = document.createElement('div');
    div.innerHTML = catalogoHTML;
    main.appendChild(div.firstElementChild);

    // Inicializar Animações (Carousel Mobile)
    const section = document.getElementById('catalogo-servicos');
    if (section) {
        new CatalogoAnimacoes(section);
    }
}

function injetarCSS() {
    const linkId = 'css-catalogo';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/catalogo/catalogo.css';
        document.head.appendChild(link);
    }
}