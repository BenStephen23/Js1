const total = document.getElementsByClassName(".total");
const totalPrice = document.getElementById("total");

// basket
const basketPlus = document.getElementById("basket-plus");
const basketMinus = document.getElementById("basket-minus");
const basketQuantity = document.getElementById("basket-quantity");
const basketDelete = document.getElementById("basket-delete");
const basketHeart = document.getElementById("basket-heart");

// socks
const socksPlus = document.getElementById("socks-plus");
const socksMinus = document.getElementById("socks-minus");
const socksQuantity = document.getElementById("socks-quantity");
const socksDelete = document.getElementById("socks-delete");
const socksHeart = document.getElementById("socks-heart");

//  bag
const bagPlus = document.getElementById("bag-plus");
const bagMinus = document.getElementById("bag-minus");
const bagQuantity = document.getElementById("bag-quantity");
const bagDelete = document.getElementById("bag-delete");
const bagHeart = document.getElementById("bag-heart");

// heart initialization
basketHeart.addEventListener("click", () => {
    basketHeart.classList.toggle("red")
})

socksHeart.addEventListener("click", () => {
    socksHeart.classList.toggle("red")
})

bagHeart.addEventListener("click", () => {
    bagHeart.classList.toggle("red")
})

let basTotal = 0
let socksTotal = 0
let bagTotal = 0
let allTotal = basTotal + socksTotal + bagTotal
// basket initialization


// plus basket initialization
basketPlus.addEventListener("click", () => {
    basTotal += 1
    allTotal += 100
    basketQuantity.innerHTML = basTotal
    totalPrice.innerHTML = `${allTotal}$`
    
})

// minus basket initialization
function basketMin() {
    allTotal -=100
}
basketMinus.addEventListener("click", () => {
    if (basTotal > 0) {
        basTotal -= 1
        basketQuantity.innerHTML = basTotal
        if (allTotal >= 100) {
            basketMin()
            totalPrice.innerHTML = `${allTotal}$`
        }
        
        
    }
    else {
        basTotal = 0
        basketQuantity.innerHTML = basTotal
    }
})

// delete basket initialization
function basDel(){
    if (basTotal > 0) {
    let baspri = 100
    bas = baspri * basTotal
    allTotal = allTotal - bas
    basTotal = 0
    basketQuantity.innerHTML = basTotal
    totalPrice.innerHTML = `${allTotal}$`
}} 

basketDelete.addEventListener("click", () => {
    basDel()
})


// socks initialization

// plus socks initialization
socksPlus.addEventListener("click", () => {
    socksTotal += 1
    allTotal += 20
    socksQuantity.innerHTML = socksTotal
    totalPrice.innerHTML = `${allTotal}$`
})

// minus socks initialization
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

// delete socks initialization
function socDel(){
    if (socksTotal > 0) {
    let socpri = 20
    soc = socpri * socksTotal
    allTotal = allTotal - soc
    socksTotal = 0
    socksQuantity.innerHTML = socksTotal
    totalPrice.innerHTML = `${allTotal}$`
}}

socksDelete.addEventListener("click", () => {
    socDel()
})
// bag initialization

// plus bag initialization
bagPlus.addEventListener("click", () => {
    bagTotal += 1
    allTotal += 50
    bagQuantity.innerHTML = bagTotal
    totalPrice.innerHTML = `${allTotal}$`
})


// minus bag initialization
function bagMin(){
    allTotal -= 50
}

bagMinus.addEventListener("click", () => {
    if (bagTotal > 0) {
        bagTotal -= 1
        bagQuantity.innerHTML = bagTotal
        bagMin()
        totalPrice.innerHTML = `${allTotal}$`        
    }
    else {
        bagTotal = 0
        bagQuantity.innerHTML = bagTotal
    }
})

// delete bag initialization

function bagDel(){
    if (bagTotal > 0) {
    let bagpri = 50
    bag = bagpri * bagTotal
    allTotal = allTotal - bag
    bagTotal = 0
    bagQuantity.innerHTML = bagTotal
    totalPrice.innerHTML = `${allTotal}$`
}}

bagDelete.addEventListener("click", () => {
    bagDel()
})