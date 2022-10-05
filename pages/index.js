// import Head from "next/head";
import Image from "next/image";
import WavyLetters from "../components/wavyLetters";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.logoHeader}>
          <Image
            src="/LogoCrowdHero.png"
            alt="Vercel Logo"
            width={264}
            height={40}
          />
        </span>
      </div>
      <span className={styles.spot_top}>
        <Image src="/spot_top.png" alt="Vercel Logo" width={400} height={440} />
      </span>

      <div className={styles.main}>
        <div className={styles.information} style={{}}>
          <WavyLetters word="New product is" timeDuration={0} />
          <WavyLetters
            word="COMING SOON"
            timeDuration={0}
            fontSize={"76px"}
            fontWeight={"bold"}
            linear={{
              from: {
                r: 43,
                g: 91,
                b: 172,
                a: 0.5,
              },
              to: {
                r: 66,
                g: 255,
                b: 255,
                a: 0.5,
              },
            }}
            styleWord={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "#42FFFF",
            }}
          />
        </div>

        <span className={styles.logo_main}>
          <Image
            src="/test3.gif"
            alt="Vercel Logo"
            width={1280}
            height={720}
            priority
          />
        </span>
      </div>
    </div>
  );
}
