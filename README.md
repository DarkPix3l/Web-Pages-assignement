# Web-Pages-assignement

- [Live Preview](https://cla-web-pages-tes.netlify.app/)

## Part1

Development of the HTML structure for select web pages of the CLA competitive programming platform, to be progressively built in future assignments.

## Part 2

Create the styling for the HTML pages from the previous assignment.

Before starting a project, I always spend a lot of time thinking about how to approach it. This process is closely tied to design methodology.

For this project, I'm considering a modular approach, focusing more on pages rather than individual components. There will be a global stylesheet containing essential setups such as variables, resets, and basic styling, which will be accessible across all pages.

### Are there any downsides to this approach?

- Dependency on the global stylesheet – If the main stylesheet fails to load, all other styles will be affected. To mitigate this, it’s good practice to use fallbacks—something important to keep in mind.

- Loading order issues – The global stylesheet must always be loaded before any page-specific CSS to prevent styling conflicts. Ensuring the correct order in the <head> section is crucial.

- Potential performance impact – Since the browser has to make multiple requests to load separate stylesheets, this could slightly slow down performance, especially for large websites. I plan to monitor whether this becomes an issue.

- To optimize performance, I will try loading fonts directly in the HTML and avoiding @import in CSS whenever possible.

### What Can Be Improved?

- **Fallbacks & Critical CSS** - Implementing **fallback styles** or adding **inline critical CSS** can help ensure that essential styles load even if the main stylesheet fails.
- **Minification** - Research suggests that **minifying CSS** can reduce load times, improving overall performance.

### What’s Still Missing?

- **Form Validation** – Not currently required, but it's an interesting topic to explore for future improvements.
- **Responsive Design** – While responsiveness wasn't a requirement, I kept it in mind during development. The website looks good up to **tablet size**, but **mobile-specific media queries** still need to be added if necessary.

---

## Part 3

For this assignment, your objective is to create the mobile version of the landing page by utilizing media queries.

---

## Part 4

In this task, you'll enrich the webpage's interactivity by integrating JavaScript.
Initially, you'll concentrate on integrating the testimonials section, followed by
implementing form validation.

---

## Part 5

In this assignment, you'll refactor your code and rebuild the page using Tailwind CSS.

### Tailwind Refactoring Approach

The goal of this refactoring was to transition the existing CSS-based styling to Tailwind while maintaining readability, reusability, and efficiency. I aimed to improve maintainability by leveraging Tailwind’s utility-first approach while also preserving essential parts of the previous CSS setup.

**Reusing Existing Styles**
Instead of discarding all previous CSS, I extracted commonly used styles and incorporated them into Tailwind’s @layer base and @layer components.

For global styles like typography, spacing, and form elements, I kept them in @layer base to ensure consistency across the project.

**Defining Custom Components**
Some elements required repeated styling, so I used @layer components to define reusable utility classes, such as:

.purple-fill-btn for primary buttons

.purple-border-btn for outlined buttons

.list-card for structured content blocks

**Ensuring Responsiveness**

Mantained responsive typography using clamp() in the base styles.
Used Tailwind’s breakpoints (sm:, md:, lg:) to control layout shifts across different screen sizes.
