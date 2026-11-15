/* ===== CONFIGURAÇÃO (edite aqui) ===== */
const CONFIG = {
  wa: '5586994514128',                     // WhatsApp (86) 99451-4128
  insta: 'https://www.instagram.com/drajoyciane/',
  ga4: 'G-XXXXXXXXXX',                     // placeholder GA4
  pixel: 'XXXXXXXXXXXXXXX'                 // placeholder Meta Pixel
};
const AUTO_ENTER_MS = 3500;

const ROTEIROS = {
  adulto: [
    { k: 'incomodo', label: 'Dor ou incômodo', q: [
      'Desde quando o incômodo aparece e em que situação ele fica pior?',
      'O que posso fazer até a consulta para ficar mais confortável?',
      'Que exames ou radiografias antigas devo levar?',
      'Como funciona a avaliação e quanto tempo ela costuma levar?'] },
    { k: 'estetica', label: 'Estética do sorriso', q: [
      'O que me incomoda hoje no meu sorriso e o que eu gostaria de mudar?',
      'Que caminhos existem e o que cada um envolve?',
      'Tem algo que preciso cuidar antes, como gengiva ou limpeza?',
      'Quais são os limites e os cuidados de cada opção?',
      'Como é a manutenção depois?'] },
    { k: 'canal', label: 'Tratamento de canal', q: [
      'Como saber se o meu caso é de endodontia?',
      'Como é a avaliação e que exames são usados?',
      'Em geral, quantas consultas esse tipo de tratamento envolve?',
      'Como o conforto é cuidado durante o atendimento?',
      'Quais cuidados tomar depois?'] },
    { k: 'medo', label: 'Medo ou ansiedade', q: [
      'Posso conversar antes de marcar qualquer procedimento?',
      'Podemos combinar um sinal de pausa durante o atendimento?',
      'Que recursos de conforto existem no atendimento?',
      'Posso levar alguém comigo?',
      'Dá para começar só com conversa e exame?'] },
    { k: 'limpeza', label: 'Limpeza e prevenção', q: [
      'Com que frequência devo voltar para a limpeza?',
      'Minha técnica de escovação está adequada?',
      'Que escova e fio dental fazem sentido para mim?',
      'Como cuidar melhor da minha gengiva?'] },
    { k: 'extracao', label: 'Extração', q: [
      'Por que esse dente precisa ser avaliado para extração?',
      'Existem alternativas a avaliar antes?',
      'Como é o preparo e o cuidado depois?',
      'O que posso comer nos primeiros dias?',
      'E depois, como fica a reposição do dente?'] }
  ],
  crianca: [
    { k: 'primeira', label: 'Primeira consulta', q: [
      'Com que idade é bom levar a criança pela primeira vez?',
      'Como é a primeira consulta para ela se sentir à vontade?',
      'Posso ficar junto durante o atendimento?',
      'O que posso dizer para ela antes de ir?'] },
    { k: 'medo-c', label: 'Medo da criança', q: [
      'Como preparar meu filho ou minha filha para a consulta?',
      'O que devo evitar falar sobre dentista em casa?',
      'Dá para começar só conhecendo o consultório?',
      'Como lidar se ela chorar ou travar?'] },
    { k: 'leite', label: 'Dente de leite', q: [
      'Dente de leite também precisa de cuidado? Por quê?',
      'Quando costumam cair e o que observar?',
      'O que fazer se um dente de leite estiver escurecido?',
      'Como acompanhar a troca dos dentes?'] },
    { k: 'escova', label: 'Escovação em casa', q: [
      'Qual escova e qual quantidade de creme são adequadas para a idade?',
      'Como ensinar a técnica sem força?',
      'Quando a criança pode escovar sozinha?',
      'Com que frequência trocar a escova?'] },
    { k: 'batida', label: 'Queda ou batida', q: [
      'O que observar depois de uma batida na boca?',
      'O que fazer até chegar à consulta?',
      'Que sinais pedem avaliação mais rápida?',
      'Devo levar algum registro do que aconteceu?'] },
    { k: 'habitos', label: 'Chupeta e hábitos', q: [
      'Chupeta e dedo na boca interferem nos dentes?',
      'Até que idade esses hábitos costumam ser acompanhados?',
      'Como ajudar a criança a largar sem sofrimento?',
      'Preciso de alguma avaliação específica?'] }
  ]
};

