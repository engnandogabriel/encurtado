import React, { useContext, useState } from "react";
import { HomeStyles } from "../../styles/Home/index.js";
import Input from "../../Components/Input/index.jsx";
import Button from "../../Components/Button/index.jsx";
import { ContextAPIPublic } from "../../Context/api/ContextAPI.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const context = useContext(ContextAPIPublic);
  const [inputValue, setInputValue] = useState("");

  const handleClick = async () => {
    await context.shortenURL(inputValue);
    setInputValue("");
  };

  return (
    <HomeStyles className="aniamteLeft">
      <h2>URL Shortner</h2>
      <div className="shortner-url">
        <Input
          value={inputValue}
          setValue={setInputValue}
          placeholder="Insira uma URL longa para encurtar"
        />
        {context.load ? (
          <>
            <Button value="Encurtando..." onClick={handleClick} />
            <p>Exemplo: https://www.google.com</p>
          </>
        ) : (
          <>
            <Button value="Shorten URL" onClick={handleClick} />
            <p>Exemplo: https://www.google.com</p>
          </>
        )}
      </div>
      {context.error && (
        <>
          <div className="erro-shortner">
            <FontAwesomeIcon icon={faBomb} />
            <p>{context.error}</p>
          </div>
        </>
      )}
      {context.data && (
        <>
          <div className="shortened-url">
            <h3>URL Encurtada</h3>
            <div>
              <h4>{context.data.url}</h4>
            </div>
          </div>
          <div className="qrCode">
            <img
              src={`data:image/png;base64,${context.data.QrCode}`}
              alt="QR Code"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </>
      )}
    </HomeStyles>
  );
}

export default Home;
