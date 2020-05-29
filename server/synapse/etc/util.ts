export {};

/**
 * Verifies that all elements of the input collection are of type 'Type'.
 * @param Type A constructor function
 * @param col The object or array to search
 * @param assert If true, the function will throw an error in case of false result.
 * @returns A boolean
 */
const isCollectionOf = (
  Type: Function,
  col: object,
  assert: boolean = false
) => {
  if (!Array.isArray(col)) {
    return false;
  }
  for (let i = 0; i < col.length; ++i) {
    if (!(col[i] instanceof Type)) {
      if (assert) {
        throw new Error(
          `Expected collection containing only values of type ${Type.name}.`
        );
      }
      return false;
    }
  }
  return true;
};

const tryParseJSON = (json) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    return undefined;
  }
};

module.exports = { isCollectionOf, tryParseJSON };
