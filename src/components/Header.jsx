import logo  from '../assets/WaveRider.png'

export default function Header() {
    return (
        <header>
            <div class="logo-WaveRider">
                <a href='/home'>
                <img src={ logo }/>
                </a>
            </div>
            <nav class="links">
                <ul>
                    <li><a href="resto.html">Accueil</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="a-proposR.html">À propos</a></li>
                </ul>
            </nav>
        </header>
    )
}
