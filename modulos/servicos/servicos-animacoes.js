/**
 * Módulo: Serviços Animações (Refined)
 * Orquestra a entrada dos elementos e interações da grid.
 */

export class ServicosAnimacoes {
    constructor(elementoSecao) {
        this.secao = elementoSecao;

        // Elementos para animar
        this.header = this.secao.querySelector('.servicos-header');
        this.titulos = this.header ? Array.from(this.header.children) : [];
        this.cards = Array.from(this.secao.querySelectorAll('article')); // Pega todos os cards semânticos

        this.injetarCSS();
        this.prepararElementos();
        this.initObserver();
    }

    injetarCSS() {
        const linkId = 'css-servicos-anim';
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = './modulos/servicos/servicos-animacoes.css';
            document.head.appendChild(link);
        }
    }

    prepararElementos() {
        // Oculta Cabeçalho
        this.titulos.forEach(el => el.classList.add('serv-anim-hidden'));

        // Oculta Cards
        this.cards.forEach(card => card.classList.add('serv-anim-hidden'));
    }

    initObserver() {
        // Observer Header
        const observerHeader = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animarHeader();
                    observerHeader.disconnect(); // Anima só uma vez
                }
            });
        }, { threshold: 0.3 }); // 30% visível

        if (this.header) observerHeader.observe(this.header);

        // Observer Grid (Pode ser separado para animar os cards só quando eles aparecerem mesmo)
        const observerGrid = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animarGrid();
                    observerGrid.disconnect();
                }
            });
        }, { threshold: 0.1 }); // 10% da grid visível

        if (this.cards.length > 0) observerGrid.observe(this.cards[0].parentElement); // Observa o container grid
    }

    animarHeader() {
        // Cascata nos elementos do header (Subtitulo, Titulo, Descrição)
        this.titulos.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('serv-anim-active');
            }, index * 200);
        });
    }

    animarGrid() {
        // Cascata nos cards
        this.cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('serv-anim-active');
            }, index * 150 + 200); // Delay inicial de 200ms após header
        });

        // Adiciona efeito 'pulse' ao botão de orçamento após entrada
        const btn = this.secao.querySelector('.btn-explorar');
        if (btn) {
            setTimeout(() => btn.classList.add('pulse-effect'), 2000);
        }
    }
}
