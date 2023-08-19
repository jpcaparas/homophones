export interface HomophoneResponse {
    word: string;
    score: number;
    numSyllables: number;
}

export interface HomophoneOptions {
    max?: number; 
}
