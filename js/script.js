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


/*    REDIRECT INSTAGRAM */
function RedirectInstagram(){
    window.location.href = "https://www.instagram.com/vidroluxsp/";
}


/*  CARROUSSELL  SERVIÇOS */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.carrossel-slide');
  const btnNext = document.getElementById('nextBtn');
  const btnPrev = document.getElementById('prevBtn');
  let slideAtual = 0;

  function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[index].classList.add('ativo');
  }

  btnNext.addEventListener('click', () => {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
  });

  btnPrev.addEventListener('click', () => {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(slideAtual);
  });

  mostrarSlide(slideAtual);

});