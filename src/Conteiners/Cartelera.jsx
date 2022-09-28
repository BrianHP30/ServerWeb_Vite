import '../Styles/Cartelera.css'
import CardCartelera from '../Complements/CardCartelera';

function Cartelera() {

const Cartel=[
    {
        "imagen":'/Img/terminator.jpg',
        "Nombre":"The Terminator",
        "Descripcion":"En el año 2029 las máquinas dominan el mundo. Los rebeldes que luchan contra ellas tienen como líder a John Connor, un hombre que nació en los años ochenta."
    },
    {
        "imagen":'/Img/rambo.jpg',
        "Nombre":"Rambo",
        "Descripcion":"El ex boina verde John Rambo lleva una solitaria vida. Todo cambia cuando un grupo le propone que han hecho de la tortura y el asesinato una práctica habitual."
    },
    {
        "imagen":'/Img/Bicentenario.jpg',
        "Nombre":"El Hombre Bicentenario",
        "Descripcion":"Avances tecnológicos que engullen la soberanía de la compasión humana, Richard Martin compra un regalo, un nuevo robot NDR-114, al que llaman Andrew."
    },
    {
        "imagen":'/Img/SU.jpg',
        "Nombre":"Soldado Universal",
        "Descripcion":"El sargento Scott liderará una secta de soldados que pretenden dominar el mundo dirigiendo un nuevo orden gubernamental."
    },
    {
        "imagen":'/Img/WW.jpg',
        "Nombre":"Willy Wonka y la fabrica de chocolate",
        "Descripcion":"Willy Wonka, un famoso fabricante de dulces ofrece suministrar dulces de por vida a los cinco ganadores que encuentren el tesoro."
    },
    {
        "imagen":'/Img/robocop.jpg',
        "Nombre":"RoboCop",
        "Descripcion":"Detroit, 2028. Un excelente padre y marido y aún mejor policía, es herido de gravedad en acto de servicio, despierta en un robot y una maquina."
    }
]

    return ( 
        <div className="Conteiner">
             {Cartel.map((item)=>{
                return(<CardCartelera img={item.imagen} name={item.Nombre} sinopsis={item.Descripcion}/>)
            })}
        </div>
     );
}

export default Cartelera;