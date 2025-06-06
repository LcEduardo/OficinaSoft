const header = document.getElementById("main-header");

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('mostrar');
    } else {
        header.classList.remove('mostrar');
    }
});

const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-diferencial');
    const mediaQuery = window.matchMedia('(max-width: 767px)'); 

    
    function handleLayoutChange(e) {

        const modalContent = document.querySelector('.modal-content1');

        if (e.matches) { 
            cards.forEach(card => {
                card.classList.add('mobile-layout'); 
                card.style.height = 'auto'; 
            });

            modalContent.style.width = '95%';
            modalContent.style.padding = '20px 15px';
            modalContent.style.top = '40%';

        } else { 
            cards.forEach(card => {
                card.classList.remove('mobile-layout'); 
                card.style.height = '400px'; 
            });

            modalContent.style.width = '500px';
            modalContent.style.padding = '30px 25px';
            modalContent.style.top = '25%';
        }
    }
    
    mediaQuery.addListener(handleLayoutChange);
    handleLayoutChange(mediaQuery); 
});

const modal = document.getElementById("meuModal");
const spanClose = document.querySelector(".close");
const btnAbrir = document.querySelectorAll(".click");
let action;

btnAbrir.forEach(btn => {
    btn.addEventListener("click", function() {
        modal.style.display = "block";
        header.style.display = "none";
        action = btn.dataset.id;
    });
});

spanClose.onclick = function() {
    modal.style.display = "none";
    header.style.display = "block";
    header.style.display = 'flex';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        header.style.display = "block";
        header.style.display = 'flex';
    }
};

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

const formulario = document.getElementById("cadastroFormulario");
const btnEnvio = document.getElementById("envio");

formulario.addEventListener("submit", async function (e) {
    e.preventDefault();

    const dados = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        tell: formulario.tell.value,
        action: action
    }

    try {
        const resposta = await fetch("https://lucascarvalho17.app.n8n.cloud/webhook-test/578aa391-da2d-4414-8051-c456c2ba3390", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            btnEnvio.textContent = "Enviado";


        } else {
            alert("ERRO!! Erro ao enviar o formulário.");
        }
    } catch (erro) {
        console.error("Erro:", erro);
        document.getElementById("status").textContent = "Erro de rede.";
    }

});
