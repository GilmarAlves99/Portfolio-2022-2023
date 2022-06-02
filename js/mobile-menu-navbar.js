//toda classe tem um metodo constructor()
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        //referencia das propriedades classes
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this); // pegar todos os metodos e propriedas
    }
    handleClick() {
        console.log(this)
        this.navList.classList.toggle(this.activeClass);
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
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