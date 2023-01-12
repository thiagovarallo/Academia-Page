window.addEventListener("scroll", (e) => {
    const header = document.getElementById("header") 
    const h2 = document.getElementById("name")
    var scrollY = this.scrollY;

    console.log(posicao)

    if(scrollY >= 608.09375) {
        header.style.transition = "1s";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.900)";
        header.style.height = "10vh";
        h2.style.color = "black"
    } else if (scrollY < 608.09375) {
        header.style.transition = "1s";
        header.style.backgroundColor = "";
        header.style.height = "15vh";
        h2.style.color = "white"
    } 
})
