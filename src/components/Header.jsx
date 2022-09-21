import style from './Header.module.css'

export function Header (){
    return(
        <div className={style.content}>
            <h3 className={style.logo}>la caravana</h3>
            <div className={style.nav}>
                <ul>
                    <li> <a href="#Home">Home</a> </li>
                    <li> <a href="#AboutUS">About US</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
        
            </div>
           
        </div>
    )
}