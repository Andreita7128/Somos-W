    class NavBar extends HTMLElement {
        constructor() {
            super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/public/Components/NavBar/navBar.css">
        
        <nav class="navbar navbar-expand-lg navbar-light d-none  d-md-block first-nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="logo1" src="/public/Components/NavBar/images/logo.png" alt="Logo de mi sitio web">
                </a>
            <div class="d-flex justify-content-center align-items-center">
                <form class="d-flex my-2 my-lg-0">
                    <input class="form-control me-2 placeholder-input-desktop headline5" type="search"
                    placeholder="¿Que estas buscando?" aria-label="Search">
                <button class="btn btn_large search_button " type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link btn navup_buttons text-center text-button-link-normal" href="#"><i
                        class="bi bi-telephone distance-icon"></i>Canal de atención</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  btn navup_buttons text-center text-button-link-normal" style="margin-left: 10px;"
                        href="#"><i class="bi bi-person distance-icon"></i>Mi perfil W</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
        <nav class="navbar navbar-expand-lg navbar-dark  second_nav">
            <div class="container-fluid mx-auto ">
                <a class="navbar-brand d-md-none" href="#">
                <img class="logo1" src="/public/Components/NavBar/images/logo.png" alt="Logo de mi sitio web">
                </a>
    
            <button class="navbar-toggler ms-auto button_toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="bi bi-list"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav2">
                <form id="search-2" class="d-md-none d-flex mx-auto my-2 my-lg-0">
                    <input class="form-control me-2 placeholder-input-mobile mx-auto" type="search"
                    placeholder="¿Que estas buscando?" aria-label="Search">
                    <button class="btn btn_large search_button " type="submit"><i class="bi bi-search"></i></button>
                </form>
                <ul class="navbar-nav mx-auto second_nav_link">
                    <li class="nav-item d-md-none d-block">
                        <a class="nav-link btn btn_large text-center text-white mx-auto" style="margin-top: 5px;"
                        href="#">Mi perfil W</a>
                    </li>
                    <li class="nav-item d-md-none d-block">
                        <a class="nav-link btn btn_large text-center text-white mx-auto " style="margin-top: 18px;"
                        href="#">Canales de atención</a>
                    </li>
                    <li class="nav-item border-bottom-gg">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item border-bottom-gg">
                        <a class="nav-link" href="#">Ahorro e inversión</a>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle nav-link-pressed" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> Crédito </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Microcredito</a>
                            <a class="dropdown-item" href="#">Opción 2</a>
                            <a class="dropdown-item" href="#">Opción 3</a>
                            
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Seguros </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Opción 1</a>
                            <a class="dropdown-item" href="#">Opción 2</a>
                            <a class="dropdown-item" href="#">Opción 3</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Giros internacionales </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Opción 1</a>
                            <a class="dropdown-item" href="#">Opción 2</a>
                            <a class="dropdown-item" href="#">Opción 3</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                        aria-expanded="false"> Comunidad W </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">W contigo</a>
                            <a class="dropdown-item" href="#">Opción 2</a>
                            <a class="dropdown-item" href="#">Opción 3</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Sobre nosotros </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Opción 1</a>
                            <a class="dropdown-item" href="#">Opción 2</a>
                            <a class="dropdown-item" href="#">Opción 3</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  
        `
    }

}

customElements.define('w-nav-bar', NavBar)
export default NavBar