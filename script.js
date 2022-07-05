const scrollBtn =  document.querySelector(".fa");
console.log(scrollBtn);
scrollBtn.addEventListener("click", () => {
document.documentElement.scrollTop = 0;
});
document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop < 50){
        scrollBtn.style.display = "none";
    }
    else{
        scrollBtn.style.display = "block";
    }

});
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });

    });

});