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

    window.addEventListener("load", () => {
      const content = document.getElementById("accordionContent");
      if (content) content.style.maxHeight = "0px";
    });

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'CV_Raihsa_Firza_Ramadan.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }

    const template = document.getElementById('icons')?.content;
    if (template) {
      const scrollIcons = document.getElementById('scroll-icons');
      const scrollIconsCopy = document.getElementById('scroll-icons-copy');
      if (scrollIcons && scrollIconsCopy) {
        scrollIcons.appendChild(template.cloneNode(true));
        scrollIconsCopy.appendChild(template.cloneNode(true));
      }
    }