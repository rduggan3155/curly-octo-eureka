import Home from "../page_objects/home.js";
import TestFilters from "../support/filterTests.js";
import PageNavigator from "../utils/pagenavigator.js";
import Jobs from "../page_objects/jobs.js";

let jobSearch;
let jobTitleText;
const home = new Home();
const pageNavigator = new PageNavigator();
const baseURL = Cypress.env("baseUrl");
const jobs = new Jobs();

beforeEach(() => {
  cy.fixture("homePage.json").then((data) => {
    jobSearch = data;
    pageNavigator.gotoJobSearch(baseURL);
  });
});

TestFilters(["smoke"], () => {
  describe("Search by key word and complete form", () => {
    it("Search jobs and complete first form", () => {
      cy.get(home.acceptCookiesButton)
        .should("have.text", jobSearch.buttonText.acceptCookies)
        .click();

      cy.get(home.searchInput)
        .last()
        .type(jobSearch.inputText.titleKeywordText)
        .type("{enter}");

      cy.url().should("contain", jobSearch.urlText.keyWordTxtSearch);

      //cy.get(jobs.jobsContainer).eq(0).click();

      cy.get(jobs.jobLink)
        .first()
        .invoke("text")
        .then((jobTitleText) => {
          cy.wrap(jobTitleText).as("jobTitleText");
          cy.get(jobs.jobLink).first().click();
        });

      cy.get("@jobTitleText").should("exist");

      // cy.get("@jobTitleText").then((jobTitleText) => {
      //   cy.url().should("contain", jobSearch.urlText.jobDetailsPage);
      //   cy.get(jobs.jobTitleOnDetailsPage).should("have.text", jobTitleText);
      // });
    });
  });
});
