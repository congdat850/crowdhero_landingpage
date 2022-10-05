import styles from "./wavyLetters.module.css";

export default function WavyLetters(props) {
  const {
    word,
    timeDuration,
    fontWeight,
    fontFamily,
    fontSize,
    styleWord,
    linear,
  } = props;

  const styleProps = {
    fontWeight: fontWeight || "normal",
    fontFamily: fontFamily || "Lausanne-Regular,sans-serif",
    fontSize: fontSize || "52px",
  };

  const calculatorTimeDuration = (index) => {
    let time = timeDuration || 0;
    return `${0.8 + time + (index + 1) / 10}`;
  };

  const calculatorLinear = (index) => {
    const totalLetter = word.split("").length;
    const { from, to } = linear;
    const red = from.r + ((index + 1) * (to.r - from.r)) / totalLetter;
    const green = from.g + ((index + 1) * (to.g - from.g)) / totalLetter;
    const blue = from.b + ((index + 1) * (to.b - from.b)) / totalLetter;
    const alpha = from.a + ((index + 1) * (to.a - from.a)) / totalLetter;
    
    return `rgba(${red},${green},${blue},${alpha})`;
  };

  const renderWord = word.split("").map((letter, index) => {
    letter === " " &&
      (letter = (
        <span style={{ marginLeft: "13px", display: "inline-block" }}></span>
      ));

    const timeDuration = calculatorTimeDuration(index);
    return (
      <div
        key={index}
        className={styles.letter}
        style={{
          animationDuration: `${timeDuration}s`,
          color: `${linear ? calculatorLinear(index) : ""}`,
          ...styleProps,
        }}
      >
        {letter}
      </div>
    );
  });

  return (
    <div style={{ ...(styleWord || {}) }} className={styles.wavy_letters}>
      {renderWord}
    </div>
  );
}
