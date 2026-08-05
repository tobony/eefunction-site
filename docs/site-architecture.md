# Site Architecture

## Recommended domains

- Product website: `eefunction.brbrsoft.com`
- Technical documentation: `docs.eefunction.brbrsoft.com`
- Legacy documentation address: `eefunction-doc.pages.dev`

The legacy address should remain available during migration. Redirects must preserve useful historical links.

## Information architecture

```text
Home
├─ Product
│  ├─ Overview
│  ├─ Free
│  ├─ Pro
│  └─ Free vs Pro
├─ Solutions
│  ├─ Process engineering
│  ├─ Energy and utilities
│  ├─ HVAC
│  ├─ Hydrogen and ammonia
│  └─ Natural gas and fluids
├─ Examples
│  ├─ Official verified
│  ├─ Community
│  └─ Example detail
├─ Functions
│  ├─ Catalogue
│  └─ Function detail link to documentation
├─ Pricing
├─ Security and trust
├─ Resources
│  ├─ Tutorials
│  ├─ Release notes
│  └─ Technical articles
├─ Support
└─ Company
```

## Repository integrations

### `eefunction-doc`

Source of detailed installation and function reference documentation. The product site should link to canonical documentation pages rather than duplicate full reference content.

### `eefunction-examples`

Planned source of structured example metadata, screenshots, descriptions, references, and downloadable workbooks. The site should generate catalogue pages from reviewed metadata rather than maintain duplicate records manually.

### `eefunction-tutorial`

Source of step-by-step learning content. Tutorials and production-ready examples must remain distinct.

### Private product repository

The private product repository remains the source of truth for released functionality, version numbers, compatibility, tests, and release artifacts. Only approved public metadata should flow into this website.

## Content model

Every public product claim should have an owner and lifecycle status:

- `released`
- `preview`
- `planned`
- `deprecated`
- `retired`

Every example should support:

- unique ID and slug;
- Korean and English title;
- category and difficulty;
- Free or Pro requirement;
- minimum product version;
- supported platforms;
- functions used;
- validation status;
- references and limitations;
- workbook and preview assets.

## Search and navigation

Search should cover:

- functions;
- examples;
- tutorials;
- product and support pages;
- release notes.

Search results must label the content type and edition requirement clearly.

## Accessibility and performance

Baseline requirements:

- keyboard-accessible navigation;
- semantic headings and landmarks;
- visible focus states;
- sufficient contrast;
- reduced-motion support;
- meaningful image alternatives;
- responsive layouts for desktop, tablet, and mobile;
- static generation where practical;
- optimized screenshots and videos.

## Localization

Korean and English are the initial target languages. URLs should use stable language-neutral identifiers when possible, while titles and descriptions remain localized.
