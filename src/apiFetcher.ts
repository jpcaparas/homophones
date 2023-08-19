import axios from 'axios';
import { HomophoneResponse } from './types';

export class ApiFetcher {
    private baseURL: string;

    constructor(baseURL: string = 'https://api.datamuse.com') {
        this.baseURL = baseURL;
    }

    public async fetchHomophones(word: string, maxResults: number = 10): Promise<HomophoneResponse[]> {
        try {
            const response = await axios.get(`${this.baseURL}/words`, {
                params: {
                    sl: word,
                    max: maxResults
                }
            });
            return response.data.map((entry: any) => ({
                word: entry.word,
                score: entry.score,
                numSyllables: entry.numSyllables
            }));
        } catch (error) {
            console.error('Error fetching homophones:', error);
            return [];
        }
    }
}
