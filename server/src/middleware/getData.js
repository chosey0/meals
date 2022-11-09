"use strict";
require("dotenv").config();
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = async () => {
  await axios({
    method: "get",
    baseURL: "https://jc.woosuk.ac.kr/",
    url: "webService.do?menuCode=K08M0302",
  })
    .then((res) => {
      // rawData 추출
      const rawData = [];
      const $ = cheerio.load(res.data);

      $(".table_t1 > tbody > tr") // tr 하위에 각 메뉴가 p 태그로 이루어져있음
        .children() // 따라서 cheerio의 children 메소드로 모든 tr 태그의 하위 요소들의 배열을 가져옴,
        // children().text()로 데이터를 가져오면 이스케이프 문자들도 같이 배열에 들어있음
        .each((i, elem) => {
          // 따라서 cheerio의 each 메소드를 사용하여 각 배열마다 공백문자들을 모두 제거하여 1차 가공
          rawData[i] = $(elem).text().split(/[\s*]/);
        });

      return rawData;
    })
    .then((rawData) => {
      // 1차 가공된 rawData 배열 내부에 공백 문자들이 제거되어 비어있는 배열들을 다시 한번 제거
      const procMenu = [];
      rawData.map((x) => {
        procMenu.push(x.filter((x) => x !== ""));
      });
      console.log(procMenu);
    })
    .catch((err) => console.log(err));
};
// 클래스 객체로 바꾸는중입니다
class research {
  constructor(rootURL) {}

  async getHTML(method, baseURL, URL) {
    return await axios({
      method: method,
      baseURL: baseURL,
      url: URL,
    });
  }

  rawData(html, selector) {
    const rawData = [];
    const $ = cheerio.load(html.data);
    $(selector)
      .children()
      .each((i, elem) => {
        // 따라서 cheerio의 each 메소드를 사용하여 각 배열마다 공백문자들을 모두 제거하여 1차 가공
        rawData[i] = $(elem).text().split(/[\s*]/);
      });

    return rawData;
  }
}
const g = new research();
