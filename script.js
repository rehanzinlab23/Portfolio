function MainDoc() {
     document.addEventListener("DOMContentLoaded", () => {
          const searchInput = document.getElementById("searchInput");
          const cards = document.querySelectorAll(".card");
          const noResultMessage = document.getElementById("no-result-message");
          searchInput.addEventListener("keyup", (e) => {
               const searchString = e.target.value.toLowerCase();
               let resultsFound = 0;

               cards.forEach((card) => {
                    const title = card.querySelector("h2").innerText.toLowerCase();
                    const description = card.querySelector("p").innerText.toLowerCase();

                    if (title.includes(searchString) || description.includes(searchString)) {
                         card.style.display = "";
                         resultsFound++;
                    } else {
                         card.style.display = "none";
                    }
               });
               if (resultsFound === 0 && searchString.length > 0) {
                    noResultMessage.style.display = "block";
               } else {
                    noResultMessage.style.display = "none";
               }
          });
          // theme();
     });
}

// 🌙 Theme toggle

// function theme() {
//      const themeToggle = document.getElementById('themeToggle');

//      themeToggle.addEventListener('click', () => {
//           document.body.classList.toggle('dark');
//           if (document.body.classList.contains('dark')) {
//                themeToggle.textContent = '☀️';
//           } else {
//                themeToggle.textContent = '🌙';
//           }
//      });
// }

MainDoc();