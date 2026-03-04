/**
 * Módulo: Cabeçalho com Menu Mobile Funcional
 */

const cabecalhoHTML = `
    <header id="cabecalho-principal">
        <div class="container cabecalho-container">
            <!-- Logo -->
            <a href="#" class="logo">
                <img src="./assets/logo-header.png" alt="Ogeda Car Tech" class="logo-img">
            </a>

            <!-- Navegação Desktop -->
            <nav class="nav-menu">
                <ul>
                    <li><a href="#" class="nav-link">Início</a></li>
                    <li><a href="#servicos-especializados" class="nav-link">Serviços</a></li>
                    <li><a href="#sobre-nos" class="nav-link">Sobre</a></li>
                    <li><a href="#localizacao-mapa" class="nav-link">Localização</a></li>
                </ul>
            </nav>

            <!-- Ações Desktop + Botão Mobile -->
            <div class="header-actions">
                <a href="#contato-diagnostico" class="btn-agendar-header">
                    Agendar Agora
                </a>
                <button class="menu-mobile-btn" aria-label="Abrir Menu" id="btn-menu-mobile">
                    ☰
                </button>
            </div>
        </div>

        <!-- Overlay Menu Mobile -->
        <div class="menu-mobile-overlay" id="menu-mobile-overlay">
            <button class="menu-close-btn" aria-label="Fechar Menu" onclick="fecharMenu()">✕</button>
            <ul class="nav-mobile-list">
                <li class="nav-mobile-item"><a href="#" class="nav-mobile-link" onclick="fecharMenu()">Início</a></li>
                <li class="nav-mobile-item"><a href="#servicos-especializados" class="nav-mobile-link" onclick="fecharMenu()">Serviços</a></li>
                <li class="nav-mobile-item"><a href="#sobre-nos" class="nav-mobile-link" onclick="fecharMenu()">Sobre a Ogeda</a></li>
                <li class="nav-mobile-item"><a href="#localizacao-mapa" class="nav-mobile-link" onclick="fecharMenu()">Localização</a></li>
            </ul>
            <a href="#contato-diagnostico" class="btn-mobile-full" onclick="fecharMenu()">AGENDAR DIAGNÓSTICO</a>
        </div>
    </header>
`;

// Variáveis globais para controle
let menuAberto = false;

window.fecharMenu = function () {
    const overlay = document.getElementById('menu-mobile-overlay');
    const btn = document.getElementById('btn-menu-mobile');
    const header = document.getElementById('cabecalho-principal');

    if (overlay) {
        overlay.classList.remove('active');
        menuAberto = false;
        // if (btn) btn.innerHTML = '☰';

        // Retorna header ao estado normal (transparente se Topo)
        if (window.scrollY <= 50) header.classList.remove('scrolled');
    }
};

export function inicializarCabecalho() {
    injetarCSS();

    const corpo = document.body;
    const div = document.createElement('div');
    div.innerHTML = cabecalhoHTML;
    corpo.insertBefore(div.firstElementChild, corpo.firstChild);

    // Lógica Scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('cabecalho-principal');
        if (header && !menuAberto) { // Não muda se menu estiver aberto
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Lógica Menu Mobile
    const btnMobile = document.getElementById('btn-menu-mobile');
    const overlay = document.getElementById('menu-mobile-overlay');
    const header = document.getElementById('cabecalho-principal');

    if (btnMobile && overlay) {
        btnMobile.addEventListener('click', () => {
            menuAberto = !menuAberto;

            if (menuAberto) {
                overlay.classList.add('active');
                // btnMobile.innerHTML = '✕'; // Substituído pelo botão explícito
                header.classList.add('scrolled'); // Garante fundo escuro
            } else {
                overlay.classList.remove('active');
                // btnMobile.innerHTML = '☰';
                if (window.scrollY <= 50) header.classList.remove('scrolled');
            }
        });
    }
}

function injetarCSS() {
    const linkId = 'css-cabecalho';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/cabecalho/cabecalho.css';
        document.head.appendChild(link);
    }
}
