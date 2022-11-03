import got from 'got';
import * as cheerio from 'cheerio';

(async function () {
    const url = 'https://metalkalender.dk';
    const response = await got(url, { encoding: 'latin1'});

    // console.log(response);

    const $ = cheerio.load(response.body)

    const result = $('td:contains("Århus")');
    console.log(result);
})();
