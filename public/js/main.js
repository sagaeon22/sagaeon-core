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
  document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrix-rain");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const alphabet = "01";
  const fontSize = 16;
  
  let columns = Math.floor(canvas.width / fontSize);
  let rainDrops = Array(columns).fill(1);

  window.addEventListener("resize", () => {
    columns = Math.floor(canvas.width / fontSize);
    rainDrops = Array(columns).fill(1);
  });

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffcc"; // Signature theme neon cyan
    ctx.font = fontSize + "px Audiowide, Courier New, monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      const x = i * fontSize;
      const y = rainDrops[i] * fontSize;

      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  }

  setInterval(drawMatrix, 33);
});