const CAPS = [
  { id: 'canal', t: ['Canal', ''], icon: 'canal', blocks: [
    ['O que é', 'O tratamento de canal cuida do interior do dente, a parte que fica por dentro do esmalte, quando ela está inflamada ou infectada. A Dra. Joyciane é endodontista, a especialidade dedicada a essa área.'],
    ['Quando entra na conversa', 'A indicação sempre depende de exame e avaliação. Dor, sensibilidade e dente escurecido são motivos para conversar, mas só a consulta diz o que fazer.']],
    img: ['img/26-equipamentos-endo.jpg', 'Equipamentos de endodontia: radiografia digital, localizador apical e motor endodôntico'], msg: 'Quero conversar sobre canal (endodontia).' },
  { id: 'pediatria', t: ['Pedia', 'tria'], icon: 'pediatria', blocks: [
    ['Como é', 'A consulta infantil tem conversa e ritmo próprios. A criança conhece o espaço, entende o que vai acontecer e o responsável acompanha cada passo.'],
    ['Para levar', 'Conte como é a rotina de escovação, se há medo e o que a criança já ouviu sobre dentista. Isso ajuda a preparar o primeiro encontro.']],
    msg: 'Quero agendar uma consulta para meu filho(a).' },
  { id: 'gengivoplastia', t: ['Gengivo', 'plastia'], icon: 'gengivoplastia', blocks: [
    ['O que é', 'É um procedimento que ajusta o contorno da gengiva. Em alguns casos ele é considerado depois de uma avaliação do sorriso e da saúde da gengiva.'],
    ['Para levar', 'O que incomoda hoje, se há sensibilidade ou sangramento e quais alternativas existem. A decisão é sempre tomada em consulta.']],
    msg: 'Quero conversar sobre gengivoplastia.' },
  { id: 'extracao', t: ['Extra', 'ção'], icon: 'extracao', blocks: [
    ['O que é', 'É a remoção de um dente quando, depois de avaliação, ela é a melhor saída. Antes disso, são conversadas as alternativas possíveis para o seu caso.'],
    ['Para levar', 'Pergunte sobre o preparo, o conforto durante o atendimento, o cuidado nos primeiros dias e como fica a reposição depois.']],
    msg: 'Quero conversar sobre extração de dente.' },
  { id: 'clareamento', t: ['Clarea', 'mento'], icon: 'clareamento', blocks: [
    ['O que é', 'É um tratamento que busca deixar os dentes mais claros. Existem formas diferentes de fazer, e cada uma tem indicações e limites.'],
    ['Antes de tudo', 'É preciso avaliar a saúde dos dentes e da gengiva, porque nem todo mundo pode ou deve clarear. Por isso a conversa vem primeiro.']],
    msg: 'Quero conversar sobre clareamento.' },
  { id: 'limpeza', t: ['Lim', 'peza'], icon: 'limpeza', blocks: [
    ['O que é', 'A limpeza remove placa e tártaro que a escovação em casa não alcança. Com que frequência voltar é definido na consulta.'],
    ['Dicas da doutora', 'Escovar com suavidade, trocar a escova quando as cerdas deformam e dar mais atenção à técnica do que à força.']],
    cards: ['img/34-educ-escova-01.jpg', 'img/35-educ-escovar-forca.jpg', 'img/36-educ-escova-velha.jpg', 'img/37-educ-nota.jpg', 'img/38-educ-dica-dentista.jpg', 'img/39-educ-escova-envelhece.jpg'], msg: 'Quero marcar uma limpeza.' },
  { id: 'perguntas', t: ['Per', 'guntas'], icon: 'feedbacks', title: 'O que as pessoas perguntam', qa: [
    ['A Dra. Joyciane atende crianças?', 'Sim. Ela atende adultos e crianças.'],
    ['O que faz um endodontista?', 'É o dentista especialista no interior do dente, como o tratamento de canal.'],
    ['Tenho medo de dentista. Posso conversar antes?', 'Pode. Conte o que pesa pelo WhatsApp antes de marcar e a conversa acontece sem pressa.'],
    ['Preciso ir só quando sinto dor?', 'Não. Muitos problemas começam sem dor, então a avaliação de rotina também vale.'],
    ['Como agendo?', 'Pelo WhatsApp (86) 99451-4128.']],
    msg: 'Tenho uma pergunta antes de agendar.' }
];

