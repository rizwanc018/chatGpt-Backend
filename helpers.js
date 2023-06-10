import { Configuration, OpenAIApi } from "openai";
import { config } from 'dotenv'
config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const promptAi = async (prompt) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.data.choices[0].text
}

export const promptDALLE = async (prompt) => {
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024"
    });
    const img_url =  response.data.data[0].url
    return img_url
}