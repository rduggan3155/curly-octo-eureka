export const TestFilters = (TestTags, runTest) => {
  if (Cypress.env("tags")) {
    const tags = Cypress.env("tags").split(",");
    const isFound = TestTags.some((givenTag) => tags.includes(givenTag));

    if (isFound) {
      runTest();
    }
  } else {
    runTest();
  }
};
export const TestTags = {
  Regression: "regression",

  Smoke: "smoke",

  Application: "application"
};

export default TestFilters;
