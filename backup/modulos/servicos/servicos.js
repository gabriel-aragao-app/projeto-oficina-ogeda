/**
 * Módulo: Serviços Especializados
 * Controlador da seção GRID de serviços
 */
import { ServicosAnimacoes } from './servicos-animacoes.js';

const htmlServicos = `
    <section id="servicos-especializados">
        <div class="container">
            <!-- Cabeçalho -->
            <div class="servicos-header">
                <span class="subtitulo-label"> ESPECIALIDADES </span>
                <h2 class="titulo-principal">
                    Referência em Câmbio <span class="destaque-texto">Dualogic, iMotion e EasyR</span> na região de Cajazeiras.
                </h2>
                <p class="descricao-texto">
                    Se você está em Salvador e seu câmbio apresentou falha, não precisa atravessar a cidade. 
                    A <strong>Ogeda Car Tech</strong> é a oficina mecânica em Cajazeiras especializada em transmissões automatizadas.
                </p>
            </div>

            <!-- Grid Bento -->
            <div class="servicos-grid">
                
                <!-- Card Grande: Troca de Óleo -->
                <div class="card-grande">
                    <img src="./assets/servico-destaque-oleo.png" alt="Troca de Óleo" class="card-bg-img">
                    <div class="overlay-gradiente"></div>
                    <div class="card-conteudo">
                        <span class="tag-premium">SERVIÇO PREMIUM</span>
                        <h3 class="card-titulo">TROCA DE ÓLEO<br>DE CÂMBIO</h3>
                        <p class="card-desc">
                            Equipamentos de flushing e fluidos originais para maior durabilidade do seu sistema automatizado.
                        </p>
                    </div>
                </div>

                <!-- Card Azul: Injeção -->
                <div class="card-azul">
                    <img src="./assets/servico-destaque-injecao.png" alt="" class="card-bg-icon">
                    <div class="card-conteudo-azul">
                        <h3>INJEÇÃO ELETRÔNICA</h3>
                        <p>Diagnóstico computadorizado de falhas e limpeza técnica de bicos injetores.</p>
                        <button class="btn-explorar">ORÇAMENTO</button>
                    </div>
                </div>

                <!-- Container Baixo (2 Cards) -->
                <div class="container-baixo">
                    
                <!-- Card Preventiva -->
                <div class="card-preventiva">
                    <img src="./assets/servico-preventiva.png" alt="Manutenção Preventiva" class="card-bg-img">
                    <div class="overlay-gradiente"></div>
                    <div class="card-conteudo">
                        <h3>MANUTENÇÃO PREVENTIVA</h3>
                        <p>Evite surpresas e mantenha a performance.</p>
                    </div>
                </div>

                    <!-- Card Scanner -->
                    <div class="card-scanner">
                        <img src="./assets/servico-destaque-scanner.png" alt="Scanner Original" class="card-bg-img">
                        <div class="overlay-gradiente"></div>
                        <div class="card-conteudo">
                            <h3>SCANNER ORIGINAL</h3>
                            <p>Diagnóstico preciso com tecnologia de ponta.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
`;

export function inicializarServicos() {
    injetarCSS();

    const main = document.getElementById('conteudo-principal');
    if (!main) {
        console.error('Elemento principal não encontrado.');
        return;
    }

    // Adiciona ao final do main (append) em vez de substituir, pois o Hero já está lá
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlServicos;
    main.appendChild(tempDiv.firstElementChild);

    const section = document.getElementById('servicos-especializados');
    if (section) {
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
