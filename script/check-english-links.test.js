const rewire = require("rewire")
const check_english_links = rewire("./check-english-links")
const main = check_english_links.__get__("main")
// @ponicode
describe("main", () => {
    test("0", async () => {
        await main()
    })
})
