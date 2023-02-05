// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  
  const prompt = req.query.prompt;

  if(!prompt) {
    res.status(400).json({ error: "No prompt provided" });
    return;
  }

  if(prompt.length > 2048) {
    res.status(400).json({ error: "Prompt too long" });
    return;
  }

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    max_tokens: 1500,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  })

  const quote = completion.data.choices[0].text;

  res.status(200).json({ quote });
 
} 