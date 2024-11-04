class PageNavigator {
  gotoJobSearch(baseURL) {
    cy.visit(`${baseURL}`);
  }
}

export default PageNavigator;
