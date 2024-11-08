class Application {
  btnApplyNow = ".col-md-2";
  btnFormApplyNow = ".gform_button";
  btnUploadImage = ".gfield--input-type-fileupload";

  drpdwnRace = "#input_2_23.gfield_select";
  drpdwnSex = "#input_2_24.gfield_select";
  drpdwnVeteranStatus = "#input_2_25.gfield_select";
  drpdwnDisabilityStatus = "#input_2_27.gfield_select";
  drpdwnResume = "#input_2_4.gfield_select";

  frmApplication = ".pum - container";

  labelSubmitError = ".gform_submission_error";
  labelNamesError = "fieldset .gfield_description";
  labelEmailError = ".gfield--type-email";
  labelPhoneError = ".gfield--type-phone";
  labelDrpdwnRaceError = "#validation_message_2_23.gfield_validation_message";
  labelDrpdwnSexError = "#validation_message_2_24.gfield_validation_message";
  labelDrpdwnVetError = "#validation_message_2_25.gfield_validation_message";
  labelDisabledError = "#validation_message_2_27.gfield_validation_message";
  labelImageError = ".gfield--type-fileupload";

  txtFirstName = ".name_first";
  txtLastName = ".name_last";
  txtEmail = "#input_2_2";
  txtPhone = "div.ginput_container_phone";

  clickApplyBtnHomePage() {
    cy.get(this.btnApplyNow).first().click();
  }

  completeApplicationForm(
    firstName,
    lastName,
    email,
    phone,
    race,
    sex,
    vetStatus,
    disabilitystat,
    resume
  ) {
    cy.get(this.txtFirstName).type(firstName);
    cy.get(this.txtLastName).type(lastName);
    cy.get(this.txtEmail).type(email);
    cy.get(this.txtPhone).type(phone);
    cy.get(this.drpdwnRace).select(race);
    cy.get(this.drpdwnSex).select(sex);
    cy.get(this.drpdwnVeteranStatus).select(vetStatus);
    cy.get(this.drpdwnDisabilityStatus).select(disabilitystat);
    cy.get(this.drpdwnResume).select(resume);
  }

  uploadImage() {}
  uploadImage(imagePath) {
    cy.get(this.btnUploadImage).attachFile(imagePath);
  }
}

export default Application;
