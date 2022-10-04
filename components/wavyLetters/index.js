// import Head from "next/head";

import styles from "./wavyLetters.module.css";
// import styles from "../styles/Home.module.css";

export default function WavyLetters(props) {
  const { word } = props;

  const renderWord = word.split("").map((letter,index) => {
    return <div className={styles.letter} style = {{animationDuration:`${(index+1)*0.6}s`}}>{letter}</div>;
  });

  return <div className={styles.wavy_letters}>{renderWord}</div>;
}
