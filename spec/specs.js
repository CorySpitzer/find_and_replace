describe("wordReplace", function() {
  it("replaces the first instance of a given string with another string", function () {
    expect(wordReplace("Hello world!", "world", "universe")).to.equal("Hello universe!");
  });
});
