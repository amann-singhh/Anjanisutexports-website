# CHANGELOG

## [Unreleased]

- Added centralized brand config at `client/src/config/brand.js`
- Added navigation configuration at `client/src/config/nav.js`
- Added client-side dynamic content data files under `client/src/data/`
- Added shared product source file at `shared/products.json`
- Added theme injection files under `client/src/styles/`
- Updated `server/index.js` to expose `/api/products` and `/api/enquiries`
- Updated client pages and components to consume config/data instead of hardcoded values
- Added dynamic copyright year and footer content from brand config
- Added mobile-responsive navigation, product grid, contact form, and layout updates

## Notes

- Update brand values once in `client/src/config/brand.js`
- Add new categories in `client/src/data/categories.js`
- Add new products in `shared/products.json`
- Update trust points in `client/src/data/whyChooseUs.js`
- Update certifications in `client/src/data/certifications.js`
