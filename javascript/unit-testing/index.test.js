const { isEven, removeAtLeastOne, simplify, validate } = require("./index");

describe("Check if number is even", () => {
  it("should check an odd number", () => {
    const result = isEven(1);
    expect(result).toBeFalsy();
  });
  it("should check an even number", () => {
    expect(isEven(2)).toBeTruthy();
  });

  it("should check not a number", () => {
    expect(() => isEven(t)).toThrow("t is not defined");
  });
});

describe("Check if array got shorter", () => {
  it("should check if function made the array shorter", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const originalLength = array.length;
    const result = removeAtLeastOne(array);
    expect(result.length).toBeLessThan(originalLength);
  });

  it("should check an empty array", () => {
    const array = [];
    const originalLength = array.length;
    const result = removeAtLeastOne(array);
    expect(result.length).toEqual(originalLength);
  });
});

describe("String Content Validation", () => {
  const forbiddenChars = ["!", "#", ".", ",", "'"];

  let result = simplify("u*n#i.t t,e.s't me!");
  forbiddenChars.forEach((char) => {
    test(`should not contain the character "${char}"`, () => {
      expect(result).not.toContain(char);
    });
  });
  test(`should not contain the character "${forbiddenChars}"`, () => {
    expect(() => simplify(null)).toThrow("Cannot read properties of null (reading 'split')");
  });
});

describe("Check if array has more true values than flase", () => {
  it("should return an error for not having boolean values in it", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(() => validate(array)).toThrow("Need at least one boolean");
  });

  it("should return false for having less true boolean values than flase in it", () => {
    const array = [1, false];
    const result = validate(array);
    expect(result).toBeFalsy();
  });

  it("should return true for having more true boolean values than flase in it", () => {
    const array = [1, true];
    const result = validate(array);
    expect(result).toBeTruthy();
  });
});
