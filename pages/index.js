// import Head from "next/head";
import Image from "next/image";
import WavyLetters from "../components/wavyLetters";
import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let lastScrollTop = 0;
    let check = true;

    const commingSoon = document.getElementById("comming_soon");
    const klabs = document.getElementById("klabs");
    const scroll = document.getElementById("scroll");

    scroll.addEventListener("scroll", (event) => {
      if (scroll.scrollTop < lastScrollTop && check) {
        check = false;
        commingSoon.style.visibility = "visible";
        commingSoon.style.opacity = 1;

        klabs.style.visibility = `hidden`;
        klabs.style.opacity = 0;
        klabs.style.transition = `visibility 0s linear 300ms, opacity 300ms`;

        for (const child of commingSoon.children) {
          // child.style.animationPlayState = "initial"
          for (const childSmall of child.children) {
            const className = childSmall.className.split(" ")[0];
            if (className !== "") {
              childSmall.classList.remove(`${className}`);
            }
            setTimeout(function () {
              if (className !== "") childSmall.classList.add(className);
            });
          }
        }

        return;
      }

      lastScrollTop = scroll.scrollTop <= 0 ? 0 : scroll.scrollTop;
      if (scroll.scrollTop + scroll.offsetHeight >= scroll.scrollHeight) {
        check = true;
        klabs.style.visibility = "visible";
        klabs.style.opacity = 1;

        commingSoon.style.visibility = `hidden`;
        commingSoon.style.opacity = 0;
        commingSoon.style.transition = `visibility 0s linear 300ms, opacity 300ms`;

        for (const childSmall of klabs.children[0].children) {
          const className = childSmall.className.split(" ")[0];
          if (className !== "") {
            childSmall.classList.remove(`${className}`);
            setTimeout(function () {
              childSmall.classList.add(className);
            });
          }
        }

        const childrenKlas = klabs.children[1];
        const classNameChildrenKlas = childrenKlas.className.split(" ")[0];
        if (classNameChildrenKlas !== "") {
          childrenKlas.classList.remove(`${classNameChildrenKlas}`);
          setTimeout(function () {
            childrenKlas.classList.add(classNameChildrenKlas);
          });
        }
      }
    });
  });
  return (
    <div className={styles.container}>
      <div id="scroll" className={styles.scroll}>
        <pre>This is line 1 This is line 2 This is line 3</pre>
      </div>
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
        <div id="comming_soon" className={styles.information} style={{}}>
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

        <div
          id="klabs"
          className={styles.information}
          style={{
            visibility: "hidden",
            transition: `visibility 0s linear 300ms, opacity 300ms`,
            opacity: 0,
          }}
        >
          <WavyLetters word="Work of" timeDuration={0} />
          <span className={styles.logo_klabs}>
            <Image src="/LogoKlabs.png" width={338.32} height={100} priority />
          </span>
        </div>

        <span className={styles.logo_main}>
          <Image src="/CrowdHero.gif" width={1280} height={720} priority />
        </span>
      </div>
    </div>
  );
}
