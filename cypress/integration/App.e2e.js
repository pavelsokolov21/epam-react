/* eslint-disable no-undef */
describe("Search films", () => {
  beforeEach(() => {
    cy
      .visit("/");
  });

  it("should search films by title", () => {
    cy.get("input[data-test-input='search-input']")
      .click()
      .type("tomb");

    cy.get("button[data-test-button='search']")
      .click();

    cy.get("a[data-test-card]").should("have.length", 1);
  });

  it("should search films by genre", () => {
    cy.get("input[data-test-input='search-input']")
      .click()
      .type("Act");

    cy.get("button[data-test-button='search-by-genre']")
      .click();

    cy.get("button[data-test-button='search']")
      .click();

    cy.get("main .row a").should("have.length", 4);
  });

  it("should render films not found", () => {
    cy.get("input[data-test-input='search-input']")
      .click()
      .type("testtestetst");

    cy.get("button[data-test-button='search']")
      .click();

    cy.get("p[data-test-notFound='not-found']")
      .should("have.text", "Films not found");
  });
});

describe("Sort films", () => {
  beforeEach(() => {
    cy
      .visit("/");
  });

  it("should sort films by rating", () => {
    cy.get("button[data-test-button='sort-by-rating']")
      .click();

    cy.get("a[data-test-card='film-5ee55f3430a4bf954a062fe3'] h4")
      .should("have.text", "Ready Player One");
  });
});

describe("One film", () => {
  it("should redirect to clicked film", () => {
    cy.visit("/");

    cy
      .get("a[data-test-card='film-5ee55f3430a4bf954a062fe3']")
      .click();

    cy.url().should("include", "/movies/5ee55f3430a4bf954a062fe3");

    cy
      .get("button[data-test-button='go-home']")
      .click();

    cy.url().should("eq", "http://localhost:8081/");
  });
});
