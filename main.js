  let isOpen = false;
  function toggleAccordion() {
    const content = document.getElementById("accordionContent");
    const chevron = document.getElementById("chevron");

    if (isOpen) {
      content.style.maxHeight = "0px";
      chevron.classList.remove("rotate-180");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      chevron.classList.add("rotate-180");
    }
    isOpen = !isOpen;
  }

  // Optional: expand if page load with open
  window.addEventListener("load", () => {
    const content = document.getElementById("accordionContent");
    content.style.maxHeight = "0px"; // collapsed by default
  });