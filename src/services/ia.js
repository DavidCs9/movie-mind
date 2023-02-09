const API_KEY =  process.env.COHERE_API_KEY
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'

console.log(COHERE_API_KEY)

export async function recommendMovies(moodInput) {
    const data = {
        model: 'command-xlarge-nightly',
        prompt: `This is a movie recommender based in a mood. Tell me about three movies describing each in a paragraph, my mood is: ${moodInput}`,
        max_tokens: 400,
        temperature: 1.5,
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
            "Authorization": `BEARER ${API_KEY}`,
            "Content-Type": 'application/json',
            "Cohere-Version": '2022-12-06'
            },
        body: JSON.stringify(data)
        }).then(response => response.json())
    

    return response.generations[0].text
}