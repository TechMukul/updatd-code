import React from "react";
import image from "../../public/contact.jpeg";
import Styles from "./index.module.scss";
import Image from "next/image";
import viber from "../../public/viber.png";
import discord from "../../public/discord.png";
import call from "../../public/call.png";
import fb from "../../public/fb.png";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const ContactUs = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.imageContainer}>
          <Image src={image} alt="Contact Us" className={Styles.image} />
          <div className={Styles.overlay}>
            <div className={Styles.contactInfo}>
              <p className={Styles.head}>Contact Us</p>
              <p className={Styles.subheading}>
                🎉 Join the Ultimate Rise of Castles: Ice &amp; Fire Community! 🎉
              </p>
              <ul className={Styles.bullets}>
                <li>🔥 Get exclusive deals on skins, farms, and more!</li>
                <li>
                  🔥 Access insider tips and strategies to dominate the game!
                </li>
                <li>
                  🔥 Connect with the largest and most active community of
                  players.
                </li>
              </ul>
              <div className={Styles.offering}>
                <p className={Styles.offer}>
                  Don&apos;t miss out on these amazing offers! Join us now and take
                  your gameplay to the next level!
                </p>
              </div>
              <div className={Styles.contactButtons}>
                <div className={Styles.buttonWrapper}>
                  <a
                    href="https://line.me/ti/p/~chen2245734"
                    className={Styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={Styles.img}>
                      <img src="https://cdn-icons-png.flaticon.com/512/167/167649.png" alt="Line" />
                      <h1>Chat on Line</h1>
                    </div>
                    {/* <p>Use the LINE messaging app to chat directly with our team. Simply click the button below to start a conversation and get all your questions answered instantly</p> */}
                  </a>
                </div>
                <div className={Styles.buttonWrapper}>
                  <a
                    href="https://invite.viber.com/..."
                    className={Styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={Styles.img}>
                      <Image src={viber} alt="Viber" />
                      <h1>Join on Viber</h1>
                    </div>
                    {/* <p>Click the button below to start a chat with our team, where you can ask questions, get assistance, or connect with our community. We look forward to hearing from you!</p> */}
                  </a>
                </div>
                <div className={Styles.buttonWrapper}>
                  <a
                    href="https://discord.com/invite/TGkbUAUm"
                    className={Styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={Styles.img}>
                      <Image src={discord} alt="Discord" />
                      <h1>Join our Discord</h1>
                    </div>
                    {/* <p>Connect with our vibrant community on Discord for the latest updates, exclusive offers, and lively discussions. Click the button below to join our server, where you can interact with fellow members, get support, and stay up-to-date with all things related to our game</p> */}
                  </a>
                </div>
                <div className={Styles.buttonWrapper}>
                  <a href="tel:+918210085118" className={Styles.button}>
                    <div className={Styles.img}>
                      <Image src={call} alt="Call" />
                      <h1>+91 8210085118</h1>
                    </div>
                    {/* <p>Have a question or need immediate assistance? Click the button below to call us directly. Our team is ready to provide support and answer any inquiries you might have. We look forward to speaking with you</p> */}
                  </a>
                </div>
                <div className={Styles.buttonWrapper}>
                  <a
                    href="https://www.facebook.com/share/NsuJjh5DgDfckfe8/?mibextid=A7sQZp"
                    className={Styles.button}
                  >
                    <div className={Styles.img}>
                      <Image src={fb} alt="Facebook" />
                      <h1>www.facebook.com</h1>
                    </div>
                    {/* <p>Have a question or need immediate assistance? Click the button below to call us directly. Our team is ready to provide support and answer any inquiries you might have. We look forward to speaking with you</p> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className={Styles.footer}>
          <Footer />
        </div>
    </div>
  );
};

export default ContactUs;
