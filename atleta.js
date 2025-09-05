// Seleciona todos os botões de "Títulos"
const infoButtons = document.querySelectorAll(".info-btn");

// Elementos do modal
const modal = document.getElementById("modal");
const modalPhoto = document.getElementById("modal-photo");
const modalName = document.getElementById("modal-name");
const modalBelt = document.getElementById("modal-belt");
const modalAchievements = document.getElementById("modal-achievements");
const modalClose = document.querySelector(".modal-close");

// Abrir modal ao clicar em "Títulos"
infoButtons.forEach(button => {
  button.addEventListener("click", e => {
    const card = e.target.closest(".athlete-card");

    // Dados do atleta
    const name = card.dataset.name;
    const belt = card.dataset.belt;
    const achievements = card.dataset.achievements;
    const photo = card.dataset.photo;

    // Preenche informações no modal
    modalName.textContent = name;
    modalBelt.textContent = belt;
    modalPhoto.src = photo;

    // Formata títulos como lista
    modalAchievements.innerHTML = "";
    achievements.split("|").forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.trim();
      modalAchievements.appendChild(li);
    });

    // Mostra modal
    modal.classList.add("show");
  });
});

// Fechar modal no "X"
modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Fechar modal clicando fora
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
