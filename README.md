# eeFunction Site

Official public website repository for **eeFunction Free** and **eeFunction Pro**.

> Engineering property calculations and reusable calculation examples, directly in Excel.

이 저장소는 eeFunction의 제품 소개, Pro 기능, 가격·라이선스 안내, 보안·데이터 처리 정보, 예제 탐색 화면을 제공하는 공개 웹사이트를 위한 저장소입니다.

## Websites

- Product site: `https://eefunction.brbrsoft.com`
- Technical documentation: `https://eefunction-doc.brbrsoft.com`

## Repository boundaries

This repository contains only public website source code and public product information. It does **not** contain the proprietary eeFunction calculation engine, licensing implementation, signing credentials, private test data, or production secrets.

| Repository | Visibility | Responsibility |
| --- | --- | --- |
| `tobony/eefunction-site` | Public | Product website, pricing, trust information, and example catalogue UI |
| `tobony/eefunction-doc` | Public | Installation guides and function reference documentation |
| `tobony/eefunction-examples` | Public | Completed Excel workbooks and verified calculation examples |
| `tobony/eefunction-tutorial` | Public | Step-by-step learning material |
| `eefunctionDEV` | Private | Product implementation, calculation engine, tests, build, and release logic |

## Product direction

The website will present eeFunction as a professional Excel engineering calculation platform rather than only a collection of custom functions.

Primary areas:

- Thermodynamic and fluid-property calculations
- Reusable and reviewable Excel engineering examples
- Clear Free and Pro edition comparison
- Function validation ranges, references, and compatibility
- Security, privacy, and data-handling transparency
- Community feedback and example contributions through GitHub

## Planned site structure

```text
/
├─ product
├─ pro
├─ solutions
├─ examples
├─ functions
├─ pricing
├─ security
├─ resources
├─ support
└─ company
```

## Technology direction

The initial implementation is planned around:

- Astro
- Starlight for documentation-oriented sections when appropriate
- TypeScript
- MDX and structured YAML/JSON content
- Cloudflare Pages or Cloudflare Workers
- GitHub Actions for validation and deployment

The final framework may be adjusted after the design system and dynamic requirements are confirmed.

## Development status

This repository is in the product-definition and information-architecture stage. Application source code will be added after the following items are confirmed:

1. Free and Pro feature boundaries
2. Pricing and licensing model
3. Initial ten official Excel examples
4. Data-processing and privacy model
5. Supported Excel platforms
6. Brand and visual design system

See the documents under [`docs/`](./docs/) for the initial product and site plans.

## Contributing

Website copy, translations, accessibility improvements, documentation fixes, and public example catalogue improvements are welcome. Product engine contributions and proprietary implementation requests are outside the scope of this repository.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## Security

Do not disclose vulnerabilities, credentials, license bypasses, or sensitive customer data in public issues. Follow [SECURITY.md](./SECURITY.md) for responsible reporting guidance.

## License and trademarks

Website source code is licensed under the [MIT License](./LICENSE), unless a file states otherwise. Product names, logos, visual identity, screenshots, and other brand assets are governed by [TRADEMARKS.md](./TRADEMARKS.md) and are not granted under the MIT License.

The eeFunction application, Pro calculation engine, and commercial distribution are covered by separate proprietary terms and are not licensed through this repository.
