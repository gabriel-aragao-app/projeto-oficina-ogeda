/**
 * Arquivo Principal JavaScript
 * Responsável por orquestrar o carregamento dos módulos
 */

// Importação dos Módulos
import { inicializarCabecalho } from '../modulos/cabecalho/cabecalho.js';
import { inicializarHero } from '../modulos/hero/hero.js';
import { inicializarColecao } from '../modulos/colecao/colecao.js';
import { inicializarServicos } from '../modulos/servicos/servicos.js';
import { inicializarMarcas } from '../modulos/marcas/marcas.js';
import { inicializarCatalogo } from '../modulos/catalogo/catalogo.js';
import { inicializarSobre } from '../modulos/sobre/sobre.js';
import { inicializarGaleria } from '../modulos/galeria/galeria.js';
import { inicializarAvaliacoes } from '../modulos/avaliacoes/avaliacoes.js';
import { inicializarContato } from '../modulos/contato/contato.js';
import { inicializarLocalizacao } from '../modulos/localizacao/localizacao.js';
import { inicializarRodape } from '../modulos/rodape/rodape.js';
import { inicializarWhatsapp } from '../modulos/whatsapp/whatsapp.js';

// Função de Inicialização Geral
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicação Iniciada - Modo Modular');

    // Inicializar Módulos Sequencialmente
    try {
        inicializarCabecalho();
        console.log('Módulo Cabeçalho carregado.');

        inicializarHero();
        console.log('Módulo Hero carregado.');

        inicializarColecao(); // Nova Seção
        console.log('Módulo Coleção carregado.');

        inicializarServicos();
        console.log('Módulo Serviços carregado.');

        inicializarMarcas();
        console.log('Módulo Marcas carregado.');

        inicializarCatalogo();
        console.log('Módulo Catálogo carregado.');

        inicializarSobre();
        console.log('Módulo Sobre carregado.');

        inicializarGaleria();
        console.log('Módulo Galeria carregado.');

        inicializarAvaliacoes();
        console.log('Módulo Avaliações carregado.');

        inicializarContato();
        console.log('Módulo Contato carregado.');

        inicializarLocalizacao();
        console.log('Módulo Localização carregado.');

        inicializarRodape();
        console.log('Módulo Rodapé carregado.');

        inicializarWhatsapp();
        console.log('Módulo WhatsApp carregado.');

        // Inicializar Fade-Up das Seções (Lazy Rendering UX)
        inicializarFadeAnimations();
        console.log('Animações base ativadas.');

    } catch (erro) {
        console.error('Erro Crítico ao carregar módulos:', erro);
    }
});

/**
 * Função Global de Animações (Scroll Fade)
 */
function inicializarFadeAnimations() {
    // Configura o observador para disparar quando a seção aparecer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Roda apenas 1 vez (desempenho)
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    // Anexar a classe invisível a grandes blocos estáticos para animar
    const blocos = document.querySelectorAll('section > .container, #rodape-principal .container');
    blocos.forEach(bloco => {
        bloco.classList.add('animate-fade-up');
        observer.observe(bloco);
    });
}
