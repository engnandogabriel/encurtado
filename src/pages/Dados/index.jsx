import React, { useContext, useState } from "react";
import { DadosStyles } from "../../styles/Dados/index.js";
import Input from "../../Components/Input/index.jsx";
import Button from "../../Components/Button/index.jsx";
import { ContextAPIPublic } from "../../Context/api/ContextAPI.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBomb } from "@fortawesome/free-solid-svg-icons";

function Dados() {
  const context = useContext(ContextAPIPublic);
  const [inputValue, setInputValue] = useState("");

  const handleClick = async () => {
    await context.getURL(inputValue);
    setInputValue("");
  };

  return (
    <DadosStyles className="aniamteLeft">
      <h2>URL Shortner</h2>
      <div>
        <Input
          value={inputValue}
          setValue={setInputValue}
          placeholder="Pesquise sua URL"
        />
        {context.load ? (
          <>
            <Button value="Pesquisando..." onClick={handleClick} />
          </>
        ) : (
          <>
            <Button value="Pesquisar" onClick={handleClick} />
          </>
        )}
        <p>Exemplo: AjfkB</p>
        {context.error && (
          <>
            <div className="erro-find">
              <FontAwesomeIcon icon={faBomb} />
              <p>{context.error}</p>
            </div>
          </>
        )}
      </div>
      {context.data && (
        <>
          <div>
            <div className="link-data">
              <div className="link-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className="link-text">
                <h4>{context.data.longUrl}</h4>
                <p>{context.data.shortenedUrl}</p>
              </div>
            </div>
          </div>
          <div className="qrCode">
            <img
              src={`data:image/png;base64,${context.data.qrCode}`}
              alt="QR Code"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </>
      )}
    </DadosStyles>
  );
}

export default Dados;