const MITOS = [
  { q: ['Escovar com ', 'mais força', ' limpa melhor.'], a: 'mito', why: 'A força não remove mais placa. Pode machucar a gengiva e desgastar o esmalte. Movimentos suaves funcionam melhor.' },
  { q: ['Escova velha ', 'ainda limpa', ' bem.'], a: 'mito', why: 'Cerdas deformadas limpam pior. A dica é trocar a escova a cada 3 meses ou antes, se ela estiver torta.' },
  { q: ['Técnica importa ', 'mais que força', ' na escovação.'], a: 'verdade', why: 'É isso mesmo. Movimentos suaves e bem feitos fazem mais pelo seu sorriso do que pressão.' },
  { q: ['Se não dói, ', 'não preciso', ' de dentista.'], a: 'mito', why: 'Muitos problemas começam sem sintoma. A avaliação de rotina ajuda a perceber cedo.' },
  { q: ['Levar a criança ', 'antes de ter problema', ' ajuda.'], a: 'verdade', why: 'Uma primeira consulta tranquila, só para conhecer, ajuda a criança a criar confiança.' },
  { q: ['Clareamento serve ', 'para todo mundo', ' sem avaliação.'], a: 'mito', why: 'Antes de clarear é preciso avaliar dentes e gengiva. Nem todo caso é adequado.' }
];

const MEDOS = {
  medo: ['Medo', 'Medo é muito comum e você não precisa vencê-lo sozinho. Dá para conversar antes, entender cada passo e combinar um sinal de pausa. Sedação, quando indicada, é um recurso para deixar o procedimento mais confortável. Ela não é para todos e só é decidida após avaliação. Conte pelo WhatsApp como você se sente.'],
  trauma: ['Trauma', 'Se uma experiência antiga deixou marcas, ela merece ser ouvida. Dá para começar só com uma conversa e o exame, sem pressa. Quanto mais você contar, mais o atendimento se adapta a você.'],
  ansiedade: ['Ansiedade', 'Ansiedade antes da consulta é frequente. Explicar cada passo e combinar pausas ajuda. Em alguns casos existe a sedação, que só entra se for indicada por profissional habilitado depois de avaliação. Pergunte pelo WhatsApp o que está disponível.'],
  vergonha: ['Vergonha', 'Vergonha do sorriso ou do estado da boca é mais comum do que parece, e aqui ninguém chega para ser julgado. A conversa começa por onde você se sentir à vontade.'],
  demora: ['Demora em procurar', 'Adiar acontece com muita gente. O primeiro passo pode ser pequeno: uma conversa e uma avaliação para entender onde você está, sem culpa. Quando quiser, é só chamar.']
};

