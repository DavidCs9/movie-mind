const COHERE_API_KEY = 'B94nbu2xiHwXSaL9UdEwm6wOggpM3ypBjwSABvU5'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'


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
            "Authorization": `BEARER ${COHERE_API_KEY}`,
            "Content-Type": 'application/json',
            "Cohere-Version": '2022-12-06'
            },
        body: JSON.stringify(data)
        }).then(response => response.json())
    
    console.log(response.generations[0].text)

    return response.generations[0].text
}