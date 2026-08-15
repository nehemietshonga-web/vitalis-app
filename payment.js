// VITALIS — Paiement illicocash

const VITALIS_PAYMENT_CONFIG = {
  method: "Illicocash",
  currency: "USD",
  recipientName: "Wasinga Mukeyina",
  recipientPhone: "+243 89 06 90 712",
  bucket: "payment-proofs"
};

function getVitalisPaymentConfig() {
  return VITALIS_PAYMENT_CONFIG;
}

function initVitalisIllicocash() {
  const amountInput = document.getElementById("f-payment-amount");

  if (!amountInput) return;

  if (document.getElementById("vitalis-illicocash-box")) return;

  const config = getVitalisPaymentConfig();

  const box = document.createElement("div");

  box.id = "vitalis-illicocash-box";

  box.style.cssText = `
    margin-top:16px;
    padding:16px;
    border-radius:14px;
    background:#f7f8fa;
    border:1px solid #e2e5e9;
  `;

  box.innerHTML = `
    <h3 style="margin-top:0;">
      📱 Paiement illicocash
    </h3>

    <p>
      Effectuez votre paiement en
      <strong>${config.currency}</strong>
      au numéro :
    </p>

    <div style="
      font-size:20px;
      font-weight:700;
      margin:10px 0;
    ">
      ${config.recipientPhone}
    </div>

    <p>
      Titulaire :
      <strong>${config.recipientName}</strong>
    </p>

    <p>
      ⏳ Statut :
      <strong>En attente</strong>
    </p>

    <label
      for="vitalis-payment-proof"
      style="
        display:block;
        margin:14px 0 8px;
        font-weight:600;
      "
    >
      📎 Ajouter ma preuve de paiement
    </label>

    <input
      type="file"
      id="vitalis-payment-proof"
      accept="image/*,.pdf"
    >
  `;

  amountInput.parentElement.appendChild(box);
}

function startVitalisPayment() {
  initVitalisIllicocash();

  const observer = new MutationObserver(() => {
    initVitalisIllicocash();
  });

  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  setInterval(() => {
    initVitalisIllicocash();
  }, 1000);
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    startVitalisPayment
  );
} else {
  startVitalisPayment();
}
