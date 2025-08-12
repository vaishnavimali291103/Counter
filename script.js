let count = 1;
const counterEl = document.getElementById("counterData");

function updateCounter(){
    counterEl.classList.add("animate");
    setTimeout(() => {
        counterEl.innerHTML = count
        count.classList.remove("animate");
    }, 150);
}

function increase(){
    count++;
    updateCounter();
}

function decrease(){
    if(count > 0){
        count--;    
    }
    updateCounter();
}