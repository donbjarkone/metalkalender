import got from 'got';
import * as cheerio from 'cheerio';

(async function () {
    const url = 'https://metalkalender.dk';
    const response = await got(url);

    // console.log(response);

    const $ = cheerio.load(response.body)

    const result = $('p').text();
    console.log(result);
})();
