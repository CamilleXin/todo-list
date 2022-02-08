const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "./data/toto.json");

// get all data from json
function getAllList() {
  return JSON.parse(fs.readFileSync(fileName), "utf-8");
}

// id's type is number
function deleteData(id) {
  const list = getAllList();
  if (!id || id === 0 || list.length === 0) {
    return list;
  }

  const freeList = list.filter((v) => v.id !== +id);
  // write data back to json
  fs.writeFileSync(fileName, JSON.stringify(freeList));

  // maybe return true。 post method used getAllList?  spliceList?
  return freeList;
}

// data is Array<string>
function insertData(data) {
  const list = getAllList();
  if (!data) {
    return list;
  }
  // get current todo list max ID
  let currentMaxID = Math.max(...list.map(({ id }) => id));
  list.push({
    id: list.length === 0 ? 1 : currentMaxID + 1,
    text: data.value,
  });

  // write data back to json
  fs.writeFileSync(fileName, JSON.stringify(list));
  //   return newList;
}

// data type is {id: number, text: string}
function updateData(data) {
  if (!data) {
    return;
  }
  const list = getAllList();

  const item = list.find(({ id }) => id === data.id);
  item.id = data.id;
  item.text = data.text;

  // write data back to json
  fs.writeFileSync(fileName, JSON.stringify(list));
  return true;
}

module.exports = {
  getAllList,
  deleteData,
  insertData,
  updateData,
};
