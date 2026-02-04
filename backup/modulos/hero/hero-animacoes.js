/**
 * Módulo: Hero Animações
 * Gerencia as animações específicas da seção Hero
 */

export class HeroAnimacoes {
    constructor(elementoHero) {
        this.hero = elementoHero;
        this.blobs = this.hero.querySelectorAll('.hero-blob');

        console.log('Hero Animações Inicializado');
        this.iniciarListeners();
        this.animarEntrada();
    }

    iniciarListeners() {
        // Efeito Parallax suave no movimento do mouse
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            this.blobs.forEach((blob, index) => {
                const velocidade = (index + 1) * 20; // Velocidades diferentes para profundidade
                const moveX = (x * velocidade) - (velocidade / 2);
                const moveY = (y * velocidade) - (velocidade / 2);

                blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    animarEntrada() {
        // Seleciona elementos para animar
        const titulo = this.hero.querySelector('.hero-titulo');
        const subtitulo = this.hero.querySelector('.hero-subtitulo');
        const acoes = this.hero.querySelector('.hero-acoes');

        // Adiciona delay sequencial (stagger) de forma manual simples
        if (titulo) {
            setTimeout(() => titulo.classList.add('animar-entrada'), 100);
        }
        if (subtitulo) {
            setTimeout(() => subtitulo.classList.add('animar-entrada'), 300);
        }
        if (acoes) {
            setTimeout(() => acoes.classList.add('animar-entrada'), 500);
        }
    }
}
