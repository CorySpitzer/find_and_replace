describe("wordReplace", function() {
  it("returns the string if given empty strings", function () {
    expect(wordReplace("Hello world!", "", "")).to.equal("Hello world!");
  });

  it("replaces the first instance of a given string with another string", function () {
    expect(wordReplace("Hello world!", "world", "universe")).to.equal("Hello universe!");
  });

  it("replaces all instances of a given string with another string", function () {
    expect(wordReplace("Hello world world!", "world", "universe")).to.equal("Hello universe universe!");
  });

  it("replaces all instances of a given string with another string when they are out of order", function () {
    expect(wordReplace("Hello world, hello world!", "world", "universe")).to.equal("Hello universe, hello universe!");
  });

  // it("replaces capitalized words", function () {
  //   expect(wordReplace("Hello World!", "world", "universe")).to.equal("Hello universe!");
  // });
});
