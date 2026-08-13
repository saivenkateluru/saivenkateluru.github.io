import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routes = [
  "index.html",
  "academics/index.html",
  "blog/index.html",
  "blog/attention-is-all-you-need/index.html",
  "projects/index.html",
  "publications/index.html",
];

const readBuilt = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), "utf8");

test("build emits every portfolio route", async () => {
  await Promise.all(routes.map(readBuilt));
});

test("homepage contains approved identity and timeline", async () => {
  const html = await readBuilt("index.html");

  assert.match(html, /Eluru Sai Venkat/i);
  assert.match(html, /eluru@iisc — profile/i);
  assert.match(html, /M\.Tech in Artificial Intelligence/i);
  assert.match(html, /student at the\s+<strong>Representation Learning Lab/i);
  assert.match(html, /Representation Learning Lab/i);
  assert.match(html, /LatentForce AI/i);
  assert.match(html, /Samsung R&amp;D Institute/i);
  assert.match(html, /Self-Improving Agents/i);
});

test("theme follows the system and persists manual choice", async () => {
  const html = await readBuilt("index.html");

  assert.match(html, /prefers-color-scheme:\s*dark/);
  assert.match(html, /localStorage/);
  assert.match(html, /aria-label="Switch to (?:light|dark) theme"/);
});

test("internal navigation remains in the same tab", async () => {
  const html = await readBuilt("index.html");
  const internalLinks = html.match(/<a\b[^>]*href="\/(?:academics|blog|publications|projects)[^>]*>/g) ?? [];

  assert.equal(internalLinks.length >= 4, true);
  assert.equal(internalLinks.some((link) => /target="_blank"/.test(link)), false);
  assert.doesNotMatch(html, /href="\/about\/?"/);
});

test("header uses accessible social icons", async () => {
  const html = await readBuilt("index.html");

  assert.match(html, /aria-label="Eluru Sai Venkat on X"[^>]*><svg/);
  assert.match(html, /aria-label="Eluru Sai Venkat on LinkedIn"[^>]*><svg/);
  assert.match(html, /aria-label="Eluru Sai Venkat on GitHub"[^>]*><svg/);
  assert.match(html, /href="https:\/\/github\.com\/saivenkateluru"/);
  assert.doesNotMatch(html, /saivenkateluru-github-io/);
});

test("academics is reserved for courses, teaching, and achievements", async () => {
  const html = await readBuilt("academics/index.html");

  assert.match(html, />Coursework</);
  assert.match(html, />Teaching</);
  assert.match(html, />Achievements</);
  assert.doesNotMatch(html, /Samsung R&amp;D Institute/);
});

test("homepage terminal accepts commands", async () => {
  const html = await readBuilt("index.html");

  assert.doesNotMatch(html, /id="terminal-command"[^>]*autofocus/);
  assert.match(html, /<button type="submit">run<\/button>/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /Unknown command/);
  assert.doesNotMatch(html, /about:\s*"\/"/);
  assert.match(html, /keydown/);
  assert.match(html, /requestSubmit/);
});

test("inner pages provide back navigation", async () => {
  const pages = await Promise.all(routes.slice(1).map(readBuilt));

  assert.equal(pages.every((html) => /class="back-link"/.test(html)), true);
});

test("placeholder prose is absent", async () => {
  const pages = await Promise.all(["index.html", "academics/index.html", "projects/index.html", "publications/index.html"].map(readBuilt));
  const html = pages.join("\n");

  assert.doesNotMatch(html, /Learning in public/i);
  assert.doesNotMatch(html, /intentionally honest/i);
  assert.doesNotMatch(html, /will be (?:added|documented)/i);
  assert.doesNotMatch(html, /Project write-ups are being prepared/i);
});

test("theme control is icon-only below social links", async () => {
  const html = await readBuilt("index.html");

  assert.match(html, /class="social-links"/);
  assert.match(html, /id="theme-toggle"[^>]*><svg/);
  assert.doesNotMatch(html, />go (?:light|dark)<\/button>/);
});

test("attention draft renders mathematics and named references", async () => {
  const html = await readBuilt("blog/attention-is-all-you-need/index.html");

  assert.match(html, /katex/);
  assert.match(html, /Vaswani et al\./);
  assert.match(html, /Attention Is All You Need/);
});