/* ===== utilidades ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
window.dataLayer = window.dataLayer || [];
function track(name, params = {}) {
  window.dataLayer.push({ event: name, ...params });
  if (window.fbq) window.fbq('trackCustom', name, params);
  if (window.gtag) window.gtag('event', name, params);
}
const waLink = msg => `https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(msg)}`;
function bindWa(root = document) {
  $$('[data-wa]', root).forEach(a => {
    a.href = waLink(a.dataset.wa);
    a.target = '_blank'; a.rel = 'noopener';
    if (!a._b) { a._b = 1; a.addEventListener('click', () => track('whatsapp_click', { origem: a.closest('section')?.id || 'extra' })); }
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
function iconSvg(name) { return `<svg viewBox="0 0 100 100" aria-hidden="true">${ICONS[name]}</svg>`; }
$$('svg[data-ph]').forEach(s => s.innerHTML = PH[s.dataset.ph]);

/* ===== palavras do título ===== */
function splitWords(el) {
  let i = 0;
  (function walk(n) {
    [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.append(' '); return; }
          const s = document.createElement('span'); s.className = 'w'; s.style.setProperty('--i', i++); s.textContent = p; frag.append(s);
        });
        n.replaceChild(frag, c);
      } else if (c.nodeType === 1) walk(c);
    });
  })(el);
}
$$('.t').forEach(splitWords);

/* ===== entradas variadas ===== */
$$('.sec').forEach(sec => {
  $$('.rv', sec).forEach((el, i) => { if (!el.classList.contains('t')) { const v = ['', 'v2', 'v3', 'v4'][i % 4]; if (v) el.classList.add(v); }; });
});
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
$$('.rv').forEach(el => io.observe(el));

/* ===== casos (preencher com os casos reais autorizados) ===== */
/* cada item: { img:'img/caso-xx.jpg', cap:'legenda curta' } */
const CASOS = { canal: [], pediatria: [], gengivoplastia: [], extracao: [], clareamento: [], limpeza: [], perguntas: [] };

/* ===== portas em barras (acordeão) ===== */
const bars = $('#bars');
const nCasos = c => (CASOS[c.id] || []).length;
CAPS.forEach((c, i) => {
  const el = document.createElement('article');
  el.className = 'bar'; el.id = 'cap-' + c.id; el.style.setProperty('--d', (i * .6) + 's');
  const nome = c.title ? `<span style="font-weight:300">perg</span><b>untas</b>` : `<span style="font-weight:300">${c.t[0].toLowerCase()}</span><b>${c.t[1]}</b>`;
  const n = nCasos(c);
  const count = c.id === 'perguntas' ? (c.qa.length + ' perguntas') : (n ? n + (n > 1 ? ' casos' : ' caso') : 'em breve');
  let body = '';
  if (n) body += `<h4>Casos da Dra. Joyciane</h4><div class="cases">${CASOS[c.id].map(k => `<figure class="case"><img src="${k.img}" alt="${k.cap || 'Caso atendido pela Dra. Joyciane'}" loading="lazy" decoding="async"><figcaption>${k.cap || ''}</figcaption></figure>`).join('')}</div><p class="disc">Resultados variam de pessoa para pessoa. Cada caso é avaliado individualmente.</p>`;
  if (c.blocks) body += c.blocks.map(b => `<h4>${b[0]}</h4><p>${b[1]}</p>`).join('');
  if (c.qa) body += `<dl class="qa">${c.qa.map(q => `<div><dt>${q[0]}</dt><dd>${q[1]}</dd></div>`).join('')}</dl>`;
  if (c.img) body += `<img src="${c.img[0]}" alt="${c.img[1]}" loading="lazy" decoding="async">`;
  if (c.cards) body += `<div class="cardrow">${c.cards.map(x => `<img src="${x}" alt="Dica de saúde bucal da Dra. Joyciane" loading="lazy" decoding="async">`).join('')}</div>`;
  body += `<a class="btn main" href="#" data-wa="Olá, Dra. Joyciane! ${c.msg}"><svg viewBox="0 0 256 256" data-ph="whatsapp-logo"></svg><span>Conversar pelo WhatsApp</span><i class="shine"></i></a>`;
  el.innerHTML = `<button class="bar-h" type="button" aria-expanded="false"><i class="shine"></i><span class="ic">${iconSvg(c.icon)}</span><h3>${nome}</h3><span class="count">${count}</span><span class="plus"></span></button><div class="bar-b"><div class="bar-in"><div class="bar-c">${body}</div></div></div>`;
  bars.append(el);
  $$('.ic svg path,.ic svg circle,.ic svg line,.ic svg ellipse,.ic svg rect,.ic svg polyline', el).forEach(p => { p.setAttribute('pathLength', 1); p.classList.add('dr'); });
  $$('svg[data-ph]', el).forEach(x => x.innerHTML = PH[x.dataset.ph]);
  const h = $('.bar-h', el);
  h.addEventListener('click', e => {
    const r = h.getBoundingClientRect(), rp = document.createElement('i');
    const d = Math.max(r.width, r.height) * 1.6; rp.className = 'ripple';
    rp.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    h.append(rp); setTimeout(() => rp.remove(), 800);
    toggleBar(el, c.id);
  });
});
function setBar(el, open) { el.classList.toggle('open', open); $('.bar-h', el).setAttribute('aria-expanded', open); }
function toggleBar(el, id) {
  const open = !el.classList.contains('open');
  $$('.bar.open').forEach(o => { if (o !== el) setBar(o, false); });
  setBar(el, open);
  if (open) { track('porta_' + id); setTimeout(() => el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }), 120); }
}
bindWa();

