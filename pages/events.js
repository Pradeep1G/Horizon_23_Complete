
import styles from "../styles/events.module.css";
import fstyles from "../styles/Home.module.css";
import Image from "next/image";
import footer_sist from "../public/footer_sist.png"
import acm_logo from "../public/acm_logo.png"
import acmw_logo from "../public/acmw_logo.png"
import { useState } from "react";
import CardsDisplay from "../Components/CardsDisplay";
import Navbar from "../Components/Navbar";


export default function Events(){



    const [techbold, settechbold] = useState("bold");
    const [ntechbold, setntechbold] = useState("normal");
    const [techborder, settechborder] = useState("solid blue");
    const [ntechborder, setntechborder] = useState("none");
  
    const [title, settitle] = useState("Tech");
    const openNTech = (e) => {
      e.preventDefault();
      settitle("NTech");
      settechbold("normal");
      setntechbold("bold");
      settechborder("none");
      setntechborder("solid blueviolet");
    };
    const openTech = (e) => {
      e.preventDefault();
      settitle("Tech");
      setntechbold("normal");
      settechbold("bold");
      setntechborder("none");
      settechborder("solid blueviolet");
    };




    return (
        <>
            <Navbar />
            <div className={styles.mainHead}>
                <h1>Events</h1>
            </div>



            <div>
            <div className={styles.headcontainer}>
        <div className={styles.EventsHead}>
          <p
            style={{
              fontWeight: techbold,
              borderBottom: techborder,
              borderColor: "blueviolet"
            }}
            className={styles.EventType}
            onClick={openTech}
          >
            Technical
          </p>
          <p
            style={{
              fontWeight: ntechbold,
              borderBottom: ntechborder,
              borderColor: "blueviolet"
            }}
            className={styles.EventType}
            onClick={openNTech}
          >
            Non-Technical
          </p>
        </div>
      </div>
            </div>



            <div className="SwipeContainer">
        <CardsDisplay EventType={title} />
        {/* <Appx /> */}
      </div>
            

      <div className={fstyles.copyright_container}>
        <div className={fstyles.footer_img_container}>
          <Image className={fstyles.footer_img} width={100} height={80} src={footer_sist} alt="sist_logo"/>
          <Image className={fstyles.footer_img} src={acm_logo} alt="acm logo"/>
          <Image className={fstyles.footer_img} src={acmw_logo} alt="acmw logo"/>
        </div>
        <div className={fstyles.sep}></div>
        <p>Copyright ©2023 Association for Computing Machinery (ACM) SIST All rights reserved</p>
      </div>

        </>
    )
}
