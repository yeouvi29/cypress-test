/// <reference types="Cypress"/>

// describe("Request command type", () => {
//   it("Get request", () => {
//     // cy.request("GET", "http://localhost:8080/todos").then((response) => {
//     //   cy.log(response.status);
//     //   cy.log(response.statusText);
//     //   cy.log(response.headers);
//     //   cy.log(response.body);

//     //   cy.log(response.body);
//     //   expect(response.status).to.be.equal(200);
//     //   expect(response.duration).to.be.below(20000);
//     //   expect(response.body[0].isComplete).to.be.false;
//     //     });
//     //   });

//     //?name=value
//     cy.request({
//       method: "GET",
//       url: "http://localhost:8080/todos",
//       qs: { id: 7206 },
//     }).then((response) => {
//       cy.log(response.body);
//       expect(response.body[1].isComplete).to.be.false;
//     });
//   });

//   it.only("Post request", () => {
//     cy.visit("http://localhost:3000/todos");
//     cy.request("POST", "http://localhost:8080/todos", {
//       name: "test1",
//       isComplete: false,
//     }).then((response) => {
//       expect(response.status).to.equal(201);
//     });
//   });

//   it("Put request", () => {
//     cy.request("PUT", "http://localhost:8080/todos/7206", {
//       name: "Study Cypress",
//       id: 7206,
//       isComplete: true,
//     });
//   });

//   it("Delete request", () => {
//     cy.request("DELETE", "http://localhost:8080/todos/9408");
//   });
//   it.only("Secured API", () => {
//     cy.request({
//       method: "GET",
//       url: "http://localhost:8080/courses",
//       auth: {
//         bearer:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZTIyMmNAbWFpbC5jb20iLCJpYXQiOjE2NDU0ODQwODEsImV4cCI6MTY0NTQ4NzY4MSwic3ViIjoiNiJ9.8Hf44yzhWiZJeFMSko-fhbM4YeGtYN6mkT4sE8X7o4I",
//       },
//     });
//   });
// });
