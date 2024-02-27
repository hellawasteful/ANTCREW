let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.getElementById("header").style.top = "-100px"; /* Hide header on scroll down */
    } else {
        document.getElementById("header").style.top = "0"; /* Show header on scroll up */
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
