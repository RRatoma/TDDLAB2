describe("Electrons around the cores", function() {
  it("should return 6 for [1,2,3,4,5]", function() {
    expect(electrons([1,2,3,4,5])).toBe(6);
  });
  
  it("should return 4 for [2,2,3,3]", function() {
  expect(electrons([2,2,3,3])).toBe(4);
});

});
