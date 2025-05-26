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

