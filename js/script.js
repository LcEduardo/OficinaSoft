const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-diferencial');
    const mediaQuery = window.matchMedia('(max-width: 767px)'); // Define o breakpoint para mobile

    // Função que aplica as mudanças
    function handleLayoutChange(e) {
        if (e.matches) { // Se for mobile (<= 767px)
            cards.forEach(card => {
                card.classList.add('mobile-layout'); // Adiciona classe para mobile
                card.style.height = 'auto'; // Altura automática
            });
        } else { // Se for desktop (> 767px)
            cards.forEach(card => {
                card.classList.remove('mobile-layout'); // Remove classe mobile
                card.style.height = '400px'; // Altura fixa para desktop
            });
        }
    }

    // Executa a função ao carregar e quando a tela for redimensionada
    mediaQuery.addListener(handleLayoutChange);
    handleLayoutChange(mediaQuery); // Verifica no carregamento inicial
});

document.querySelector('.current-year').textContent = new Date().getFullYear();

// Adiciona classe hover dinamicamente
document.querySelectorAll('.hover-text-white').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('bg-custom-light');
        link.classList.remove('text-custom-muted');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('bg-custom-light');
        link.classList.add('text-custom-muted');
    });
});