const { Translate } = require("@google-cloud/translate").v2;
require("dotenv");

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_Id,
});

const detectLanguage = async (text) => {
  try {
    let response = await translate.detect(text);
    return response[0].language;
  } catch (error) {
    console.log(`Error at detecting the language ${error}`);
    return 0;
  }
};

const translateText = async (text, targetLanguage) => {
  try {
  } catch (error) {}
};
