const cheerio = require("cheerio");

module.exports = (res, selector) => {
  const rawData = [];
  const $ = cheerio.load(res.data);
  $(selector)
    .children()
    .each((i, elem) => {
      // 따라서 cheerio의 each 메소드를 사용하여 각 배열마다 공백문자들을 모두 제거하여 1차 가공
      rawData[i] = $(elem).text().split(/[\s*]/);
    });

  return rawData;
};
