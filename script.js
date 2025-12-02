document.addEventListener("DOMContentLoaded", () => {
     const searchInput = document.getElementById("searchInput");
     const cards = document.querySelectorAll(".card");

     searchInput.addEventListener("keyup", (e) => {
          const searchString = e.target.value.toLowerCase();

          cards.forEach((card) => {
               const title = card.querySelector("h2").innerText.toLowerCase();
               const description = card.querySelector("p").innerText.toLowerCase();
               if (title.includes(searchString) || description.includes(searchString)) {
                    card.style.display = "";
               } else {
                    card.style.display = "none";
               }
          });
     });
});