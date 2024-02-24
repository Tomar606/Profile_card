import React from "react";
import "./UserProfileCard.css"
import pfp from './assets/pfp.jpg'
import lin from './assets/lin.png'
import x from './assets/x.png'
import insta from './assets/insta.png'
import mail from './assets/mail.png'

const UserProfileCard = () => {
    return (
        <div className="upc">
            <div className="gradient"></div>
            <div className="profile-down">
            <img src={pfp} alt="" />
            <div className="profile_title">Gaurav Singh Tomar</div>
            <div className="profile-description">
                19. <br/>
                Engineering Student. <br/>
                Aspiring Entrepreneur.
            </div>
            </div>
            <a href="https://www.linkedin.com/in/gaurav-singh-tomar-046a6a26a/">
            <img className="socialtiles" src={lin}></img></a>
            <a href="https://twitter.com/Gauravtomar606">
            <img className="socialtiles" src={x}></img></a>
            <a href="https://www.instagram.com/tomar_since2004/">
            <img className="socialtiles" src={insta}></img></a>
            <a href="mailto:itsgaurav606@gmail.com">
            <img className="socialtiles" src={mail}></img></a>
        </div>
    )
}

export default UserProfileCard