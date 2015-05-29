describe("wordReplace", function() {
  it("returns the string if given empty strings", function () {
    expect(wordReplace("Hello world!", "", "")).to.equal("Hello world!");
  });

  it("replaces the first instance of a given string with another string", function () {
    expect(wordReplace("Hello world!", "world", "universe")).to.equal("Hello universe!");
  });

  // it("replaces all instances of a given string with another string", function () {
  //   expect(wordReplace("Hello world world!", "world", "universe")).to.equal("Hello universe universe!");
  // });
});
