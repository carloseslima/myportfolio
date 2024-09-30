document.addEventListener('DOMContentLoaded', function() {
    const adjetivos = ["curioso.", "dedicado.", "apaixonado por tecnologia."]; // lista de palavras
    let index = 0; // index inicial

    const adjetivoEl = document.getElementById('adjetivo'); // elemento para exibir adjetivos

    // Função que troca a palavra
    function trocaAdjetivo() {
        adjetivoEl.style.opacity = 0; // começa o fade-out

        setTimeout(() => {
            adjetivoEl.textContent = adjetivos[index]; // troca a palavra
            adjetivoEl.style.opacity = 1; // inicia o fade-in

            index = (index + 1) % adjetivos.length; // atualiza o índice (ciclo infinito)
        }, 500); // tempo de espera para o fade-out antes de trocar a palavra
    }

    // Chama a função a cada 2.5 segundos (500ms para fade + 2s de exibição)
    setInterval(trocaAdjetivo, 2500);
});









$(document).ready(function(){
    // Aplica o efeito de scroll suave para todos os links que temjam as classes especificadas entre aspas
    $('a.link-menu, a.link-interno, #subir').on('click', function(event) {
        // Verifica se o link tem o hash (ex: #inicio, #sobre-mim, etc.)
        if (this.hash !== "") {
            event.preventDefault(); // Previne o comportamento padrão do link
            
            var hash = this.hash; // Armazena o hash
            
            // Usa jQuery animate() para criar o scroll suave
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Adiciona o hash na URL depois do scroll terminar (comportamento padrão)
                window.location.hash = hash;
            });
        }
    });
});






const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }

    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))