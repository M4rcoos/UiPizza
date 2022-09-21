import style from "./About.module.css";
import imagemRestaurante from '/assets/restaurant-5521372_1920 1.png'

export function About() {
  return (
    <div className={style.container}>
      <section className={style.sectionAbout}>
        <h2 className={style.h2About} id="AboutUS">About us</h2>
        <p className={style.pAbout}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className={style.btn}>read more</button>
      </section>
      <div className={style.background}>
        <img className={style.imgRestaurant} src={imagemRestaurante} alt="" />
      </div>
    </div>
  );
}
