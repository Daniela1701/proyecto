
import user1 from './t_imagenes/t_user_1.jpg'

function Testimonios() {
    
    return (
      <>
      <div className='section'>
        <div className="titulo">
        <h1>¿Qué dicen nuestros usuarios?</h1>
        </div>
        <div>
        <figcaption> @Sonne_peruvian24</figcaption>
            <div className="iconos">
            <img src={user1} className="user1" alt="" />
            </div>
            <div>
            <p>"Tuve un viaje maravilloso a Trujillo. Desde la asesoría 
                inicial hasta el regreso a casa, todo fue perfecto. Me
                proporcionaron una guía muy útil con información sobre 
                cultura, transporte y lugares imprescindibles. Sin duda, 
                volveré a contar con ellos para un futuro viaje con mi 
                enamorada."
            </p>
                 <p><strong>Excelente trabajo</strong></p>
            </div>
        </div>
        </div>
            
        
      </>
    )
  }
  
  export default Testimonios