/* ===== roteiro de conversa ===== */
let who = 'adulto', topic = null;
const seg = $('#whoSeg'), chipsEl = $('#topicChips'), roteiro = $('#roteiro');
function renderChips() {
  chipsEl.innerHTML = '';
  ROTEIROS[who].forEach(t => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'chip-b'; b.textContent = t.label; b.dataset.k = t.k;
    b.addEventListener('click', () => { topic = t.k; $$('.chip-b', chipsEl).forEach(x => x.classList.toggle('on', x === b)); renderRoteiro(); });
    chipsEl.append(b);
  });
}
function renderRoteiro() {
  const t = ROTEIROS[who].find(x => x.k === topic);
  if (!t) { roteiro.innerHTML = '<div class="r-empty">Escolha um assunto para montar o seu roteiro.</div>'; return; }
  const quem = who === 'adulto' ? 'minha consulta' : 'a consulta do meu filho(a)';
  const msg = `Olá, Dra. Joyciane! Quero marcar ${quem}. O assunto é: ${t.label.toLowerCase()}.`;
  roteiro.innerHTML = `<h3 class="r-h"><span style="font-weight:300">Seu roteiro</span> <b>de conversa</b></h3><div class="r-sub">${who === 'adulto' ? 'Adulto' : 'Criança'} · ${t.label}</div><ul class="r-list">${t.q.map((q, i) => `<li style="animation-delay:${i * .12}s"><i>${i + 1}</i><span>${q}</span></li>`).join('')}</ul><a class="btn main" href="#" data-wa="${msg}"><svg viewBox="0 0 256 256" data-ph="whatsapp-logo"></svg><span>Levar para o WhatsApp</span><i class="shine"></i></a>`;
  $$('svg[data-ph]', roteiro).forEach(s => s.innerHTML = PH[s.dataset.ph]);
  const a = $('a', roteiro); bindWa(roteiro);
  a.addEventListener('click', () => track('roteiro_concluido', { publico: who, assunto: t.k }));
}
$$('button', seg).forEach(b => b.addEventListener('click', () => {
  who = b.dataset.who; seg.dataset.who = who; topic = null;
  $$('button', seg).forEach(x => x.setAttribute('aria-selected', x === b));
  renderChips(); renderRoteiro();
}));
renderChips();

