const validate = require("../validate");

describe("validate.projectName", () => {
  it("should return True if it is valid for new packages", () => {
    expect(validate.projectName("aps-cli")).toBe(true);
  })

  it("should return a message if it is not valid for new packages", () => {
    expect(validate.projectName("INVALID")).toBeDefined();
  })
})
