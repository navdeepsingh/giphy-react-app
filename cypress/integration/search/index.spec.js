/// <reference types="cypress" />
const API_URL_SEARCH = `https://api.giphy.com/v1/gifs/search`;
const API_URL_TRENDING = `https://api.giphy.com/v1/gifs/trending`;

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should search results on query 'car' in search field", () => {
    cy.intercept("GET", API_URL_SEARCH, []).as("getImages");

    cy.get("[data-cy=input-text]").type("car");
    cy.get("[data-cy=input-button]").click();

    cy.wait(5000);
    cy.get(".listing img").should("have.length", 50);
    cy.get(".listing img")
      .first()
      .should("have.attr", "alt")
      .then((alttext) => {
        expect(alttext).contains("car");
      });
    cy.url().should("include", "/trendings");
  });
});
