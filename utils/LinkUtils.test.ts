import { isExternal } from "./LinkUtils";

test("Local link", () => {
  expect(isExternal("/")).toBe(false);
});

test("External https link", () => {
  expect(isExternal("https://google.com")).toBe(true);
});

test("External http link", () => {
  expect(isExternal("http://google.com")).toBe(true);
});

test("Mail to", () => {
  expect(isExternal("mailto:mail@exemple.com")).toBe(true);
});
