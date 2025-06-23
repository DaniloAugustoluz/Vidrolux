/* Modal página de serviços */

const modal = document.getElementById("modal");
const openButton = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});



/*  COMPONENTE CARD RESIDENCIAL   */
const openCardResidencial = document.getElementById("residencial");
const cardResidencial = document.getElementById("card__residencial");

openCardResidencial.addEventListener("click", () => {
    cardResidencial.style.display = "flex";
    cardComercial.style.display = "none";
});

/*  COMPONENTE CARD COMERCIAL   */
const openCardComercial = document.getElementById("comercial");
const cardComercial = document.getElementById("card__comercial");

openCardComercial.addEventListener("click", () => {
    cardResidencial.style.display = "none";
    cardComercial.style.display = "flex";
});

/*  REDIRECT HOMEPAGE    */
function RedirectHomePage(){
    window.location.href = "Servicos.html";
}
function WhatsAppRedirect(){
    window.location.href = "https://api.whatsapp.com/send?phone=5511986280730";
}