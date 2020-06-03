
const headerContainer = new Vue({
el: 'header-template',
template: `<header class="bg-dark">
                <div class="text-center"><span><h1 class="display-4" style="font-size: 50px;color: white">Liony Machado<br> Front-end Developer <i class="fas fa-code text-danger"></i></h1></span>
                </div>
            <nav class="navbar navbar-expand-sm navbar-dark justify-content-center">
                <button class="navbar-toggler bg-danger mb-4" data-toggle="collapse" data-target="#nav-target"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse " id="nav-target">
                    <ul class="nav__ul navbar-nav text-center ml-auto mr-auto" id="nav-ul">
                        <li class="nav-item border-li">
                            <a class="nav-link p-2" href="index.html">Home</a>
                        </li>
                        <li class="nav-item m-auto border-li">
                            <a class="nav-link p-2" href="projetos.html">Projetos</a>
                        </li>
                        <li class="nav-item m-auto border-li">
                            <a class="nav-link p-2" href="formacao.html">Formação</a>
                        </li>    
                        <li class="nav-item m-auto border-li">
                            <a class="nav-link p-2" href="contato.html">Contato</a>
                        </li>
                    </ul>
                </div> 
            </nav>
            </header>`,
})
const footerContainer = new Vue({
    el: 'footer-template',
    template: `<footer class="mt-5">
                    <div class="footer_ col-sm-12 bg-dark text-white display-4 p-3 text-center">&copy Copyright<br> Liony Henrique Machado</span>
                    </div>
                 </footer>`,
})