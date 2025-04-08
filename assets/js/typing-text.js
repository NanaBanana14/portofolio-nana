document.addEventListener("DOMContentLoaded", function () {
  const text = "Front-End Dev | Back-End Explorer | UI/UX Thinker | Automation Tester | Business Intelligence";
  const typingElement = document.getElementById("typing-text");
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting) {
      typingElement.innerHTML = text.substring(0, index + 1);
      index++;
      if (index === text.length) {
        setTimeout(() => {
          isDeleting = true;
          typeLoop();
        }, 2000);
        return;
      }
    } else {
      typingElement.innerHTML = text.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeLoop, isDeleting ? 30 : 50);
  }

  typeLoop();
});
