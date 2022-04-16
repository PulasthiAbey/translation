const { Translate } = require("@google-cloud/translate").v2;
require("dotenv").config;

const { CREDENTIALS } = require("../CREDENTIALS");

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

translateText("Oggi lunedi", "en")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });