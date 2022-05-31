import React from "react"
import Icon from './icon.png';
import IconDiscord from './discord-icon2.png';
import IconGithub from './github.png';

function Contact(){
    return (
        <div class="wrapper">
            <div className="contact">
              <a href="mailto:nogot.9900@mail.com"  ><img className="icons" src={Icon} alt=""/>Email</a>
            </div>
            <div className="contact">
              <a href="https://discord.gg/t96aDMaMf7" target="_blank"><img className="icons" src={IconDiscord} alt=""/>Discord</a>
            </div>
            <div className="contact">
              <a href="https://github.com/ErenYeager04" target="_blank"><img className="icons" src={IconGithub} alt=""/>GitHub</a>
            </div>
        </div>
    )
}
export default Contact;