export function link() {
  
  document.querySelectorAll(".header__nav a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const addr = this.getAttribute("href");
      const element = document.querySelector(addr);
      if(element)
        element.scrollIntoView({ behavior: "smooth"});
    });
  });

}