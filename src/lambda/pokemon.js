const axios = require('axios');

exports.handler = async (event) => {
    try {
        const { id } = event.queryStringParameters;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 422,
            body: String(error),
        };
    }
};