/* ===== pace do sorriso ===== */
const route = $('#route'), svgR = $('#routeSvg'), base = $('#routeBase'), fill = $('#routeFill'), runner = $('#runner');
const kms = $$('.km');
let pts = [], mLen = [], totalLen = 0, markers = [];
function layoutRoute() {
  const H = route.offsetHeight; svgR.setAttribute('height', H); svgR.setAttribute('viewBox', `0 0 64 ${H}`);
  pts = kms.map((k, i) => ({ x: i % 2 ? 40 : 20, y: k.offsetTop + 34 }));
  let d = `M 30 0 L ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], m = (a.y + b.y) / 2; d += ` C ${a.x} ${m}, ${b.x} ${m}, ${b.x} ${b.y}`; }
  const last = pts[pts.length - 1]; d += ` C ${last.x} ${last.y + 40}, 30 ${H - 30}, 30 ${H}`;
  base.setAttribute('d', d); fill.setAttribute('d', d);
  totalLen = fill.getTotalLength(); fill.style.strokeDasharray = totalLen;
  mLen = pts.map(p => { let lo = 0, hi = totalLen; for (let i = 0; i < 22; i++) { const m = (lo + hi) / 2; fillPt(m).y < p.y ? lo = m : hi = m; } return lo; });
  markers.forEach(m => m.remove()); markers = [];
  pts.forEach(p => { const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.setAttribute('cx', p.x); c.setAttribute('cy', p.y); c.setAttribute('r', 9); c.setAttribute('fill', '#841C3C'); c.setAttribute('stroke', '#E6CCAB'); c.setAttribute('stroke-width', 3); svgR.insertBefore(c, runner); markers.push(c); });
  updateRoute();
}
const fillPt = l => fill.getPointAtLength(l);
function updateRoute() {
  if (!totalLen) return;
  const r = route.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * .62 - r.top) / r.height));
  const l = p * totalLen, pt = fillPt(l);
  fill.style.strokeDashoffset = totalLen - l;
  runner.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
  kms.forEach((k, i) => { const on = l >= mLen[i] - 6; k.classList.toggle('open', on); if (markers[i]) markers[i].setAttribute('fill', on ? '#E6CCAB' : '#841C3C'); });
}

/* ===== mito ou verdade ===== */
const stack = $('#deckStack'), end = $('#deckEnd'), scoreEl = $('#score'), btns = $('#deckBtns');
let mi = 0, hits = 0, busy = false;
function renderDeck() {
  stack.innerHTML = '';
  MITOS.slice(mi).slice(0, 2).reverse().forEach((m, k, arr) => {
    const c = document.createElement('div'); c.className = 'mcard';
    const top = k === arr.length - 1;
    c.style.transform = top ? '' : 'scale(.94) translateY(14px)'; c.style.opacity = top ? 1 : .7;
    c.innerHTML = `<span class="stamp st-m">Mito</span><span class="stamp st-v">Verdade</span><span class="tag"></span><div class="q"><span style="font-weight:300">${m.q[0]}</span><b>${m.q[1]}</b><span style="font-weight:300">${m.q[2]}</span></div><p class="why">${m.why}</p>`;
    stack.append(c); if (top) dragify(c, m);
  });
}
function dragify(c, m) {
  let sx = 0, dx = 0, on = false;
  c.addEventListener('pointerdown', e => { if (busy) return; on = true; sx = e.clientX; c.style.transition = 'none'; c.setPointerCapture(e.pointerId); });
  c.addEventListener('pointermove', e => {
    if (!on) return; dx = e.clientX - sx;
    c.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
    $('.st-m', c).style.opacity = Math.min(1, Math.max(0, -dx / 80)); $('.st-v', c).style.opacity = Math.min(1, Math.max(0, dx / 80));
  });
  const up = () => { if (!on) return; on = false; c.style.transition = ''; if (Math.abs(dx) > 90) answer(dx < 0 ? 'mito' : 'verdade', dx < 0 ? -1 : 1); else { c.style.transform = ''; $$('.stamp', c).forEach(s => s.style.opacity = 0); } dx = 0; };
  c.addEventListener('pointerup', up); c.addEventListener('pointercancel', up);
}
async function answer(a, dir) {
  if (busy) return; busy = true;
  const m = MITOS[mi], c = $('.mcard:last-child', stack), ok = a === m.a;
  if (ok) hits++;
  $('.tag', c).textContent = ok ? `Acertou: é ${m.a}` : `Quase: é ${m.a}`;
  c.style.transform = ''; $$('.stamp', c).forEach(s => s.style.opacity = 0); c.classList.add('rev');
  scoreEl.textContent = `Acertos: ${hits} de ${mi + 1}`;
  await sleep(2800);
  c.style.transform = `translateX(${dir * 120}%) rotate(${dir * 18}deg)`; c.style.opacity = 0;
  await sleep(420); mi++; busy = false;
  if (mi >= MITOS.length) finishDeck(); else renderDeck();
}
function finishDeck() {
  stack.innerHTML = ''; btns.style.display = 'none';
  end.hidden = false;
  end.innerHTML = `<h3 class="r-h"><span style="font-weight:300">Você acertou</span> <b>${hits} de ${MITOS.length}</b></h3><p style="margin-top:8px">Dúvida é normal, e é para isso que serve a conversa. Quer falar com a Dra. Joyciane?</p><a class="btn main" href="#" data-wa="Olá, Dra. Joyciane! Fiz o Mito ou Verdade no seu link e queria conversar."><svg viewBox="0 0 256 256" data-ph="whatsapp-logo"></svg><span>Conversar no WhatsApp</span><i class="shine"></i></a>`;
  $$('svg[data-ph]', end).forEach(s => s.innerHTML = PH[s.dataset.ph]); bindWa(end);
  track('mito_verdade_concluido', { acertos: hits });
}
$$('[data-ans]', btns).forEach(b => b.addEventListener('click', () => answer(b.dataset.ans, b.dataset.ans === 'mito' ? -1 : 1)));
renderDeck();

/* ===== tira-medo ===== */
const chat = $('#chat'), fearChips = $('#fearChips'), fearAll = $('#fearAll');
let typingBusy = false;
Object.entries(MEDOS).forEach(([k, [label, txt]]) => {
  const b = document.createElement('button'); b.type = 'button'; b.className = 'chip-b'; b.textContent = label;
  b.addEventListener('click', () => ask(k, b)); fearChips.append(b);
  fearAll.insertAdjacentHTML('beforeend', `<h3>${label}</h3><p>${txt}</p>`);
});
async function ask(k, btn) {
  if (typingBusy) return; typingBusy = true;
  $$('.chip-b', fearChips).forEach(x => x.classList.toggle('on', x === btn));
  const [label, txt] = MEDOS[k];
  chat.innerHTML = '';
  chat.insertAdjacentHTML('beforeend', `<div class="msg me">O que mais pesa: ${label.toLowerCase()}</div>`);
  const row = document.createElement('div'); row.className = 'row';
  row.innerHTML = `<span class="av">${iconSvg('sorriso')}</span><div class="msg bot typing"><i></i><i></i><i></i></div>`;
  await sleep(500); chat.append(row);
  await sleep(1100);
  const bub = $('.msg', row); bub.className = 'msg bot'; bub.textContent = '';
  for (let i = 0; i < txt.length; i++) { bub.textContent += txt[i]; await sleep(reduce ? 0 : 16); }
  chat.insertAdjacentHTML('beforeend', `<a class="btn main" href="#" data-wa="Olá, Dra. Joyciane! Estou com ${label.toLowerCase()} e queria conversar antes de marcar."><svg viewBox="0 0 256 256" data-ph="whatsapp-logo"></svg><span>Contar pelo WhatsApp</span><i class="shine"></i></a>`);
  $$('svg[data-ph]', chat).forEach(s => s.innerHTML = PH[s.dataset.ph]); bindWa(chat);
  track('tira_medo_usado', { tema: k });
  typingBusy = false;
}

/* ===== faixas da doutora ===== */
const S1 = ['01-corrida-ponte', '02-corrida-torre', '04-10k-danca', '05-10k-bandeira-sentada', '06-10k-medalha-bandeira', '07-10k-medalha-selfie', '18-corrida-4358-a', '19-corrida-4358-b', '29-corrida-rosa-a', '33-10k-pulo', '20-trofeu-bpm', '03-corrida-parque'];
const S2 = ['08-saojoao-retrato-jaqueta', '17-retrato-buque', '12-retrato-azul-festa', '15-rockinrio-grama', '14-rockinrio-logo', '10-saojoao-vestido-vinho', '21-viagem-mar-a', '22-viagem-praia', '23-viagem-mar-b', '31-10k-placa', '09-saojoao-noite', '16-rockinrio-sentada'];
[['#trk1', S1], ['#trk2', S2]].forEach(([sel, list]) => { $(sel).innerHTML = [...list, ...list].map(n => `<img src="img/t/${n}.jpg" alt="" loading="lazy" decoding="async">`).join(''); });

/* ===== menu, progresso, seção atual ===== */
const secs = $$('.sec, #consulta'), links = $$('.menu a'), prog = $('#prog');
let cur = 'inicio';
function onScroll() {
  const mid = innerHeight * .4; let found = secs[0];
  secs.forEach(s => { const r = s.getBoundingClientRect(); if (r.top <= mid) found = s; });
  const n = found.dataset.name;
  if (n !== cur) { cur = n; links.forEach(a => a.classList.toggle('on', a.dataset.s === n)); }
  prog.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
  updateRoute();
}
links.forEach(a => a.addEventListener('click', e => { e.preventDefault(); $('#' + a.dataset.s).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }));
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { layoutRoute(); onScroll(); });
links[0].classList.add('on');
if (document.fonts) document.fonts.ready.then(() => { layoutRoute(); onScroll(); });
addEventListener('load', () => { layoutRoute(); onScroll(); });
layoutRoute(); onScroll();

/* ===== brilho de esmalte (partículas) ===== */
(function sparkles() {
  if (reduce) return;
  const cv = $('#sparkle'), cx = cv.getContext('2d'); let W, H, ps = [];
  const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
  rs(); addEventListener('resize', rs);
  for (let i = 0; i < 26; i++) ps.push({ x: Math.random() * 1000, y: Math.random() * 1000, r: .8 + Math.random() * 1.8, v: .15 + Math.random() * .35, p: Math.random() * 6 });
  let last = 0;
  (function f(t) {
    if (t - last > 33) {
      last = t; cx.clearRect(0, 0, W, H);
      ps.forEach(p => {
        p.y -= p.v; p.p += .04; if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        const px = p.x % W, a = .25 + .35 * Math.abs(Math.sin(p.p));
        cx.fillStyle = `rgba(247,237,223,${a})`; cx.beginPath(); cx.arc(px, p.y, p.r, 0, 6.3); cx.fill();
        cx.strokeStyle = `rgba(247,237,223,${a * .6})`; cx.lineWidth = .7; cx.beginPath(); cx.moveTo(px - p.r * 3, p.y); cx.lineTo(px + p.r * 3, p.y); cx.moveTo(px, p.y - p.r * 3); cx.lineTo(px, p.y + p.r * 3); cx.stroke();
      });
    }
    requestAnimationFrame(f);
  })(0);
})();

/* ===== entrada animada + vida na home ===== */
requestAnimationFrame(() => requestAnimationFrame(() => { document.body.classList.add('ready'); setTimeout(() => document.body.classList.add('go'), 150); }));
(function heroLife() {
  const ph = $('#photo'), im = $('#photo img'); if (!ph) return;
  if (!reduce) addEventListener('scroll', () => { const y = Math.min(scrollY, 600); ph.style.translate = `0 ${y * .18}px`; }, { passive: true });
  ph.addEventListener('click', e => {
    track('foto_toque');
    for (let i = 0; i < 10; i++) {
      const s = document.createElement('i'); s.className = 'spk';
      const a = Math.random() * 6.28, d = 30 + Math.random() * 50;
      s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px`;
      document.body.append(s); setTimeout(() => s.remove(), 900);
    }
  });
})();
