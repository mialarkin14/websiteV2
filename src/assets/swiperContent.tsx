import c from "./skills/c.png";
import css from "./skills/css.png";
import html from "./skills/html.png";
import java from "./skills/java.png";
import python from "./skills/python.png";
import react from "./skills/react.png"
import riscv from "./skills/riscv.png"
import TypeWriter from "../components/typeWritter";
  
  export const SwiperImages = [
    {
      title: "python",
      content: <TypeWriter className={"python"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
      repeatT={Infinity}></TypeWriter>,
      Image: python,
    },
    {
      title: "c",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      Image: c,
    },
    {
      title: "risc-v",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Image: riscv,
    },
    {
      title: "java",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Image: java,
    },
    {
      title: "css",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Image: css,
    },
    {
      title: "html",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Image: html,
    },
    {
      title: "react",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Image: react,
    },

  ];