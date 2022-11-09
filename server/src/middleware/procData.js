module.exports = (rawData) => {
  const procData = [];
  rawData.map((x) => {
    procData.push(x.filter((x) => x !== ""));
  });

  console.log(procData);
};
