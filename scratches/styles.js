function changePrices(event) {
    var target = event.currentTarget
    var parent = target.parentNode.childNodes
    for(var i = 1; i < 7; i += 2) {
        if (parent[i].classList.contains('price-item-chosen')) {
            parent[i].classList.remove('price-item-chosen')
        }
    }
    target.classList.add('price-item-chosen')
}
for(var i = 0; i < 3; i++) {
    document.getElementsByClassName("price-item")[i].onclick = changePrices
}

function changeGallery(event) {
    var target = event.currentTarget
    var parent = target.parentNode.childNodes
    for(var i = 1; i < 7; i += 2) {
        if (parent[i].classList.contains('checked')) {
            parent[i].classList.remove('checked')
        }
    }
    target.classList.add('checked')
}
for(var i = 0; i < 3; i++) {
    document.getElementsByClassName("slider-item")[i].onclick = changeGallery
}