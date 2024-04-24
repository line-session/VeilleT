import logo from '../assets/WaveRider.png'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

export default function Footer(){
    return (
        <footer>
        <div id="logofooter">
            <a href="resto.html">
                <img src={ logo } alt="" />
            </a>
        </div>
        <div class="icone-sociaux">
            <div class="lien-icone">
                <a href="twitter.com" target="_blank">
                    <img src={ twitter } alt="" />
                </a>
            </div>
            <div class="lien-icone">
                <a href="instagram.com" target="_blank">
                <img src={ instagram } alt="" />

                </a> 
            </div>
           <div class="lien-icone">
            <a href="youtube.com" target="_blank">
                <img src={ youtube } alt="" />
            </a>
           </div>
        </div>
        <div id="navfooter">
            <ul>
                <li><a href="resto.html">Accueil</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="a-proposR.html">À propos</a></li>
            </ul>
        </div>
    </footer>
    )
}