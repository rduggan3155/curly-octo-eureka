import TestFilters from "../support/filterTests.js";
import "cypress-file-upload";
import PageNavigator from "../utils/pagenavigator.js";
import Application from "../page_objects/application.js";

let applicationData;

const pageNavigator = new PageNavigator();
const application = new Application();
const baseURL = Cypress.env("baseUrl");

before(() => {
  cy.fixture("application.json").then((data) => {
    applicationData = data;
    pageNavigator.gotoCareersAmergis(baseURL);
  });
});

TestFilters(["smoke", "application"], () => {
  describe("Application form", () => {
    it("Validations for req'd data", () => {
      application.clickApplyBtnHomePage();
      cy.get(application.btnFormApplyNow).click();

      cy.get(application.labelSubmitError).contains(
        applicationData.formValidation.submit
      );

      cy.get(application.labelNamesError).contains(
        applicationData.formValidation.names
      );

      cy.get(application.labelEmailError).contains(
        applicationData.formValidation.genericRequiredTxtFields
      );

      cy.get(application.labelPhoneError).contains(
        applicationData.formValidation.genericRequiredTxtFields
      );

      cy.get(application.labelDrpdwnRaceError).contains(
        applicationData.formValidation.genericRequiredDrpdwn
      );

      cy.get(application.labelDrpdwnSexError).contains(
        applicationData.formValidation.genericRequiredDrpdwn
      );

      cy.get(application.labelDrpdwnVetError).contains(
        applicationData.formValidation.genericRequiredDrpdwn
      );

      cy.get(application.labelDisabledError).contains(
        applicationData.formValidation.genericRequiredDrpdwn
      );

      cy.get(application.labelImageError).contains(
        applicationData.formValidation.genericImage
      );
    });

    it("User completes application form", () => {
      cy.visit(baseURL);
      cy.get(application.btnApplyNow)
        .first()
        .should("exist")
        .contains("Apply Now")
        .click();
      cy.url().should("include", "/job/");

      application.completeApplicationForm(
        applicationData.applicationForm.first,
        applicationData.applicationForm.last,
        applicationData.applicationForm.email,
        applicationData.applicationForm.phone,
        applicationData.applicationForm.drpdwn.race,
        applicationData.applicationForm.drpdwn.sex,
        applicationData.applicationForm.drpdwn.veteranStatus,
        applicationData.applicationForm.drpdwn.disabledStatus,
        applicationData.applicationForm.drpdwn.resumeYes
      );
      cy.get(application.btnUploadImage).click();
      cy.fixture("mockResume.docx").then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent,
          fileName: "mockResume.docx",
          mimeType: "image/docx"
        });
      });
      //if this was a real test and not a demo mode it would click the Apply button
    });
  });
});
