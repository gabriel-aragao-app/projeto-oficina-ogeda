/**
 * Módulo: Marcas
 * Controlador para o carrossel de marcas
 */

const htmlMarcas = `
    <section id="sessao-marcas">
        <div class="marcas-container">
            <h3 class="marcas-titulo">ESPECIALISTAS NAS PRINCIPAIS MARCAS</h3>
            
            <div class="carrossel-wrapper">
                <div class="carrossel-trilho" id="trilho-marcas">
                    <!-- Itens Originais -->
                    <span class="marca-item marca-fiat">Fiat</span>
                    <span class="marca-item marca-jeep">Jeep</span>
                    <span class="marca-item marca-volkswagen">Volkswagen</span>
                    <span class="marca-item marca-ford">Ford</span>
                    <span class="marca-item marca-chevrolet">Chevrolet</span>
                    <span class="marca-item marca-toyota">Toyota</span>
                    <span class="marca-item marca-hyundai">Hyundai</span>
                    <span class="marca-item marca-honda">Honda</span>
                    <span class="marca-item marca-renault">Renault</span>
                    
                    <!-- O JS irá duplicar estas marcas para o efeito infinito -->
                </div>
            </div>
        </div>
    </section>
`;

export function inicializarMarcas() {
    injetarCSS();

    const main = document.getElementById('conteudo-principal');
    if (!main) {
        console.error('Elemento principal não encontrado.');
        return;
    }

    // Adicionar HTML
    const divTemp = document.createElement('div');
    divTemp.innerHTML = htmlMarcas;
    main.appendChild(divTemp.firstElementChild);

    // Lógica de Duplicação
    configurarCarrossel();
}

function configurarCarrossel() {
    const trilho = document.getElementById('trilho-marcas');
    if (!trilho) return;

    // Clona todos os filhos e adiciona ao final para criar o loop
    const itens = Array.from(trilho.children);
    itens.forEach(item => {
        const clone = item.cloneNode(true);
        // Opcional: Adicionar classe para identificar clones se necessário
        clone.classList.add('clone');
        trilho.appendChild(clone);
    });
}

function injetarCSS() {
    const linkId = 'css-marcas';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/marcas/marcas.css';
        document.head.appendChild(link);
    }
}
