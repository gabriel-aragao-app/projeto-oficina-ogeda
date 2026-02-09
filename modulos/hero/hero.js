/**
 * Módulo: Hero
 * Controlador principal da seção Hero (Versão Atualizada Premium)
 */
import { HeroAnimacoes } from './hero-animacoes.js';

// HTML do componente
const htmlHero = `
    <section id="hero-section" aria-labelledby="hero-title">
    <div class="hero-container container">
        
        <div class="hero-esquerdo">
            <span class="badget-label">REFERÊNCIA EM CAJAZEIRAS</span>
            
            <h1 id="hero-title" class="hero-titulo">
                TECNOLOGIA,<br>
                <span class="italic">CONFIANÇA &</span><br>
                <span class="destaque-azul">PRECISÃO</span>
            </h1>
            
            <p class="hero-descricao">
                Especialista em <strong>câmbio automatizado</strong> e diagnóstico digital em <strong>Salvador</strong>. 
                A tecnologia que move seu veículo com a precisão técnica da Ogeda Car Tech em Cajazeiras 8.
            </p>

            <div class="hero-botoes">
                <button class="btn-diagnostico" aria-label="Iniciar diagnóstico digital do veículo">DIAGNÓSTICO</button>
                <button class="btn-servicos" aria-label="Ver lista completa de serviços automotivos">VER SERVIÇOS</button>
            </div>
        </div>

        <div class="hero-direito">
            <div class="hero-imagem-container" 
                 role="img" 
                 aria-label="Engrenagens de alta precisão de um câmbio automático moderno - Ogeda Car Tech Salvador">
            </div>
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
