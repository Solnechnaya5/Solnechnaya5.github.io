 let icon = document.querySelectorAll(".price-icon");
    let block = document.querySelectorAll(".prices-block");
    function removeActiveClass() {
  icon.forEach((icon) => icon.classList.remove('icon-active'));
  block.forEach((block) => block.classList.remove('prices-block_active'));
    }
    function find(){
        block.forEach((block) => block.classList.contains('prices-block_active'));
        return true;
    }

    for (let i = 0; i < icon.length; i++) {
        icon[i].onclick = function changeColor() {
            removeActiveClass();
        icon[i].classList.add('icon-active');
        block[i].classList.add("prices-block_active");       
    }
    
}

// 
let buttonComplex = document.querySelectorAll(".prices-block_item-complex");
    let priceListComplex = document.querySelectorAll(".prices-block_right-item-complex");
    function removeActiveClassPrice() {
        buttonComplex.forEach((buttonComplex) => buttonComplex.classList.remove('li_active'));
        priceListComplex.forEach((priceListComplex) => priceListComplex.classList.remove('prices-block_right-active'));
    }


    for (let i = 0; i < buttonComplex.length; i++) {
        buttonComplex[i].onclick = function changepriceListComplex() {
            removeActiveClassPrice();
            buttonComplex[i].classList.add('li_active');
            priceListComplex[i].classList.add("prices-block_right-active");
    
    
}
}
// 
let buttonHair = document.querySelectorAll(".prices-block_item-hair");
    let priceListHair = document.querySelectorAll(".prices-block_right-item-hair");
    function removeActiveClassHair() {
        buttonHair.forEach((buttonHair) => buttonHair.classList.remove('li_active'));
        priceListHair.forEach((priceListHair) => priceListHair.classList.remove('prices-block_right-active'));
    }


    for (let i = 0; i < buttonHair.length; i++) {
        buttonHair[i].onclick = function changeListHair() {
            removeActiveClassHair();
            buttonHair[i].classList.add('li_active');
            priceListHair[i].classList.add("prices-block_right-active");
}
}
// 
let buttonStudy = document.querySelectorAll(".prices-block_item-study");
    let priceListStudy = document.querySelectorAll(".prices-block_right-item-study");
    function removeActiveClassStudy() {
        buttonStudy.forEach((buttonStudy) => buttonStudy.classList.remove('li_active'));
        priceListStudy.forEach((priceListStudy) => priceListStudy.classList.remove('prices-block_right-active'));
    }


    for (let i = 0; i < buttonStudy.length; i++) {
        buttonStudy[i].onclick = function changeListHair() {
            removeActiveClassStudy();
            buttonStudy[i].classList.add('li_active');
            priceListStudy[i].classList.add("prices-block_right-active");
}
}
    //    
    let buttonBrows = document.querySelectorAll(".prices-block_item-brows");
    let priceListBrows = document.querySelectorAll(".prices-block_right-item-brows");
    function removeActiveClassBrows() {
        buttonBrows.forEach((buttonBrows) => buttonBrows.classList.remove('li_active'));
        priceListBrows.forEach((priceListBrows) => priceListBrows.classList.remove('prices-block_right-active'));
    }


    for (let i = 0; i < buttonBrows.length; i++) {
        buttonBrows[i].onclick = function changeListHair() {
            removeActiveClassBrows();
            buttonBrows[i].classList.add('li_active');
            priceListBrows[i].classList.add("prices-block_right-active");
}
}