const total = document.getElementsByClassName(".total");
const totalPrice = document.getElementById("total");

// basket
const basketPlus = document.getElementById("basket-plus");
const basketMinus = document.getElementById("basket-minus");
const basketQuantity = document.getElementById("basket-quantity");
const basketDelete = document.getElementById("basket-delete");
const basketHeart = document.getElementById("basket-heart");


let basTotal = 0
let allTotal = 0

basketPlus.addEventListener("click", () => {
    basTotal += 1
    allTotal += 100
    basketQuantity.innerHTML = basTotal
    totalPrice.innerHTML = `${allTotal}$`

})
basketMinus.addEventListener("click", () => {
    if (basTotal > 0) {
        basTotal -= 1
        basketQuantity.innerHTML = basTotal
        if (allTotal >= 100) {
            allTotal -= 100
            totalPrice.innerHTML = `${allTotal}$`
        }

        
    }
    else {
        basTotal = 0
        basketQuantity.innerHTML = basTotal
    }
})

basketDelete.addEventListener("click", () => {
    if (basTotal > 0) {
        basTotal = 0
        basketQuantity.innerHTML = basTotal
        allTotal = 0
        totalPrice.innerHTML = `${allTotal}$`
    }
    else {
        basTotal = 0
        basketQuantity.innerHTML = basTotal
    }
})

basketHeart.addEventListener("click", () => {
    basketHeart.classList.toggle("red")
})

// socks
const socksPlus = document.getElementById("socks-plus");
const socksMinus = document.getElementById("socks-minus");
const socksQuantity = document.getElementById("socks-quantity");
const socksDelete = document.getElementById("socks-delete");
const socksHeart = document.getElementById("socks-heart");

socksHeart.addEventListener("click", () => {
    socksHeart.classList.toggle("red")
})

let socksTotal = 0
socksPlus.addEventListener("click", () => {
    socksTotal += 1
    allTotal += 20
    socksQuantity.innerHTML = socksTotal
    totalPrice.innerHTML = `${allTotal}$`
})
function sockMin() {
    allTotal -= 20
}

socksMinus.addEventListener("click", () => {
    if (socksTotal > 0) {
        socksTotal -= 1
        socksQuantity.innerHTML = socksTotal
        sockMin()
        totalPrice.innerHTML = `${allTotal}$`

        
        
        
    }
    else {
        socksTotal = 0
        socksQuantity.innerHTML = socksTotal
    }
})

socksDelete