import TestFilters from "../../support/filterTests.js";
import HomePage from "../../../page_objects/home.js";

let jobSearch;
const homePage = new HomePage();

beforeEach(() => {
  cy.fixture("home.json").then((data) => {
    jobSearch = data;
    cy.visit("");
  });
});

TestFilters(["smoke"], () => {
  describe("Search complete form", () => {
    it("Search jobs and complete form", () => {
      homePage.searchInput.contains(
        jobSearch.findingJobs.searchForPlacementText
      );
    });
  });
});
