/**
 * Módulo: Serviços Especializados
 * Controlador da seção GRID de serviços com SEO Local Agressivo
 */
import { ServicosAnimacoes } from './servicos-animacoes.js';

const htmlServicos = `
    <section id="servicos-especializados" aria-labelledby="servicos-titulo-seo">
        <div class="container">
            <header class="servicos-header">
                <span class="subtitulo-label"> ESPECIALIDADES DE ELITE </span>
                <h2 id="servicos-titulo-seo" class="titulo-principal">
                    Referência em Câmbio <span class="destaque-texto">Dualogic, iMotion e EasyR</span> em Cajazeiras
                </h2>
                <p class="descricao-texto">
                    Não precisa atravessar <strong>Salvador</strong> para consertar seu carro. 
                    A <strong>Ogeda Car Tech</strong> é a oficina mecânica em <strong>Cajazeiras</strong> especialista em transmissões automatizadas e diagnósticos de alta complexidade.
                </p>
            </header>

            <div class="servicos-grid">
                
                <article class="card-grande">
                    <img src="./assets/servico-destaque-oleo.png" 
                         alt="Troca de óleo de câmbio automatizado em Salvador - Ogeda Car Tech" 
                         class="card-bg-img"
                         loading="lazy">
                    <div class="overlay-gradiente"></div>
                    <div class="card-conteudo">
                        <span class="tag-premium">TECNOLOGIA FLUSHING</span>
                        <h3 class="card-titulo">TROCA DE ÓLEO<br>DE CÂMBIO</h3>
                        <p class="card-desc">
                            Fluídos originais e remoção total de impurezas para máxima durabilidade do seu <strong>Dualogic ou iMotion</strong>.
                        </p>
                    </div>
                </article>

                <article class="card-azul">
                    <img src="./assets/servico-destaque-injecao.png" alt="" class="card-bg-icon" aria-hidden="true">
                    <div class="card-conteudo-azul">
                        <h3>INJEÇÃO ELETRÔNICA</h3>
                        <p>Diagnóstico computadorizado para economia de combustível e performance ideal.</p>
                        <a href="#contato-diagnostico" class="btn-explorar" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;" aria-label="Solicitar orçamento para injeção eletrônica">ORÇAMENTO</a>
                    </div>
                </article>

                <div class="container-baixo">
                    
                    <article class="card-preventiva">
                        <img src="./assets/servico-preventiva.png" 
                             alt="Manutenção preventiva automotiva em Cajazeiras 8" 
                             class="card-bg-img"
                             loading="lazy">
                        <div class="overlay-gradiente"></div>
                        <div class="card-conteudo">
                            <h3>REVISÃO PREVENTIVA</h3>
                            <p>O ponto de confiança em <strong>Cajazeiras 8</strong> para sua segurança.</p>
                        </div>
                    </article>

                    <article class="card-scanner">
                        <img src="./assets/servico-destaque-scanner.png" 
                             alt="Scanner automotivo original de última geração" 
                             class="card-bg-img"
                             loading="lazy">
                        <div class="overlay-gradiente"></div>
                        <div class="card-conteudo">
                            <h3>SCANNER ORIGINAL</h3>
                            <p>Leitura precisa de falhas com equipamentos de padrão concessionária.</p>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    </section>
`;

export function inicializarServicos() {
    injetarCSS();

    const main = document.getElementById('conteudo-principal');
    if (!main) return;

    // Uso de insertAdjacentHTML para não sobrescrever o conteúdo atual e garantir a ordem
    main.insertAdjacentHTML('beforeend', htmlServicos);

    const section = document.getElementById('servicos-especializados');
    if (section && typeof ServicosAnimacoes === 'function') {
        new ServicosAnimacoes(section);
    }
}

function injetarCSS() {
    const linkId = 'css-servicos';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/servicos/servicos.css';
        document.head.appendChild(link);
    }
}