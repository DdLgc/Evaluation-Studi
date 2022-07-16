alert('Ceci est mon premier site, soyez indulgent' )



const btn = document.querySelector("button.event")
const texte = document.getElementById("paragraphe")
function afficherNom() {
  
  texte.innerHTML = "John"
}
btn.addEventListener("click", afficherNom)

