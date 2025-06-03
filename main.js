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
  
  function showSection(id) {
    // Sembunyikan semua section kecuali yang class-nya always-visible (profile)
    const sections = document.querySelectorAll('section:not(.always-visible)');
    sections.forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('block');
    });

    // Tampilkan section yang dipilih
    const active = document.getElementById(id);
    if (active) {
      active.classList.remove('hidden');
      active.classList.add('block');
    }

    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
     // Menggandakan ikon dengan JavaScript
    const template = document.getElementById('icons').content;
    document.getElementById('scroll-icons').appendChild(template.cloneNode(true));
    document.getElementById('scroll-icons-copy').appendChild(template.cloneNode(true));
    
 function showSection(id) {
      const sections = document.querySelectorAll('section:not(.always-visible)');
      sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('block');
      });

      const active = document.getElementById(id);
      if (active) {
        active.classList.remove('hidden');
        active.classList.add('block');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
