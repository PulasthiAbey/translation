const {
    Translate
} = require("@google-cloud/translate").v2;
require("dotenv").config;
require("dotenv").config();
const express = require("express");
const router = express.Router();

const {
    CREDENTIALS
} = require("../CREDENTIALS");

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id,
});

const detectLanguage = async (text) => {
    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detecting the language ==> ${error}`);
        return 0;
    }
};

const translateText = async (text, targetLanguage) => {
    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translating the language ==> ${error}`);
        return 0;
    }
};

router.post("/", async (req, res) => {
  const text = req.body.text;

  try {
    const resDetect = await detectLanguage(text);
    const resTranslate = await translateText(text, "si");

    res.status(200).json({
      status: "SUCCESS",
      detectLanguage: resDetect,
      translatedText: resTranslate,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "ERROR",
      message: error.message,
      error: error,
    });
  }
});

module.exports = router;