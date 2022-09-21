import { Ordered } from './Ordered'
import styles from './OurMenu.module.css'
import prato1 from '/assets/Prato1.png'
import prato2 from '/assets/Prato2.png'
import prato3 from '/assets/Prato3.png'


export function OurMenu(){
    return(
        <>
        <header>
            <h2 className={styles.titleMenu}>Our menu</h2>
            <ul className={styles.list}>
                <li><a href="#">All</a></li>
                <li><a href="#">starters</a></li>
                <li><a href="#">main</a></li>
                <li><a href="#">Drinks</a></li>
                <li><a href="#">Promotion</a></li>
            </ul>
        </header>
        <section>
            <Ordered img={prato1}/>
            <Ordered img={prato2}/>
            <Ordered img={prato3}/>
            <Ordered img={prato1}/>
            <Ordered img={prato2}/>
            <Ordered img={prato3}/>
 

        </section>
        </>
    )
}