import axios from 'axios';

export const fetchRandomDog = async () => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        return response; // This will include the response data, status, and other information
    } catch (error) {
        // Handle or throw the error as needed
        console.error('Error fetching random dog:', error);
        throw error;
    }
}

export const fetchRandomDogBatch = async (count) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/' + count);
        return response; // This will include the response data, status, and other information
    } catch (error) {
        // Handle or throw the error as needed
        console.error('Error fetching random dog:', error);
        throw error;
    }
}