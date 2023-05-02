class Sidebar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <div class="sidebar-container d-flex flex-column flex-shrink-0 p-3 bg-body-secondary" >
                <h3 class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg class="bi pe-none me-2" width="40" height="32"></svg>
                    <span class="fs-4">Mi Perfil W</span>
                </h3>
        
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="side-item">
                        <a href="/Perfil/perfil.html" class="nav-link side-link active" aria-current="page">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Perfil
                        </a>
                    </li>
                    
                    <li class="side-item">
                        <a href="/Perfil/productos.html" class="side-link nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Tus Productos
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="#" class="side-link nav-link link-body-emphasis">
                            <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Giros Internacionales
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="#" class="side-link nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Alcancias
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="/Perfil/agenda.html" class="side-link nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Agenda Financiera
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="/Perfil/extractos.html" class="side-link nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Extractos y Certificados
                        </a>
                    </li>
                </ul>
            </div>
        `
    }
}
customElements.define('user-sidebar', Sidebar)
export default Sidebar