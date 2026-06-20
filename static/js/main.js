document.addEventListener("DOMContentLoaded", () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      // Pull the original word from the custom HTML attribute you coded
      const originalText = link.getAttribute("data-glitch") || link.innerText;
      let interval = null;
  
      link.addEventListener("mouseover", () => {
        let iteration = 0;
        clearInterval(interval);
  
        interval = setInterval(() => {
          link.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
  
          if (iteration >= originalText.length) {
            clearInterval(interval);
          }
  
          // Speed adjustment for text scramble transformation
          iteration += 1 / 3;
        }, 30);
      });
  
      // Reset back to absolute baseline on mouse leave
      link.addEventListener("mouseleave", () => {
        clearInterval(interval);
        link.innerText = originalText;
      });
    });
  });