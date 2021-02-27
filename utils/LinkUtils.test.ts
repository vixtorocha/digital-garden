import { isExternal } from "./LinkUtils";

test("Local link", () => {
  expect(isExternal("/")).toBe(false);
});

test("External link", () => {
  expect(isExternal("https://github.com/vixtorocha")).toBe(true);
});
