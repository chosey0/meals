"use strict";
require("dotenv").config();

// 데이터 수집 및 인덱싱 모듈
const rawData = require("./rawData");
const procData = require("./procData");

// 라이브러리
const axios = require("axios");

module.exports = async (method, baseURL, url) => {
  await axios({
    method: method,
    baseURL: baseURL,
    url: url,
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
