const rightButton = document.querySelector(".buton-right-container");
const leftButton = document.querySelector(".buton-left-container");

function getCards() {
    let equipoSliderButtons = document.querySelectorAll(".slider-radio");
    // Creamos un Array con todos los botones del slider
    equipoSliderButtons = Array.from(equipoSliderButtons);

    // Creamos un Array con los atributos de cada boton del slider
    let SliderButtonsAtributes = equipoSliderButtons.map((element) => {
        return Array.from(element.attributes);
    });
    return SliderButtonsAtributes;
}

function getChecked() {
    let ArregloAtributos = [];
    let SliderButtonsAtributes = getCards();

    SliderButtonsAtributes.forEach((arreglo) => {
        let nuevoArreglo = [];
        arreglo.forEach((objeto) => {
            nuevoArreglo.push(objeto.name);
        })
        ArregloAtributos.push(nuevoArreglo);
    })
    return ArregloAtributos;
}

function nextImage() {
    let posicionActul = 0;
    let posicionSiguiente = 0;
    let ArregloAtributos = getChecked();

    ArregloAtributos.forEach((arreglo, index) => {
        if(arreglo.includes("checked")) {
            if(index == ArregloAtributos.length - 1) {
                posicionActul = index;
                posicionSiguiente = 0
                return
            }
            posicionActul = index;
            posicionSiguiente = index + 1;
        }
    })
    return {
        posicionActul,
        posicionSiguiente
    }
}

function previosImage() {
    let posicionActul = 0;
    let posicionAnterior = 0;
    let ArregloAtributos = getChecked();

    ArregloAtributos.forEach((arreglo, index) => {
        if(arreglo.includes("checked")) {
            if(index == 0) {
                posicionActul = index;
                posicionAnterior = ArregloAtributos.length - 1
                return
            }
            posicionActul = index;
            posicionAnterior = index - 1;
        }
    })
    return {
        posicionActul,
        posicionAnterior
    }
}

function moveNextCard(actual, siguiente) {
    let cards = document.querySelectorAll(".slider-radio");
    cards[actual].removeAttribute("checked");
    cards[siguiente].setAttribute("checked", true);
}

rightButton.addEventListener("click", () => {
    const {posicionActul, posicionSiguiente} = nextImage();
    moveNextCard(posicionActul, posicionSiguiente);
})

leftButton.addEventListener("click", () => {
    const {posicionActul, posicionAnterior} = previosImage();
    moveNextCard(posicionActul, posicionAnterior);
})