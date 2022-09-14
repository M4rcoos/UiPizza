import { Header } from "./components/Header";
import style from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={style.content}>
        <h1> la caravana</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
          placerat dui. Vestibulum ut felis et lorem porta congue vitae nec
          turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
        </p>
        <div className={style.contentImg}>
        <img src="src\assets\pizza-removebg-preview.png" />
        </div>
        
      </div>
    </div>
  );
}
