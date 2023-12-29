import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './root.css';
import ReactOdometer from "react-odometerjs";

export default function Root() {
  const [numberOfBens, setNumberOfBens] = useState(0);
  const [numSuffix, setNumSuffix] = useState("th");

  const numOfBensAddOne = () => {
    setNumberOfBens(num => num + 5);
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
          <h1>Hi!</h1>
          <p>We are currently in the process of building Lil Ben's Universe! Thank you for supporting Lil Ben! 
            <br/>
            <br/>
            Thanks to your help, we will be able to continue this project and build our dream game –– <b>Lil Ben's Universe</b>. </p>          
            <h3>Let's keep in touch!</h3>
          <div className="socialsDiv">
            {socials.map(x => {
              return (
                <Link to={x.link} style={{textDecoration: "none",  display: "flex", alignItems: "center", justifyContent: "center"}}>
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