const btnHome = document.getElementById("btnHome")
const btnGo = document.getElementById("go")
const btnSobre = document.getElementById("btnSobre")
const btnProjetos = document.getElementById("btnProjetos")
const btnContato = document.getElementById("btnContato")
const telaInicial = document.getElementById("telaInicial")
const telaSobre = document.getElementById("telaSobre")
const telaProjetos = document.getElementById("telaProjetos")
const telaContato = document.getElementById("telaContato")
const menuLateral = document.getElementById("menuLateral")
const btnMenu = document.getElementById("btnMenu")
const btnClose = document.getElementById("btnClose")

btnHome.addEventListener("click", function(){
    window.location.href = "#telaInicial"
})

btnGo.addEventListener("click", function(){
    window.location.href = "#telaSobre"
})

btnSobre.addEventListener("click", function(){
    window.location.href = "#telaSobre"
})

btnProjetos.addEventListener("click", function(){
    window.location.href = "#telaProjetos"
})

btnContato.addEventListener("click", function(){
    window.location.href = "#telaContato"
})

btnMenu.addEventListener("click", function(){
    menuLateral.style.display = "flex";
});

btnClose.addEventListener("click", function(){
    menuLateral.style.display = "none";
})



    
 document.getElementById('whats').addEventListener('click', function() {
    var phoneNumber = '5514991302204';
    var message = 'Olá, gostaria de saber mais sobre seus projetos'; 
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.location.href = whatsappURL;
});

document.getElementById('insta').addEventListener('click', function() {
    var instagramURL = 'https://www.instagram.com/_biapieri?igsh=bzE0dTNiNmoyeDFt'; 
    window.location.href = instagramURL;
});

