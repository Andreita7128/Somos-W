    class NavBar extends HTMLElement {
        constructor() {
            super()
    }

    connectedCallback() {
        this.render()
        this.setupSearchForm();
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
                <form id = 'search-1' class="d-flex my-2 my-lg-0">
                    <input class="form-control me-2 placeholder-input-desktop headline5" type="search"
                    placeholder="¿Que estas buscando?" aria-label="Search">
                <button class="btn btn_large_active search_button " type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="btn btn_medium btn_medium_active text_button_medium nav_btn" href="#"><i
                        class="bi bi-telephone"></i>Canal de atención</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn_medium btn_medium_active text_button_medium nav_btn" style="margin-left: 10px;"
                        href="../../../Registro/iniciarSesión.html"><i class="bi bi-person"></i>Mi perfil W</a>
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
                        <a class="nav-link btn btn_large_active text-center text-white  mx-auto" style="margin-top: 5px;"
                        href="#">Mi perfil W</a>
                    </li>
                    <li class="nav-item d-md-none d-block">
                        <a class="nav-link btn btn_large_active text-center text-white mx-auto " style="margin-top: 18px;"
                        href="#">Canales de atención</a>
                    </li>
                    <li class="nav-item border-bottom-gg">
                        <a class="nav-link" href="../../../landing.html">Inicio</a>
                    </li>
                    <li class="nav-item border-bottom-gg">
                        <a class="nav-link" href="#">Ahorro e inversión</a>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle nav-link-pressed" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> Crédito </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../Creditos/credito.html">Microcredito</a>
                            <a class="dropdown-item" href="#">Yo construyo</a>
                            <a class="dropdown-item" href="#">Gotahorro</a>
                            <a class="dropdown-item" href="#">Inmueble productivo</a>
                            <a class="dropdown-item" href="#">Credito vehiculo</a>
                            
                            
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Seguros </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../Seguros/seguros.html">Seguro soy vida</a>
                            <a class="dropdown-item" href="#">Seguro soy protección familiar</a>
                            <a class="dropdown-item" href="#">Seguro soy patrimonio seguro</a>
                            <a class="dropdown-item" href="#">Seguro soy previsión exequial</a>
                            
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg ">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Giros internacionales </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Reclamar giros</a>
                            <a class="dropdown-item" href="#">Enviar Giros</a>
                            
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                        aria-expanded="false"> Comunidad W </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../ComunidadW/comunidadW.html">W contigo</a>
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

    setupSearchForm(){
        const searchForm = this.querySelector('#search-2');
        searchForm.addEventListener('submit',this.handleSearchSubmit.bind(this));
    }

    handleSearchSubmit(event){
        event.preventDefault();
        const searchInput = this.querySelector
    }

}

customElements.define('w-nav-bar', NavBar)
export default NavBar