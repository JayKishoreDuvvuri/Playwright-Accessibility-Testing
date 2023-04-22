import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"; 

test.describe("Accessibility Test", () => {
  test("Detect the accessibility issues for the website", async ({ page }) => {
    await page.goto("https://broken-workshop.dequelabs.com/");

    //Analyze the page with axe
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    //Console log the violations
    let violation = accessibilityScanResults.violations;
    violation.forEach(function (entry) {
      console.log(
        "Print the Violations:",
        entry.impact + " " + entry.description
      );
    });

    let count = violation.length;

    //Expect violations to be empty
    console.log("List of Violations:", violation);
    expect(count).toEqual(2);
    // expect(accessibilityScanResults.violations).toEqual([]);
  });
});
