/**
 * Módulo: Hero Animações (Premium & Performance Optimized)
 * Gerencia a entrada triunfal e interatividade da seção Hero.
 */

export class HeroAnimacoes {
    constructor(elementoHero) {
        this.hero = elementoHero;

        // Dependências de estilo
        this.injetarEstilosAnimacao();

        // Elementos Alvo
        this.elBadge = this.hero.querySelector('.badget-label');
        this.elTitulo = this.hero.querySelector('.hero-titulo');
        this.elDesc = this.hero.querySelector('.hero-descricao');
        this.elBotoes = this.hero.querySelector('.hero-botoes');
        this.elImagem = this.hero.querySelector('.hero-imagem-container');
        this.elListaServicos = this.hero.querySelector('.hero-servicos-lista');
        this.cardsServicos = this.hero.querySelectorAll('.servico-card');

        // Inicialização
        this.prepararElementos();
        this.iniciarObserver();
        this.iniciarParallax();
    }

    injetarEstilosAnimacao() {
        const linkId = 'css-hero-anim';
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = './modulos/hero/hero-animacoes.css';
            document.head.appendChild(link);
        }
    }

    prepararElementos() {
        // Adiciona classe base para opacidade inicial (hidden)
        const elementos = [this.elBadge, this.elTitulo, this.elDesc, this.elBotoes, this.elImagem];
        elementos.forEach(el => {
            if (el) el.classList.add('hero-anim-hidden');
        });

        // Configurações Específicas
        if (this.elImagem) {
            this.elImagem.classList.add('hero-anim-right'); // Entra da direita
        }
    }

    iniciarObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.executarSequenciaEntrada();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(this.hero);
    }

    executarSequenciaEntrada() {
        // Delays em ms
        const timeline = [
            { el: this.elImagem, delay: 0 },       // Imagem Fundo/Lateral começa
            { el: this.elBadge, delay: 200 },      // Badge "Oficina Premium"
            { el: this.elTitulo, delay: 400 },     // Título Principal
            { el: this.elDesc, delay: 600 },       // Descrição
            { el: this.elBotoes, delay: 800 },     // Botões CTA
        ];

        timeline.forEach(item => {
            if (item.el) {
                setTimeout(() => {
                    item.el.classList.add('hero-anim-show');
                    // Ativar float na imagem após entrada
                    if (item.el === this.elImagem) {
                        setTimeout(() => item.el.classList.add('hero-float-effect'), 1000);
                    }
                }, item.delay);
            }
        });

        // Cards Inferiores (Staggered)
        if (this.elListaServicos) {
            setTimeout(() => {
                this.elListaServicos.classList.add('anim-cards-active');

                this.cardsServicos.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150); // 150ms entre cada card
                });
            }, 1000);
        }
    }

    iniciarParallax() {
        // Apenas Desktop para performance
        if (window.innerWidth > 900) {
            document.addEventListener('mousemove', (e) => {
                if (!this.elImagem) return;

                const moveX = (window.innerWidth - e.pageX * 2) / 100;
                const moveY = (window.innerHeight - e.pageY * 2) / 100;

                // Aplica movimento sutil na imagem
                // Nota: Usa transform combinando com a animação float pode ser complexo,
                // então aplicamos em um espectro menor ou usamos variáveis CSS se fosse mais avançado.
                // Aqui faremos um deslocamento simples "tilt"

                this.elImagem.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    }
}
