import '../Styles/CardCartelera.css'

function CardCartelera(props) {
    return ( 
        <>
        <div className="contenedor">
            <div className='imagenes'>
                <img src={props.img} alt="" />
            </div>
            <div className='titulo'>
                <p>{props.name}</p>
            </div>
            <div className='descripcion'>
                <p><br />{props.sinopsis}</p>
            </div>
        </div>
        </>
     );
}

export default CardCartelera;