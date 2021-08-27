class MobileNavbar {
    
    constructor(mobileMenu, navList, navLinks){
        // Propriedades da classe
        this.mobileMenu = document.querySelector(mobileMenu); // menu
        this.navList =  document.querySelector(navList) // lista da nav
        this.navLinks = document.querySelectorAll(navLinks) // links
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this); // faz this se referir a classe e nao ao objeto DOM   
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation 
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // inicia a função se mobileMenu existir no documento
    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();