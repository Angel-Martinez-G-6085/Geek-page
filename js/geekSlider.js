let slider = $(".codigo-geek-slider");
let botonSiguiente = $(".boton-pata-next");
let botonAnterior = $(".boton-pata-prev");

$(".codigo-geek-slider section:last-child").insertBefore(".codigo-geek-slider section:first-child");
slider.css("margin-left", "-100%");

function autoplay() {
	interval = setInterval(function(){
		nextGeekCard();
	}, 5000)};

function nextGeekCard() {
    slider.animate({
        marginLeft: "-200%"
    }, 700, () => {
        $(".codigo-geek-slider section:first-child").insertAfter(".codigo-geek-slider section:last-child");
        slider.css("margin-left", "-100%");
    })
}

function prevGeekCard() {
    slider.animate({
        marginLeft: "0%"
    }, 700, () => {
        $(".codigo-geek-slider section:last-child").insertBefore(".codigo-geek-slider section:first-child");
        slider.css("margin-left", "-100%");
    })
}

botonSiguiente.on("click", () => {
    nextGeekCard();
    clearInterval(interval);
    autoplay();
});

botonAnterior.on("click", () => {
    prevGeekCard();
    clearInterval(interval);
    autoplay();
})

autoplay();