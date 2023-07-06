curtirPortifolio();
visitas();

function curtirPortifolio() {
  const curtidaBotao = document.querySelectorAll(".btn-like");

  curtidaBotao.forEach((button) => {
    const projectId = button.id;
    const ehFavoritado = localStorage.getItem(projectId);

    if (ehFavoritado === "true") {
      button.classList.add("liked");
      const likeCount = button.querySelector(".like-count");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  });

  curtidaBotao.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.id;
      const ehFavoritado = button.classList.contains("liked");

      const likeCount = button.querySelector(".like-count");
      let count = parseInt(likeCount.textContent);

      if (ehFavoritado) {
        count--;
        button.classList.remove("liked");
        localStorage.setItem(projectId, "false");
      } else {
        count++;
        button.classList.add("liked");
        localStorage.setItem(projectId, "true");
      }

      likeCount.textContent = count;
    });
  });
}