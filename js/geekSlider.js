let botonSiguiente = $(".boton-pata-next");
let botonAnterior = $(".boton-pata-prev");

function getGeekCards() {
    let slider = $(".geek-slider-item");
    let index = 0;
    for (let i = 0; i < slider.length; i++) {
        const element = slider[i];
        index = i;
        if($(element).attr("data-show") == 1) {
            return {
                slider,
                index,
            };
        }
    }
}

botonSiguiente.on("click", () => {
    let {slider, index} = getGeekCards();
    if(index == slider.length - 1) {
        $(slider[0]).attr("data-show", "1");
        $(slider[index]).attr("data-show", "0");
    }
    $(slider[index + 1]).attr("data-show", "1");
    $(slider[index]).attr("data-show", "0");
});

botonAnterior.on("click", () => {
    let {slider, index} = getGeekCards();
    if(index == 0) {
        $(slider[slider.length - 1]).attr("data-show", "1");
        $(slider[index]).attr("data-show", "0");
    }
    $(slider[index - 1]).attr("data-show", "1");
    $(slider[index]).attr("data-show", "0");
})