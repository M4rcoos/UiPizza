import style from './Header.module.css'

export function Header (){
    return(
        <div className={style.content}>
            <h3 className={style.logo}>la caravana</h3>
            <div className={style.nav}>
            <p>Home</p>
            <p>About US</p>
            <p>Menu</p>
            <p>Contact</p>
            </div>
           
        </div>
    )
}