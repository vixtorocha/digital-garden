# ADR: Internationalization Strategy Using Fully Localized Routes

**Status:** Accepted
**Date:** 2026-01-26
**Context:** Blog (Next.js + MDX)

## Context

The application is a content-driven blog built with **Next.js (App Router)** and **MDX**.
It needs to support multiple languages for:

* **Blog content** (MDX-based posts)
* **Shared UI pages and components** (home, navigation, footer, static pages)

Key constraints and goals:

* All content should be **SEO-friendly** and indexable per language
* The active locale should be explicit and unambiguous
* Routing and data-fetching logic should be predictable and consistent
* Keep the architecture easy to reason about as the site grows

## Decision

We will adopt a **fully localized routing strategy** where **all pages are prefixed with a locale segment**.

1. **All routes include the locale**

   * Examples:

     * `/en`
     * `/en/blog`
     * `/en/blog/my-post`
     * `/pt/about`

2. **Centralized locale layout**

   * All pages are rendered under `app/[locale]/`
   * The locale-aware layout initializes `next-intl` and shared providers

3. **Content organization**

   * Blog posts are stored by locale in the filesystem:

     ```
     posts/en/*.mdx
     posts/pt/*.mdx
     ```

4. **Root redirect**

   * The root path (`/`) redirects to the default locale (e.g. `/en`)

## Rationale

This approach was chosen because:

* It aligns naturally with **Next.js App Router patterns**
* It simplifies data fetching, metadata generation, and linking
* It enables **best-in-class SEO**, including straightforward `hreflang` support
* It removes the need for heuristics or implicit behavior on non-content pages
* It scales cleanly as more locales or pages are added

## Consequences

### Positive

* Explicit and predictable locale handling everywhere
* Simplified blog and page queries using `params.locale`
* Easier implementation of language switching
* Clear separation of localized content in the filesystem
* Strong SEO guarantees with no duplicate-content ambiguity

### Negative / Trade-offs

* All pages must be locale-aware, even those with minimal text
* URLs are slightly longer (e.g. `/en` instead of `/`)
* Requires a redirect strategy for the root path
* Missing translations must be handled explicitly (fallback, redirect, or 404)

## Alternatives Considered

### 1. Mixed approach (localized blog routes + non-localized UI)

* **Rejected** due to:

  * Multiple sources of truth for locale
  * Implicit locale resolution on some pages
  * Additional mental overhead when linking across sections

### 2. No locale-prefixed routes

* Runtime language switching only
* **Rejected** due to:

  * Poor SEO characteristics
  * Ambiguous URLs
  * Harder content sharing and indexing

---

## Notes / Future Considerations

* A language switcher will update the locale segment in the URL
* `hreflang` metadata should be added for all localized pages
* A clear fallback strategy should be defined for missing translations
* If needed, locale-prefixed routes can later be grouped using route groups
