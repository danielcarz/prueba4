import React from "react";

//IMAGES
import logo from '../assets/images/LOGO ASHIRA 2020.png'

const Introduction = () => {


    return (

        <section className="introduction_container">
            <figure className="logo_wrapper">
                <img src={logo} alt="logo ashira" />
            </figure>

            <nav className="navbar">
                <ul>
                    <a href=""><li>item1</li></a>
                    <a href=""><li>item1</li></a>
                    <a href=""><li>item1</li></a>
                </ul>
            </nav>

            <section className="lema_ashira_wrapper">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero debitis expedita obcaecati rem dicta, quidem aspernatur earum voluptatum atque fuga.</p>
            </section>
        </section>
    )
}

export {Introduction}