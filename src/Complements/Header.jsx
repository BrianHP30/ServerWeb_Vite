import '../Styles/Header.css'
import Menu from '../Img/Menu.png'
import Logo from '../Img/Pelicula.png'
import Search from '../Img/lupa.png'

function Header() {
    return ( 
        <header>
            <div className='part1'>
                <div>
                    <img src={Logo} alt="" />
                    <p>CINEX</p>
                </div>
            </div>
            <div className='center'>
                <div className='busqueda'>
                    <input type="text"/>
                    <img src={Search} alt="" />
                </div>
            </div>
            <div className='part2'>
                <div>
                <img src={Menu} alt="" />
                </div>
            </div>
        </header>
     );
}

export default Header;