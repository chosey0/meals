const cheerio = require("cheerio");

// if 문에 조건이 여러개일 경우 리팩터링 방법
// 참조 https://stackoverflow.com/questions/8710442/how-to-specify-multiple-conditions-in-an-if-statement-in-javascript
const ifArray = [/[^\s+\d/g]/, undefined, null];
const ifArray2 = {
  space: /[^\s+\d/g]/,
  undefined: undefined,
  null: null,
};
// res : axios request로 받은 데이터
module.exports = (res, selector) => {
  const $ = cheerio.load(res.data);

  const html_table = $(selector);

  const queue = []; // 탐색할 요소 리스트
  const rawData = []; // 주 단위 식단
  const procData = []; // 공백 등 불필요한 요소가 제거된 식단 배열

  // * table 태그의 childNode들을 차례대로 queue에 넣는다.
  html_table.children().map((x, elem) => {
    queue.push(elem);
  });

  // * 1. 본격적으로 순회를 시작한다.
  while (queue.length !== 0) {
    // * queue에서 맨 처음 삽입된 element를 꺼낸다.
    let curr = queue.shift();

    // * 하루 단위 식단 리스트, 루프마다 초기화되도록 let으로 선언했다.
    let days = [];

    // * 1. 현재 Node의 children 수 만큼 탐색.
    for (const key in curr.children) {
      /*
       * 2-1. 현재 Node의 children의 타입이 태그일 경우, 탐색 필요 목록인 queue에 삽입한다. */
      if (curr.children[key].type == "tag") {
        const element = curr.children[key];
        queue.push(element);
        console.log(curr.children[key].name);
      }

      /*
       * 2-2. 현재 Node의 Children이 p 태그일 경우 */
      if (curr.children[key].name == "p") {
        const element = curr.children[key];

        /*
         * 현재 Node가 가진 p태그의 수 만큼 p태그 내의 텍스트를 days에 하나씩 삽입한다.
         * 아래 코드를 통해서 하루 단위의 식단 배열이 만들어진다. */
        element.children.filter((elem, index) => {
          if (!ifArray.includes(elem.data)) {
            days.push(elem.data.trim());
          }
        });
      }
    }

    // * 3. for in loop가 끝난 후 하루 단위의 식단 배열 days를 meals에 삽입한다
    rawData.push(days);
  }

  rawData.map((elem, x) => {
    if (elem[0] != null) {
      procData.push(elem);
    }
  });

  console.log(procData);

  return procData;
};
