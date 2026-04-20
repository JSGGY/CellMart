/* ---- Shared components ---- */
function renderBanner() {
  return '<div class="banner" style="background:var(--primary); animation:none">🔒 Conexión segura: Tus datos están protegidos con cifrado de extremo a extremo.</div>';
}

function renderHiddenNav() {
  return `
    <div class="hidden-trigger" id="hiddenTrigger">•</div>
    <nav class="hidden-nav" id="hiddenNav">
      <p>Navegación</p>
      <a href="index.html">⏻ Inicio</a>
      <a href="register.html">💾 Soporte</a>
      <a href="checkout.html">🗑 Mi Carrito</a>
    </nav>`;
}

function renderModal() {
  return `
    <div class="modal-overlay" id="errorModal">
      <div class="modal">
        <h3 id="modalTitle" style="color:var(--foreground)">Información incompleta</h3>
        <p id="modalDesc">Por favor, revisa que todos los campos requeridos estén llenos adecuadamente.</p>
        <button onclick="closeModal()">Entendido</button>
      </div>
    </div>`;
}
function openModal(title = "Información incompleta", desc = "Por favor, revisa que todos los campos requeridos estén llenos y vuelve a intentarlo.") { 
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('errorModal').classList.add('open'); 
}
function closeModal() { document.getElementById('errorModal').classList.remove('open'); }

function renderFooter() {
  return `<footer>
    <p class="playfair" style="font-size:14px;font-weight:600">CellMart</p>
    <p style="font-size:12px;color:var(--muted-foreground);margin-top:8px">© 2026 CellMart. Todos los derechos reservados.</p>
    <div class="links"><span>Términos y condiciones</span><span>Política de privacidad</span><span>Contacto</span></div>
  </footer>`;
}

/* Hidden nav logic */
let triggerClicks = 0, triggerTimer = null;
document.addEventListener('click', e => {
  if (e.target.id === 'hiddenTrigger') {
    triggerClicks++;
    clearTimeout(triggerTimer);
    triggerTimer = setTimeout(() => { triggerClicks = 0; }, 800);
    if (triggerClicks >= 3) {
      document.getElementById('hiddenNav').classList.toggle('visible');
      triggerClicks = 0;
    }
  }
});

/* Evasive button */
function createEvasiveButton(container, onAdd, label) {
  let evadeCount = 0;
  const btn = document.createElement('button');
  btn.className = 'evasive-btn';
  btn.innerHTML = '🗑 ' + (label || 'Añadir al carrito');
  btn.style.transition = 'transform .15s';
  btn.addEventListener('mouseenter', () => {
    if (evadeCount < 3) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 100;
      btn.style.transform = `translate(${x}px, ${y}px)`;
      evadeCount++;
    }
  });
  btn.addEventListener('click', () => {
    if (evadeCount >= 3) { onAdd(); evadeCount = 0; btn.style.transform = 'translate(0,0)'; }
  });
  container.appendChild(btn);
}

/* Toast */
function showToast(title, desc) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 20px;box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:200;font-size:14px;max-width:320px;';
  t.innerHTML = `<strong>${title}</strong><br><span style="font-size:12px;color:var(--muted-foreground)">${desc}</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

/* Toast */
function showToast(title, desc) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 20px;box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:200;font-size:14px;max-width:320px;';
  t.innerHTML = `<strong>${title}</strong><br><span style="font-size:12px;color:var(--muted-foreground)">${desc}</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
