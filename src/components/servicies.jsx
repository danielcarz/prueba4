import React from "react";

//IMAGES
import emoticon from '../assets/emoticons/masaje-corporal.png'
import reiki from '../assets/images/IMG_6885.jpg'


const Servicies = () => {

    return(
        <section className="servicies_container">

          
           <figure className="emoticons_servicies">

                <img src={emoticon} alt="emoticon" />
           
           </figure>
          
           <h2 className="subtittle">REFLEXIOLOGIA</h2>
           
           <figure className="image_servicios_wrapper">
                <img src={reiki} alt="Servicios" />
           </figure>

           <div className="text_servicie_wrapper">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus at itaque dignissimos ipsam laborum nostrum ipsum sunt! Totam, inventore. Soluta at porro recusandae ullam cumque praesentium voluptatem iste sed?
                </p>
                <p>$ 100.000.00</p>
           </div>

           <div className="button_servicies_wrapper">
                <button className="button_servicies">Reserva</button>
           </div>
           
        </section>
    )
}

export { Servicies}