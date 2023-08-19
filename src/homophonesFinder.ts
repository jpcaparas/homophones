import { HomophoneResponse, HomophoneOptions } from './types';
import { ApiFetcher } from './apiFetcher';

export class HomophonesFinder {
    private fetcher: ApiFetcher;

    constructor(fetcher: ApiFetcher = new ApiFetcher()) {
        this.fetcher = fetcher;
    }

    public async find(word: string, options: HomophoneOptions = {}): Promise<string[]> {
        const homophonesData: HomophoneResponse[] = await this.fetcher.fetchHomophones(word, options.max);
        return homophonesData.map(entry => entry.word);
    }
}
