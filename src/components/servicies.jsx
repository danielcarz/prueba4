import React from "react";

//sass
import '../sass/components/_servicies.scss'

const Servicies = () => {

    return(
        <section className="servicies_container">
           <figure className="emoticons_servicies">

                <img src="" alt="emoticon" />
           
           </figure>
               
           
           <figure className="image_servicios_wrapper">
                <img src="" alt="Servicios" />
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