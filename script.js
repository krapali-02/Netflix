const trendContent = document.querySelector(".trend-content");
const btnRight = document.querySelector(".scroll-btn-right")
const btnLeft = document.querySelector(".scroll-btn-left")

btnRight.addEventListener("click",() =>{
    trendContent.scrollBy({
        left: 800,
        behavior: "smooth"
    })
})

btnLeft.addEventListener("click",()=>{
    trendContent.scrollBy({
        left: -800,
        behavior : "smooth"
    })
})