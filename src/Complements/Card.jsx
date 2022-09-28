import '../Styles/Card.css'

function Card(props) {
    return ( 
        <>
        <div className='imagen'>
            <img src={props.img} alt="" />
        </div>
        </>
     );
}

export default Card;