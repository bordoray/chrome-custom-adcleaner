// content.js

// Fonction pour masquer les divs de la classe OutbrainAd
function hideOutbrainAds() {
  const ads = document.querySelectorAll('div.OutbrainAd');
  ads.forEach(ad => {
    ad.style.display = 'none';
  });
}

// Appel de la fonction au chargement du DOM
window.onload = hideOutbrainAds;

setInterval(hideOutbrainAds, 1000);
