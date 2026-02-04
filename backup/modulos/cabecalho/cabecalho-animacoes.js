/**
 * Módulo: Cabeçalho Animações
 * Gerencia o comportamento visual do cabeçalho
 */

export class CabecalhoAnimacoes {
    constructor(elementoCabecalho) {
        this.cabecalho = elementoCabecalho;
        this.init();
    }

    init() {
        // Listener de Scroll para efeito Sticky
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.cabecalho.classList.add('scrolled');
        } else {
            this.cabecalho.classList.remove('scrolled');
        }
    }
}
