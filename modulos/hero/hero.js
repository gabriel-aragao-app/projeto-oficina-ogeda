/**
 * Módulo: Hero
 * Controlador principal da seção Hero (Versão Atualizada Premium)
 */
import { HeroAnimacoes } from './hero-animacoes.js';

// HTML do componente
const htmlHero = `
    <section id="hero-section">
        <div class="hero-container container">
            <!-- Conteúdo Esquerda -->
            <div class="hero-esquerdo">
                <span class="badget-label">OFICINA PREMIUM</span>
                <h1 class="hero-titulo">
                    MODERN,<br>
                    <span class="italic">STYLISH &</span><br>
                    <span class="destaque-azul">HIGH TECH</span>
                </h1>
                
                <p class="hero-descricao">
                    Especialistas em transmissão e diagnóstico digital avançado.
                    A tecnologia que move o seu veículo com precisão cirúrgica.
                </p>

                <div class="hero-botoes">
                    <button class="btn-diagnostico">DIAGNÓSTICO</button>
                    <button class="btn-servicos">NOSSOS SERVIÇOS</button>
                </div>
            </div>

            <!-- Visual Direita (Imagem recortada) -->
            <div class="hero-direito">
                <div class="hero-imagem-container"></div>
            </div>
        </div>
    </section>
`;

export function inicializarHero() {
    // 1. Injetar CSS
    injetarCSS();

    // 2. Renderizar HTML
    const main = document.getElementById('conteudo-principal');
    if (!main) return;

    // Evita duplicação
    if (document.getElementById('hero-section')) return;

    const div = document.createElement('div');
    div.innerHTML = htmlHero;
    // Insere como primeiro filho do Main (para garantir posição de Hero)
    if (main.firstChild) {
        main.insertBefore(div.firstElementChild, main.firstChild);
    } else {
        main.appendChild(div.firstElementChild);
    }

    // 3. Inicializar Animações
    setTimeout(() => {
        const section = document.getElementById('hero-section');
        if (section) {
            try {
                new HeroAnimacoes(section);
            } catch (e) {
                console.warn('HeroAnimacoes não carregou ou falhou:', e);
            }
        }
    }, 0);
}

function injetarCSS() {
    const linkId = 'css-hero';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/hero/hero.css';
        document.head.appendChild(link);
    }
}
