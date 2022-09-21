import styles from './Footer.module.css'
import pizza from '../../public/assets/pizza-removebg-preview.png'
import instagram from '/assets/iconInstagram.png'
import facebook from '/assets/iconFacebook.png'
import whatssap from '/assets/iconWhats.png'


export function Footer (){
    return(
    <>
    <div className={styles.content}>
        <img className={styles.pizzaToFooter} src={pizza} alt="" />
        <h1 className={styles.h1Footer} id="Contact">La caravana</h1>
        <ul>
            <li>
                <img src={instagram} alt="Icone do Instagram" />
                </li>
            <li>
                <img src={facebook} alt="Icone do facebook" />
                </li>
            <li>
                <img src={whatssap} alt="Icone do whatssap" />
                </li>
        </ul>
    </div>
     <p className={styles.copyrigth}>TODOS LOS DERECHOS RESERVADOS © LA CARAVANA 2021 | DESIGN: MEZORA</p>
    </>
    
)}