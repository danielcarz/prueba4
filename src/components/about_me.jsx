import React from "react";

//IMAGES AND ICONS
import icon_one from '../assets/emoticons/simbolos-de-reiki.png';
import icon_two from '../assets/emoticons/reiki.png';
import icon_three from '../assets/emoticons/simbolos-de-reiki(1).png';

const AboutMe = () => {


    return (

        <section className="about_me_container">
            <figure className="about_me_images">
                <img src="" alt="about me images" />
            </figure>

            <section className="about_me_info_wrapper">
                <h2>About me</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quidem quaerat recusandae nisi fugit aliquam tenetur praesentium sed corporis facilis laudantium nulla nobis molestias commodi eligendi, est quisquam aliquid laboriosam!</p>
                <figure className="about_me_icons">
                    <img src={icon_one} alt="icon" />
                    <img src={icon_two} alt="icon" />
                    <img src={icon_three} alt="icon" />
                </figure>
            </section>
        </section>
    )
}

export {AboutMe}