const navegadora = document.querySelectorAll(".navegador");

navegadora.forEach(function(navega) {
    navega.addEventListener("click", function(e){
        const activenavega= document.querySelector(".active");
        activenavega.classList.remove("active");
        e.target.classList.add("active");
    });
    
});

const btnSwitch = document.querySelector("#Switch");

btnSwitch.addEventListener("click", ()=>{
    document.body.classList.toggle ("dark");
    btnSwitch.classList.toggle("active");
})