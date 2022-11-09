"use strict";
require("dotenv").config();

// 데이터 수집 및 인덱싱 모듈
const rawData = require("./rawData");
const procData = require("./procData");

// 라이브러리
const axios = require("axios");

module.exports = async () => {
  await axios({
    method: "get",
    baseURL: "https://jc.woosuk.ac.kr/",
    url: "webService.do?menuCode=K08M0302",
  })
    .then((res) => {
      // return rawData(res, ".table_t1 > tbody > tr");
      return rawData(res, ".table_t1 > tbody > tr");
    })
    .then((rawData) => {
      return procData(rawData);
    })
    .catch((err) => console.log(err));
};
