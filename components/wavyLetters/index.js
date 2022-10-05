import styles from "./wavyLetters.module.css";

export default function WavyLetters(props) {
  const { word, timeDuration, fontWeight, fontFamily, fontSize ,marginLeft} = props;

  const styleProps = {
    fontWeight: fontWeight || 'normal',
    fontFamily: fontFamily || "Lausanne-Regular,sans-serif",
    fontSize: fontSize || "52px",
    // marginLeft: marginLeft || "1px"
  };

  let time = timeDuration || 0;

  const renderWord = word.split("").map((letter, index) => {
    index % 10 === 0 && time++;
    letter === " " && (letter = <span style={{ marginLeft: "13px", display:"inline-block" }}></span>);

    const timeDuration = `${time}.${index}`;
    return (
      <div
        key={index}
        className={styles.letter}
        style={{ animationDuration: `${timeDuration}s`, ...styleProps }}
      >
        {letter}
      </div>
    );
  });

  return <div className={styles.wavy_letters}>{renderWord}</div>;
}
