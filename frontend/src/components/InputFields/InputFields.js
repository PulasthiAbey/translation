import React, { useState } from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import axios from "axios";

import "./InputFields.css";

const InputFields = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [fetchResponse, setFetchResponse] = useState({});
  const [text, setText] = useState("");

  const settingUpValue = async (text) => {
    setText(text);
    console.log(text);
  };

  const translate = async () => {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    };

    console.log("Sample Text", text);

    // axios
    //   .post("http://localhost:9090/api/translate", requestOptions)
    //   .then((response) => {
    //     setFetchResponse(response);
    //     setTranslatedText(fetchResponse.translatedText);
    //   })
    //   .catch((error) => {
    //     console.log(
    //       `Error Occurred while trying to translate ${error.message}\nError ==> ${error}`
    //     );
    //   });

    const responseType = await axios.post(
      "http://localhost:9090/api/translate",
      requestOptions
    ).promise;

    console.log(responseType);

    if (responseType !== "") {
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
          <button type="submit" className="button" onClick={translate()}>
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
