import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './root.css';
import ReactOdometer from "react-odometerjs";

export default function Root() {
  const [numberOfBens, setNumberOfBens] = useState(0);
  const [numSuffix, setNumSuffix] = useState("th");

  const numOfBensAddOne = () => {
    setNumberOfBens(num => num + 1);
  }
  
  const socials = [
    {
      name: "Instagram",
      user: "@lilbenuniverse",
      link: "https://www.instagram.com/lilbenuniverse"
    },
    {
      name: "Tiktok",
      user: "@lilbenuniverse",
      link: "https://www.tiktok.com/@lilbenuniverse"
    },
    {
      name: "Telegram channel updates",
      user: "@lilbenuniverse",
      link: "https://t.me/lilbenuniverse"
    },
    {
      name: "[COMING SOON] Contact us",
      user: "@lilbenuniverse_bot",
      link: "https://t.me/lilbenuniverse"
    }]
    
  useEffect(() => {
    if (!(10 < numberOfBens && numberOfBens < 20)) {
      switch (numberOfBens % 10) {
        case 1:
          setNumSuffix("st");
          break;
        case 2:
          setNumSuffix("nd");
          break;
        case 3:
          setNumSuffix("rd");
          break;
        default:
          setNumSuffix("th")
          break;
        }
    } else {
      setNumSuffix("th");
    }
  })

    return (
      <>
        <div id="sidebar">
          <h1>Thank you for your support!</h1>
          <p>We are currently in the process of building Lil Ben's Universe! Thank you for being the...</p>
          <ReactOdometer value={numberOfBens}></ReactOdometer><text>{" " + numSuffix}</text>
          {/* <br></br><button onClick={()=> numOfBensAddOne()}>Press</button> */}
          <p>...Lil Ben supporter! <br/><br/>Thanks to your help, we will be able to continue this project and build our dream game, Lil Ben's Universe. <br/> As our first supporters, you will have early-bird access to our game when launched, <br/> with exclusive early-bird gifts as well. </p>
          <h3>Let's keep in touch!</h3>
          <div className="socialsDiv">
            {socials.map(x => {
              return (
                <Link to={x.link} style={{textDecoration: "none",  display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="linkContainer">
                  <p>
                  {x.name + ": " + x.user}
                  </p>
                  </div>
                </Link>
              )
            })}

          </div>
          
        <Outlet />
        <div className="contactUsDiv">
          <p>
            For any suggestions, feedback, or random thoughts our email is here: lilbenuniverse@gmail.com!
          </p>

        </div>

        </div>
      </>
    );
  }