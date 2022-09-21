import { Header } from "./components/Header";
import { About } from "./components/About";

import { Footer } from "./components/Footer";

import imagemPizza from "../public/assets/pizza-removebg-preview.png"
import map from "/assets/map.png"
import massa1 from '/assets/fazendoAPizza.png'
import massa2 from '/assets/massaPizza.png'

import style from "./App.module.css";
import "./global.css";
import { Link } from 'react-router-dom';


export function Home() {
  return (
    <div>
      <Header />
      <div className={style.content}>
        <h1 id="Home"> la caravana</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
          placerat dui. Vestibulum ut felis et lorem porta congue vitae nec
          turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
        </p>
        <div className={style.contentImg}>
          <img
            className={style.imgPizza}
            src={imagemPizza}
          />
        </div>
      </div>
      <About />
      <div className={style.sectionFindUs}>
        <h2 className={style.FindUs}>find us</h2>
        <section className={style.contentFindUs}>
          <img className={style.map} src={map} alt="" />
          <div className={style.descriptionFindUs}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              ATTENDANCE <br /> Monday to Sunday 12:00pm - 8:00pm
            </p>
            <p>
              DELIVERY <br /> Monday - Sunday 12:00pm - 8:00pm
            </p>
          </div>
        </section>
      </div>

      <div className={style.ourMenu}>
        <h2 className={style.ourMenuTitle} id="Menu">Our menu</h2>
        <p className={style.descriptionMenu}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className={style.contentimg} >
          <img className={style.imgMenu} src={massa1} alt=""  />
          <img className={style.imgMenu} src={massa2} alt="" />
        </div>
        <Link to="our-menu"><button>Menu</button></Link>
      </div>
      <Footer/>
      

    </div>
  );
}
