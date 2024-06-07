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

menuLateral.addEventListener("click", function(event){
    if(event.target === menuLateral){
        menuLateral.style.display = "none"
    }
})

