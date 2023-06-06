function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    if (section) {
      var sectionOffset = section.offsetTop - 200; // Restamos 200px a la posición superior de la sección
      window.scrollTo({
        top: sectionOffset,
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  }


  