# Copilot Instructions for Edmonton Gallery Walk Website

## Project Overview
- **Purpose:** Static website for the Edmonton Gallery Walk, promoting local art galleries and events on 124 Street.
- **Tech Stack:** Pure HTML, CSS (with Pico.css for minimal UI), and vanilla JavaScript. No build tools or frameworks.
- **Key Files:**
  - `index.html`: Main entry point, contains all markup and structure.
  - `styles.css`: Custom styles, extends Pico.css, uses CSS variables for theme.
  - `js/main.js`: Handles mobile menu, smooth scrolling, and navigation logic.
  - `images/`: Contains gallery and map images, referenced directly in HTML.

## Architecture & Patterns
- **Single Page Structure:** All content is in `index.html`. Navigation uses anchor links and smooth scrolling (see `main.js`).
- **Styling:**
  - Uses Pico.css via CDN for base styles, then overrides in `styles.css`.
  - Custom CSS variables for color, spacing, and typography. Headings use Playfair Display, body uses Inter.
- **JavaScript:**
  - No frameworks. All scripts are in `js/main.js`.
  - Mobile menu toggling and smooth anchor scrolling are handled with event listeners.
  - No external dependencies or module bundling.

## Developer Workflows
- **No build step:** All files are static. Just open `index.html` in a browser to view.
- **Add new galleries or events:**
  - Edit `index.html` directly. Follow existing section structure for consistency.
- **Styling changes:**
  - Update `styles.css`. Use CSS variables for color and spacing.
- **JavaScript changes:**
  - Edit `js/main.js`. Keep logic minimal and readable.

## Conventions & Tips
- **Image references:** Always use relative paths (e.g., `images/filename.jpg`).
- **Accessibility:** Use semantic HTML elements and alt text for images.
- **Performance:** Preload key images in `<head>` for faster rendering.
- **No package.json or node_modules:** Do not add build tools or npm dependencies.
- **Meta tags:** Update Open Graph and SEO meta tags in `<head>` as needed.

## Examples
- **Add a new gallery:** Duplicate an existing gallery section in `index.html` and update content.
- **Change theme color:** Edit `--primary` and related variables in `styles.css`.

## Reference
- See `README.md` for project summary.
- For design, review the first 40 lines of `styles.css` for theme variables and typography.
- For navigation logic, see `js/main.js` (mobile menu, smooth scrolling).

---

If you add new features, keep the site static and minimal. Avoid introducing frameworks or build steps. Ask for clarification if a workflow or pattern is unclear.
