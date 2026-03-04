/**
 * Módulo: Galeria de Fotos
 */

const htmlGaleria = `
    <section id="galeria-fotos" aria-labelledby="galeria-titulo">
        <div class="container">
            <header class="galeria-header">
                <span class="label-galeria">NOSSA ESTRUTURA</span>
                <h2 id="galeria-titulo" class="galeria-titulo">Conheça a Ogeda Car Tech</h2>
            </header>
            <div class="galeria-grid" id="gallery-container">
                <!-- Imagens serão injetadas via JavaScript -->
            </div>
        </div>
    </section>
`;

export function inicializarGaleria() {
    injetarCSS();

    const main = document.getElementById('conteudo-principal');
    if (!main) return;

    // Evita duplicatas (útil caso o módulo seja chamado múltiplas vezes)
    if (document.getElementById('galeria-fotos')) return;

    const div = document.createElement('div');
    div.innerHTML = htmlGaleria;
    main.appendChild(div.firstElementChild);

    const sectionElement = document.getElementById('galeria-fotos');
    if (!sectionElement) return;

    const galleryContainer = sectionElement.querySelector('#gallery-container');
    if (!galleryContainer) return;

    // Imagens reais da Ogeda Car Tech
    const images = [
        {
            url: "assets/images/fachada.png",
            alt: "Fachada Ogeda Car Tech"
        },
        {
            url: "assets/images/funcionarios-trabalhando.jpg",
            alt: "Dois funcionários trabalhando"
        },
        {
            url: "assets/images/oficina-notbook.jpg",
            alt: "Notebook sobre a mesa da oficina"
        },
        {
            url: "assets/images/oficina-ampla.jpg",
            alt: "Pátio da oficina com um carro no elevador"
        },
        {
            url: "assets/images/diagnostico-computadorizado.jpg",
            alt: "Diagnóstico computadorizado"
        },
        {
            url: "assets/images/aparelho-digital.jpg",
            alt: "Buroscópio automotivo"
        }
    ];

    const createGalleryItem = (img, index) => {
        // Layout Masonry/Grid alternado
        // 0 (Grande), 1, 2, 3 (Grande), 4, 5
        const spanClass = index === 0 || index === 3 ? "item-grande" : "item-normal";

        return `
            <div class="galeria-item ${spanClass}">
                <img src="${img.url}" alt="${img.alt}" loading="lazy">
            </div>
        `;
    };

    galleryContainer.innerHTML = images.map((img, i) => createGalleryItem(img, i)).join('');
}

function injetarCSS() {
    const linkId = 'css-galeria';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/galeria/galeria.css';
        document.head.appendChild(link);
    }
}
