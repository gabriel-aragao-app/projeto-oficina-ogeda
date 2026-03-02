/**
 * Módulo: Contato e Diagnóstico (Quiz Otimizado)
 * Foco: Conversão Imediata e Qualificação de Lead
 */

// Ícones (Mantidos e Otimizados)
const icons = {
    whatsapp: '<svg class="btn-icon-large" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    phone: '<svg class="btn-icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:24px;height:24px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    clipboard: '<svg class="quiz-icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>'
};

// Estado do Quiz (Sincronizado com Persona)
let quizState = {
    step: 0,
    data: {
        carro: '',
        problema: '',
        urgencia: '',
        nome: ''
    }
};

const contatoHTML = `
    <section id="contato-diagnostico" aria-labelledby="contato-titulo-seo">
        <div class="container">
            <div class="contato-header">
                <span class="label-agendamento">REFERÊNCIA EM CÂMBIO AUTOMATIZADO EM SALVADOR</span>
                <h2 id="contato-titulo-seo" class="contato-titulo">Diagnóstico & Orçamento Rápido</h2>
            </div>

            <div class="contato-grid">
                
                <div class="coluna-info">
                    <div class="info-card">
                        <h4 class="info-titulo">OGEDA CAR TECH</h4>
                        <p class="info-texto">O seu veículo com quem realmente cuida bem. Referência técnica em Cajazeiras 8.</p>
                    </div>

                    <div class="info-card endereco-box">
                        <div class="icon-pin" aria-hidden="true">${icons.pin}</div>
                        <div>
                            <h4 class="info-titulo">LOCALIZAÇÃO</h4>
                            <p class="info-texto">Rua Deputado Herculano de Menezes, n° 36<br>Cajazeiras 8, Salvador - BA</p>
                        </div>
                    </div>

                    <div class="btns-contato-row">
                        <a href="https://wa.me/5571981303232" target="_blank" class="btn-contato btn-whatsapp" aria-label="Falar pelo WhatsApp agora">
                            ${icons.whatsapp} WHATSAPP
                        </a>
                        <a href="tel:+5571981303232" class="btn-contato btn-ligacao" aria-label="Ligar para a oficina">
                            ${icons.phone} LIGAÇÃO
                        </a>
                    </div>

                    <div class="info-card">
                        <h4 class="info-titulo">HORÁRIO DE FUNCIONAMENTO</h4>
                        <table class="horario-table" role="presentation">
                            <tr><td>Segunda a Sexta</td><td class="hora-val">08:00 - 17:30</td></tr>
                            <tr><td>Sábado</td><td class="hora-val">08:00 - 12:00</td></tr>
                            <tr><td>Dom e Feriados</td><td class="fechado">SEM EXPEDIENTE</td></tr>
                        </table>
                    </div>
                </div>

                <div id="quiz-wrapper" class="quiz-container">
                    </div>
            </div>
        </div>
    </section>
`;

export function inicializarContato() {
    injetarCSS();
    const main = document.getElementById('conteudo-principal');
    if (!main) return;

    const div = document.createElement('div');
    div.innerHTML = contatoHTML;
    main.appendChild(div.firstElementChild);

    renderizarQuiz();
}

function renderizarQuiz() {
    const wrapper = document.getElementById('quiz-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';

    if (quizState.step === 0) {
        wrapper.innerHTML = `
            <div class="step-content">
                ${icons.clipboard}
                <h3 class="quiz-titulo">Triagem Digital</h3>
                <p class="quiz-desc">Responda 3 perguntas rápidas e adiante seu orçamento pelo WhatsApp</p>
                <button class="btn-start-quiz" id="btn-iniciar">INICIAR AGORA</button>
            </div>
        `;
        document.getElementById('btn-iniciar').onclick = () => avancarStep();

    } else if (quizState.step === 1) {
        wrapper.innerHTML = `
            <div class="step-content">
                <h3 class="quiz-titulo">Qual o seu carro?</h3>
                <p class="quiz-desc">Ex: Fiat Argo 2021, VW Polo...</p>
                <input type="text" id="input-carro" class="quiz-input" placeholder="Modelo e Ano">
                <button class="btn-start-quiz" id="btn-prox-1">CONTINUAR</button>
                <div class="progress-dots"><div class="dot active"></div><div class="dot"></div><div class="dot"></div></div>
            </div>
        `;
        document.getElementById('btn-prox-1').onclick = () => {
            const val = document.getElementById('input-carro').value;
            if (val) { quizState.data.carro = val; avancarStep(); }
        };

    } else if (quizState.step === 2) {
        wrapper.innerHTML = `
            <div class="step-content">
                <h3 class="quiz-titulo">O que ele apresenta?</h3>
                <div class="quiz-options-grid">
                    <button class="quiz-option-btn" data-opt="Câmbio / Trancos">Câmbio / Trancos</button>
                    <button class="quiz-option-btn" data-opt="Injeção / Falha">Injeção / Falha</button>
                    <button class="quiz-option-btn" data-opt="Barulho / Suspensão">Barulho Estranho</button>
                    <button class="quiz-option-btn" data-opt="Revisão Periódica">Revisão Geral</button>
                </div>
                <div class="progress-dots"><div class="dot"></div><div class="dot active"></div><div class="dot"></div></div>
            </div>
        `;
        wrapper.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.onclick = () => { quizState.data.problema = btn.dataset.opt; avancarStep(); };
        });

    } else if (quizState.step === 3) {
        wrapper.innerHTML = `
            <div class="step-content">
                <h3 class="quiz-titulo">Seu nome para o atendimento</h3>
                <input type="text" id="input-nome" class="quiz-input" placeholder="Seu Nome">
                <button class="btn-start-quiz" id="btn-enviar">RECEBER PRÉ-ATENDIMENTO</button>
                <div class="progress-dots"><div class="dot"></div><div class="dot"></div><div class="dot active"></div></div>
            </div>
        `;
        document.getElementById('btn-enviar').onclick = () => {
            const val = document.getElementById('input-nome').value;
            if (val) { quizState.data.nome = val; finalizarQuiz(); }
        };

    } else if (quizState.step === 4) {
        wrapper.innerHTML = `
            <div class="step-content">
                <h3 class="quiz-titulo">Tudo pronto!</h3>
                <p class="quiz-desc">Redirecionando para o WhatsApp da Oficina - Ogeda Car Tech...</p>
                <div class="loader-simple"></div>
            </div>
        `;
    }
}

function avancarStep() { quizState.step++; renderizarQuiz(); }

function finalizarQuiz() {
    quizState.step++;
    renderizarQuiz();
    const { carro, problema, nome } = quizState.data;
    const phone = "5571981303232"; // Número real
    const text = `Olá! Me chamo *${nome}* e vim pelo site da oficina.\nTenho um *${carro}* apresentando: *${problema}*.\nGostaria de solicitar um orçamento.`;

    setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    }, 1200);
}

function injetarCSS() {
    const linkId = 'css-contato';
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = './modulos/contato/contato.css';
        document.head.appendChild(link);
    }
}