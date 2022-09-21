import styles from "./Ordered.module.css";

export function Ordered({img, img2, img3}) {
  return (
    <>
      <section className={styles.section}>
      <div className={styles.prato1}>
        <img src={img} alt="" />
        <div>
          <header className={styles.tituloDoPrato}>
            <h3>
              LOREM IPSUM <span>$25</span>
            </h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac placerat dui.
          </p>
        </div>
      </div>
        <div className={styles.prato1}>
        <img src={img} alt="" />
        <div>
          <header className={styles.tituloDoPrato}>
            <h3>
              LOREM IPSUM <span>$25</span>
            </h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac placerat dui.
          </p>
        </div>
      </div>
    </section>
    
    </>
  
  );
}
