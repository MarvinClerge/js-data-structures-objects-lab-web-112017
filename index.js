// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
  newObj = {...object};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromDriverByKey(object, key) {
  newObj = {...object};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object;
}
