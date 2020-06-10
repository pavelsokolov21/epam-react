/* eslint-disable no-undef */
describe("Search films", () => {
  beforeEach(() => {
    cy
      .visit("/")
      .wait(4000);
  });

  it("should search films by title", () => {
    cy.get("input")
      .click()
      .type("tomb");

    cy.get("button")
      .contains("search")
      .click();

    cy.get("main .row a").should("have.length", 1);
  });

  it("should search films by genre", () => {
    cy.get("input")
      .click()
      .type("Act");

    cy.get("button")
      .contains("genre")
      .click();

    cy.get("button")
      .contains("search")
      .click();

    cy.get("main .row a").should("have.length", 4);
  });

  it("should render films not found", () => {
    cy.get("input")
      .click()
      .type("testtestetst");

    cy.get("button")
      .contains("search")
      .click();

    cy.get("main .row p")
      .should("have.text", "Films not found");
  });
});

describe("Sort films", () => {
  beforeEach(() => {
    cy
      .visit("/")
      .wait(4000);
  });

  it("should sort films by rating", () => {
    cy.get("button")
      .contains("rating")
      .click();

    cy.get("main .row a")
      .get("h4")
      .contains("Ready Player One")
      .should("have.text", "Ready Player One");
  });
});

describe("One film", () => {
  beforeEach(() => {
    cy
      .visit("/")
      .wait(4000);
  });

  it("should redirect to clicked film", () => {
    cy
      .get("main .row a")
      .first()
      .click();

    cy.url().should("include", "/movies/333339");
  });

  it("should go back", () => {
    cy
      .get("main .row a")
      .first()
      .click();

    cy.wait(2000);

    cy
      .get("button")
      .contains("search")
      .click();

    cy.url().should("eq", "http://localhost:8081/");
  });
});
