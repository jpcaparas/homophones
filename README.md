# Homophones Finder

A utility to find homophones of a given word using the Datamuse API.

## Installation

```bash
npm install homophones
```

## Usage

### Basic Usage

```javascript
const { HomophonesFinder } = require('homophones');

const finder = new HomophonesFinder();

finder.find('bear').then(homophones => {
    console.log(homophones);  // e.g., ['bear', 'bare']
});
```

### Advanced Usage

(Remember that records have to match the response interface `HomophoneResponse`, which is derived from the Datamuse API.)

If you want to provide a custom fetcher or set a different API endpoint:

```javascript
const { HomophonesFinder, ApiFetcher } = require('homophones');

const customFetcher = new ApiFetcher('https://customapi.com');
const finder = new HomophonesFinder(customFetcher);

finder.find('lead').then(homophones => {
    console.log(homophones);  // e.g., ['lead', 'led']
});
```

## Running Tests

Before running the tests, ensure you've installed the necessary dev dependencies:

```bash
npm install
```

Then, run the tests:

```bash
npm test
```