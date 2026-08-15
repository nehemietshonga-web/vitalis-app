// VITALIS — Module paiement
// Les coordonnées de paiement seront récupérées depuis la configuration
// de l'application et ne sont pas stockées dans ce fichier.

const VITALIS_PAYMENT_CONFIG = {
  method: "Illicocash",
  currency: "USD",
  bucket: "payment-proofs"
};

function getVitalisPaymentConfig() {
  return VITALIS_PAYMENT_CONFIG;
}
