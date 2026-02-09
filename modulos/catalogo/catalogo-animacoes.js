/**
 * Módulo: Catálogo Animações (Mobile Carousel & Pause Strategy)
 */

export class CatalogoAnimacoes {
    constructor(elementoCatalogo) {
        this.catalogo = elementoCatalogo;
        this.track = this.catalogo.querySelector('.catalogo-grid');
        this.cards = Array.from(this.track.children);

        // Configurações
        this.isMobile = window.innerWidth <= 768;
        this.scrollSpeed = 1; // Pixels por frame (ajuste para suavidade)
        this.pauseDuration = 1000; // Tempo parado no meio (300ms a 1000ms para leitura)
        this.currentScroll = 0;
        this.isPaused = false;
        this.animationFrameId = null;
        this.lastTimestamp = 0;
        this.pauseTimer = 0;

        // Inicialização
        if (this.isMobile) {
            this.iniciarCarrosselMobile();
        }

        // Listener Resize
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 768;

            if (this.isMobile && !wasMobile) {
                this.iniciarCarrosselMobile();
            } else if (!this.isMobile && wasMobile) {
                this.destruirCarrosselMobile();
            }
        });
    }

    iniciarCarrosselMobile() {
        console.log('Iniciando Carrossel Infinito Mobile...');

        // 1. Preparar Layout (Inject Class)
        this.track.classList.add('mobile-carousel-active');

        // 2. Duplicar Elementos para Loop Infinito
        // Precisamos de cópias suficientes para cobrir a largura da tela + buffer
        // Como são 6 cards, duplicar 1x o set inteiro deve bastar (12 cards total)
        this.cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.classList.add('clone-item');
            this.track.appendChild(clone);
        });

        // Atualiza lista total
        this.allCards = Array.from(this.track.children);

        // 3. Iniciar Loop de Animação
        this.startAnimationLoop();
    }

    destruirCarrosselMobile() {
        cancelAnimationFrame(this.animationFrameId);
        this.track.classList.remove('mobile-carousel-active');
        this.track.style.transform = '';

        // Remove clones
        const clones = this.track.querySelectorAll('.clone-item');
        clones.forEach(el => el.remove());
    }

    startAnimationLoop() {
        const loop = (timestamp) => {
            if (!this.lastTimestamp) this.lastTimestamp = timestamp;
            const deltaTime = timestamp - this.lastTimestamp;
            this.lastTimestamp = timestamp;

            if (!this.isPaused) {
                this.currentScroll += this.scrollSpeed;

                // Lógica de Loop Infinito
                // Se o primeiro card original sair totalmente da tela, movemos ele pro final?
                // Ou resetamos o scroll? Resetar o scroll é mais suave se tivermos duplicatas exatas.
                // Altura/Largura total do set original
                const cardWidth = this.allCards[0].offsetWidth + 30; // + gap (approx)
                const totalOriginalWidth = cardWidth * this.cards.length;

                if (this.currentScroll >= totalOriginalWidth) {
                    this.currentScroll = 0;
                }

                this.track.scrollLeft = this.currentScroll;

                // Aplica Transform via JS para maior controle (ou usa scrollLeft)
                // Vamos usar scrollLeft do container se overflow for scroll, 
                // mas para animação customizada "Pause no Meio", precisamos calcular posições.
            }

            this.checkCenterAlignment(timestamp);

            this.animationFrameId = requestAnimationFrame(loop);
        };
        this.animationFrameId = requestAnimationFrame(loop);
    }

    checkCenterAlignment(timestamp) {
        // Centro da tela no contexto do track
        const trackCenter = this.track.scrollLeft + (this.track.offsetWidth / 2);

        // Verificar qual card está no centro
        // Simplificação: vamos iterar e ver quem está próximo
        let suspendedCard = null;

        // Otimização: Não checar todo frame se estiver pausado
        if (this.isPaused) {
            if (timestamp - this.pauseTimer > this.pauseDuration) {
                this.isPaused = false; // Retoma
                // Remove destaque visual
                this.allCards.forEach(c => c.classList.remove('card-suspended'));
                // Pula um pouco o scroll para não pausar imediatamente de novo no mesmo pixel
                this.currentScroll += 5;
            }
            return;
        }

        const cardWidth = this.allCards[0].offsetWidth;
        const gap = 30;

        // Posição de cada card hipotética (supondo largura fixa)
        // Melhor ler o offsetLeft real
        for (let i = 0; i < this.allCards.length; i++) {
            const card = this.allCards[i];
            const cardCenter = card.offsetLeft + (cardWidth / 2);

            // Distância do centro
            const dist = Math.abs(cardCenter - trackCenter);

            // Threshold de "estar no meio" (ex: 2px)
            if (dist < 2) {
                this.isPaused = true;
                this.pauseTimer = timestamp;
                card.classList.add('card-suspended');

                // Forçar alinhamento perfeito (snap visual)
                // this.currentScroll += (cardCenter - trackCenter); // Ajuste fino
                break;
            }
        }
    }
}
