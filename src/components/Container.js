import { Parallax } from "react-parallax";
import "./Container.css";

const Container = (props) => (
  <Parallax
    blur={{ min: -15, max: 10 }}
    bgImage={props.img}
    bgImageAlt={props.alt}
    strength={500}
  >
    <div style={{ height: "90vh" }}>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  </Parallax>
);

export default Container;
