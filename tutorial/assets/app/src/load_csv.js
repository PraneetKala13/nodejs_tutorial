const { createReadStream } = require("fs");
const parse = require("csv-parse");
const path = require("path");

const loadCSV = async () => {
  // Load data
  const records = [];
  const csvStream = createReadStream(path.join(__dirname, "data/survey_results_schema.csv"), "utf8");

  const parser = csvStream.pipe(parse({columns: true}));

  for await (const record of parser) {
    records.push(record);
  }
  return records;
}

module.exports = loadCSV;