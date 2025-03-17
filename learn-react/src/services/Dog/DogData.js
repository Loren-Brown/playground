import { fetchRandomDog, fetchRandomDogBatch } from './DogService';
    
export const getRandomDogs = async (count) => {
    let requestArray = []
    for (let i = 0; i < count; i++) {
        requestArray.push(fetchRandomDog());
    }

    try {
        const response = await Promise.all(requestArray);
        const data = response.map((response) => response.data);
        console.log(data.flat());
        return data
      } catch {
        throw Error("Promise failed");
      }
};

export const getRandomDogsBatch = async (count) => {
  try {
      const response = await fetchRandomDogBatch(count);
      return response.data
    } catch (error) {
      console.log(error)
      throw Error("Promise failed");
    }
};