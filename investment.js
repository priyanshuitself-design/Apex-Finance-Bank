// ── Date/time in topbar ──
function updateTime() {
    const now = new Date();
    const opts = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('en-IN', opts);
}
updateTime();

// ── Toggle calculator panel ──
function toggleCalc(id, btn) {
    const panel = document.getElementById(id);
    const isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    btn.textContent = isOpen ? 'Open Calculator' : 'Close Calculator';
}

// ── Format as INR ──
function fmt(n) {
    return '₹' + Math.round(n).toLocaleString('en-IN');
}

// ── Ratio bar update ──
function updateBar(pId, iId, principal, interest) {
    const total = principal + interest;
    document.getElementById(pId).style.width = ((principal / total) * 100) + '%';
    document.getElementById(iId).style.width = ((interest  / total) * 100) + '%';
}

// ── FD: A = P(1 + r/4)^(4n) ──
function calcFD() {
    const P      = parseFloat(document.getElementById('fd-principal').value);
    const r      = parseFloat(document.getElementById('fd-rate').value) / 100;
    const months = parseFloat(document.getElementById('fd-months').value);
    if (!P || !r || !months || P <= 0 || r <= 0 || months <= 0) {
        alert('Please fill all fields with valid values.'); return;
    }
    const A        = P * Math.pow(1 + r / 4, 4 * (months / 12));
    const interest = A - P;
    document.getElementById('fd-res-principal').textContent = fmt(P);
    document.getElementById('fd-res-interest').textContent  = fmt(interest);
    document.getElementById('fd-res-maturity').textContent  = fmt(A);
    document.getElementById('fd-result').classList.add('show');
    updateBar('fd-bar-p', 'fd-bar-i', P, interest);
}

// ── RD: Standard Indian bank quarterly formula ──
function calcRD() {
    const R      = parseFloat(document.getElementById('rd-monthly').value);
    const rate   = parseFloat(document.getElementById('rd-rate').value) / 100;
    const months = parseFloat(document.getElementById('rd-months').value);
    if (!R || !rate || !months || R <= 0 || rate <= 0 || months <= 0) {
        alert('Please fill all fields with valid values.'); return;
    }
    const i        = rate / 4;
    const n        = months / 3;
    const maturity = R * (Math.pow(1 + i, n) - 1) / (1 - Math.pow(1 + i, -1 / 3));
    const invested = R * months;
    const interest = maturity - invested;
    document.getElementById('rd-res-invested').textContent  = fmt(invested);
    document.getElementById('rd-res-interest').textContent  = fmt(interest);
    document.getElementById('rd-res-maturity').textContent  = fmt(maturity);
    document.getElementById('rd-result').classList.add('show');
    updateBar('rd-bar-p', 'rd-bar-i', invested, interest);
}