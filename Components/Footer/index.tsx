import React from "react";
import Styles from "./index.module.scss";
import Link from "next/link";
import Logo from "../../public/logo.jpg";
import Image from "next/image";
import call from '../../public/call white.png';
import viber from '../../public/viber_mobile.png';
import discord from '../../public/discord_call.png';
import facebook from '../../public/facebookfooter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

function Index() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.upperfooter}>
        <div className={Styles.logo}>
          <Link href="/home">
            <Image src={Logo} className={Styles.img}  alt="pic"/>
          </Link>
          <div className={Styles.Content}>
            Sufficient Premium Club brings you a variety of in-game services. Get
            rid of your boring default castle skin and join us to try our
            raffles.<span className={Styles.span_con}>Get all packs in the game at discounted rates. Bad luck in-game with skins? Get them from us. DM to know more</span>
          </div>
        </div>
        <div className={Styles.contact}>
          <h1>Content Info</h1>
          <li className={Styles.call_caintainer}> 

            <FontAwesomeIcon icon={faPhone} className={Styles.icon} />
            <a href="tel:+918210085118">
            +91 8210085118
            </a>
          </li>
          <li className={Styles.call_caintainer}>
            <Image src={call} className={Styles.img_call} alt="Viber" />
            <a href="https://invite.viber.com/?g2=AQAusJqNJtfIzU8LH8LWnBAuvbmC3ag3bNyVftqLDNZAh%2FV1XT1%2FQ8p1cvglNgwr">Viber</a>
          </li>
          <li className={Styles.call_caintainer}>
            <Image src={discord} className={Styles.img_call} alt="Discord" />
            <a href="https://discord.com/invite/TGkbUAUm">Discord</a>
          </li>
        </div>
      </div>
      <hr />
      <div className={Styles.lower}>
        <li>
          © {new Date().getFullYear()} Sufficient Premium Club. All rights
          reserved.
        </li>
        <li> 
          <a href="https://wa.me/918210085118" target="_blank" rel="noopener noreferrer">
            <img src="https://i.pinimg.com/originals/5a/5c/53/5a5c53a8cf5124a6681a5db0493b549a.png" alt="Chat on WhatsApp" className={Styles.whatsappIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/share/NsuJjh5DgDfckfe8/?mibextid=A7sQZp" target="_blank" rel="noopener noreferrer">
            <Image src={facebook} alt="Facebook" className={Styles.facebook_icon} />
          </a>
        </li>
      </div>
    </div>
  );
}

export default Index;