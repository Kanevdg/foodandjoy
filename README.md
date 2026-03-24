# Food and Joy

Static website for Food and Joy, the culinary business of chef Jerry van der Graaf.

## Overview

This project is a lightweight multi-page website built with HTML, Tailwind via CDN, a shared stylesheet, and a small JavaScript file for UI behavior.

Main features:
- Responsive navigation with hamburger menu
- Landing pages for services and brand story
- Contact form that sends to `info@foodandjoy.nl` via FormSubmit AJAX
- Basic SEO setup with `robots.txt` and `sitemap.xml`

## Project Structure

```text
assets/
  icons/
  images/
pages/
  catering.html
  contact.html
  evenementen.html
  freelance.html
  homecooking.html
  index.html
  over-jerry.html
scripts/
  script.js
styles/
  style.css
robots.txt
sitemap.xml
tailwind.config.js
```

## Running Locally

Because this is a static site, you can open the HTML files directly in a browser, but using a local server is recommended.

Examples:

```bash
python3 -m http.server 8000
```

Then open:
- `http://localhost:8000/pages/index.html`

## Contact Form

The contact form on [pages/contact.html](pages/contact.html) is configured to send submissions to `info@foodandjoy.nl` using FormSubmit.

Important notes:
- The first real submission may require FormSubmit email activation/verification
- The form is submitted with JavaScript so visitors stay on the same page
- Success and error messages are shown inline on the contact page

If you want to replace FormSubmit later, update:
- [pages/contact.html](pages/contact.html)
- [scripts/script.js](scripts/script.js)

## SEO Files

- [robots.txt](robots.txt): allows search engines to crawl the site
- [sitemap.xml](sitemap.xml): lists all public pages for indexing

Current sitemap URLs assume the site is served from:
- `https://foodandjoy.nl`
- with pages available under `/pages/...`

If the final hosting structure changes, update the URLs in [sitemap.xml](sitemap.xml) and the sitemap reference in [robots.txt](robots.txt).

## Deployment Notes

Before going live, verify:
- All page URLs match the live hosting structure
- The contact form works from the production domain
- `robots.txt` is available at `/robots.txt`
- `sitemap.xml` is available at `/sitemap.xml`

## Maintenance

When adding a new public page:
1. Add the page to the navigation if needed
2. Add the page URL to [sitemap.xml](sitemap.xml)
3. Add a meta description in the page `<head>`
4. Check internal links from other pages
