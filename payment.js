// VITALIS — Module paiement illicocash
// Ce fichier ne modifie pas l'application tant qu'il n'est pas chargé par index.html.

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
