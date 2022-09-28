import '../Styles/Contenido.css'
import Cartelera from './Cartelera'

import Card from '../Complements/Card';

function contenido() {

    const Pelicula=[
        {
            "imagen": '/Img/banner.png',
        },
        {
            "imagen":'/Img/img2.jpg',
        }
    ]

    return ( 
        <>
        <div className='conteiner'>
                {Pelicula.map((item)=>{
                    return(<Card img={item.imagen}/>)
                })}
        </div>
        <Cartelera></Cartelera>
        </>
     );
}

export default contenido;