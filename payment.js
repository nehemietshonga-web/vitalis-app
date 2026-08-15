// VITALIS — Module paiement
// Les coordonnées de paiement seront récupérées depuis la configuration
// de l'application et ne sont pas stockées dans ce fichier.

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
function renderIllicocashPayment(containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const config = getVitalisPaymentConfig();

  container.innerHTML = `
    <div class="vitalis-payment-box">
      <h3>📱 Paiement illicocash</h3>

      <p>
        Effectuez votre paiement en USD au numéro :
      </p>

      <strong>${config.recipientPhone}</strong>

      <p>
        Titulaire : ${config.recipientName}<br>
        Devise : ${config.currency}
      </p>

      <p>
        ⏳ Statut : <strong>En attente</strong>
      </p>

      <label for="vitalis-payment-proof">
        📎 Ajouter ma preuve de paiement
      </label>

      <input
        type="file"
        id="vitalis-payment-proof"
        accept="image/*,.pdf"
      >
    </div>
  `;
  amountInput.parentElement.appendChild(box);

}

const vitalisPaymentObserver = new MutationObserver(() => {
  initVitalisIllicocash();
});

vitalisPaymentObserver.observe(document.body, {
  childList: true,
  subtree: true
});

initVitalisIllicocash();

