/**
 * Módulo: Serviços Animações
 */

export class ServicosAnimacoes {
    constructor(elementoSecao) {
        this.secao = elementoSecao;
        this.cards = this.secao.querySelectorAll('.card-grande, .card-azul, .card-preventiva, .card-scanner');
        this.init();
    }

    init() {
        // Observer para animação de entrada ao rolar
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animarEntrada();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        observer.observe(this.secao);
    }

    animarEntrada() {
        this.cards.forEach((card, index) => {
            // Efeito de "Slide Up" suave com delay escalonado
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';

            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150); // 150ms de delay entre cada card
        });
    }
}
