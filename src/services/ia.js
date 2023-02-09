const COHERE_API_KEY = 'B94nbu2xiHwXSaL9UdEwm6wOggpM3ypBjwSABvU5'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'

/*
curl --location --request POST 'https://api.cohere.ai/generate' \
  --header 'Authorization: BEARER B94nbu2xiHwXSaL9UdEwm6wOggpM3ypBjwSABvU5' \
  --header 'Content-Type: application/json' \
  --header 'Cohere-Version: 2022-12-06' \
  --data-raw '{
      "model": "command-xlarge-nightly",
      "prompt": "This is a movie recommender. Please make a list of four movies. My mood is fun",
      "max_tokens": 300,
      "temperature": 0.9,
      "k": 0,
      "p": 0.75,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "stop_sequences": [],
      "return_likelihoods": "NONE"
    }'
    */



export async function recommendMovies(moodInput) {
    const data = {
        model: 'command-xlarge-nightly',
        prompt: `Write 5 movies names based on the following theme: "${moodInput}"`,
        max_tokens: 300,
        temperature: 0.9,
        k: 0,
        p: 0.75,
        frequency_penalty:0,
        presence_penalty:0,
        stop_sequences: [],
        return_likelihoods: 'NONE'
    }

    const response 	= await fetch(COHERE_API_GENERATE_URL, {
        method: 'POST',
        headers: {
            "Authorization": `BEARER ${COHERE_API_KEY}`,
            "Content-Type": 'application/json',
            "Cohere-Version": '2022-12-06'
            },
        body: JSON.stringify(data)
        }).then(response => response.json())
    
    console.log(response.generations[0].text)

    return response.generations[0].text
}