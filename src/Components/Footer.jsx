import React from 'react'
import styles from "../CSS/footer.module.css"
import {SiFacebook} from "react-icons/si"
import {BsInstagram,BsWhatsapp} from "react-icons/bs"
const Footer = () => {
  return (
    <div className={styles.footerdiv}>
        <div className={styles.middiv}>
        <div className={styles.leftdiv}>
            <img className={styles.logo} src="Images/PW logo.png" alt="" />
            <p>FOLLOW US ON</p>
            <div className={styles.icondiv}>
            <SiFacebook/>
            <BsInstagram/>
            <BsWhatsapp/>
            </div>
        </div>
        <div className={styles.rightdiv}>
            <div>
                <h2>Services</h2>
                <a href="">•→ Home</a>
                <a href="">•→ About Us</a>
                <a href="">•→ Services</a>
                <a href="">•→ Clients</a>
                <a href="">•→ Portfolio</a>
                <a href="">•→ Blog</a>
                <a href="">•→ Careers</a>
                <a href="">•→ Contact Us</a>
                
            </div>
            <div>
                <h2>Chandigarh</h2>
                <p>• 9987, Sector 30-t, Chandigarh</p>
                <p>• contact@partywitty.in</p>
                <p>• +91-0987654321</p>
            </div>
            <div>
                <h2>Punjab</h2>
                <p>• 9987, Sector 30-t, Chandigarh</p>
                <p>• contact@partywitty.in</p>
                <p>• +91-0987654321</p>
            </div>
            <div>
                <h2>USA</h2>
                <p>• 9987, Sector 30-t, USA</p>
                <p>• contact@partywitty.in</p>
                <p>• +91-0987654321</p>
            </div>
        </div>
        </div>
        <div className={styles.foot}>Party Witty<sup>TM</sup>All rights reserved.</div>
    </div>
  )
}

export default Footer