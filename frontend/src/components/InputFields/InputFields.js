import React, { useState } from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import axios from "axios";

import "./InputFields.css";

const InputFields = async () => {
  const [translatedText, setTranslatedText] = useState("");
  const [fetchResponse, setFetchResponse] = useState({});
  const [text, setText] = useState("");

  const settingUpValue = (text) => {
    setText(text);
    console.log(text);
  };

  const translateValues = async () => {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    };

    console.log("Sample Text", text);

    const responseAxios = await axios.post(
      "http://localhost:9090/api/translate",
      requestOptions
    ).promise;

    if (responseAxios !== "") {
      setFetchResponse(responseAxios);
      console.log(fetchResponse);
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
            onChange={(e) => settingUpValue(e.target.value)}
          />
          {/* </div> */}
        </div>
        <div className="icon-middle">
          <button
            type="submit"
            className="button"
            onClick={async () => await translateValues()}
          >
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
