const supertest = require("supertest");
const app = require('../server/index.js');
const request = supertest(app);

it("projectData", (done) => {
  const response = request.get("/all").then((response) => {
    expect(response.statusCode).toBe(200);
    done();
  });
});



