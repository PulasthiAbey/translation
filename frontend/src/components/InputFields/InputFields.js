import React, { useState } from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import "./InputFields.css";

const InputFields = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [fetchResponse, setFetchResponse] = useState({});
  const [text, setText] = useState("");

  const translate = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    };

    fetch("http://localhost:9090/translate", requestOptions)
      .then((response) => {
        setFetchResponse(response);
      })
      .catch((error) => {
        alert(
          `Error Occurred while trying to translate ${error.message}\nError ==> ${error}`
        );
      });

    if (fetchResponse.status === "SUCCESS") {
      setTranslatedText(fetchResponse.translatedText);
    } else {
      alert(
        `Error Occurred while trying to translate\nError ==> ${fetchResponse}`
      );
    }
  };

  return (
    <>
      <div className="padding-top" />
      <div className="input-fields">
        <div className="left-field">
          <div className="field-header">Sinhala</div>
          {/* <div className="border"> */}
          <input
            type="text"
            id="leftInput"
            placeholder="Paste Text here"
            className="field"
            onChange={(e) => setText(e.target.value)}
          />
          {/* </div> */}
        </div>
        <div className="icon-middle">
          <button className="button" onClick={translate()}>
            <ChangeCircleIcon fontSize="large" />
          </button>
        </div>
        <div className="right-field">
          <div className="field-header">English</div>
          {/* <div className="border"> */}
          <div className="field" id="translated" value={translatedText}></div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default InputFields;
