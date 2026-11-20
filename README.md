## Getting started

Requirements: Node.js 20+ and npm. An internet connection is needed the first time
you run or build, because the fonts (Inter and Plus Jakarta Sans) are downloaded from
Google Fonts by `next/font` and then self-hosted.

```bash
# install dependencies
npm install

# run in development (http://localhost:3000)
npm run dev

# create a production build and serve it
npm run build
npm run start

# lint
npm run lint
```

## Project structure

```
app/
  layout.tsx       Fonts and metadata
  page.tsx         Composes the page sections
  globals.css      Design tokens (Tailwind @theme) and animations
components/        One component per file (sections and small reusable pieces)
assets/images/     Photos used by the components (imported statically, see below)
```

## Images

Add these files to `assets/images/` (the names must match exactly, or change the imports).

| File                                                | Used in                                      | Alt text                                                                                    |
| --------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `assets/images/hero-learner.jpg`                    | Hero                                         | Smiling learner with glasses and a denim shirt in front of a wall of colorful sticky notes  |
| `assets/images/avatar-learner-1.jpg`                | Hero and final call to action (avatar stack) | Decorative, empty alt                                                                       |
| `assets/images/avatar-learner-2.jpg`                | Hero and final call to action (avatar stack) | Decorative, empty alt                                                                       |
| `assets/images/avatar-learner-3.jpg`                | Hero and final call to action (avatar stack) | Decorative, empty alt                                                                       |
| `assets/images/featured-course-design-workshop.jpg` | Featured course                              | Designer working at a desk with paper prototypes, a cutting mat and trays of colorful parts |
| `assets/images/testimonial-alex-morgan.jpg`         | Testimonial                                  | Portrait of Alex Morgan, Product Manager                                                    |
| `assets/images/people-student-notebook.jpg`         | People collage                               | Student smiling and writing in a notebook at a desk                                         |
| `assets/images/people-study-pair.jpg`               | People collage                               | Two students studying together at a table with books                                        |
| `assets/images/people-student-laptop.jpg`           | People collage                               | Student working on a laptop at a desk                                                       |
| `assets/images/people-student-reading.jpg`          | People collage                               | Student reading a book next to a window                                                     |
| `assets/images/people-teacher-classroom.jpg`        | People collage                               | Teacher smiling in a bright classroom                                                       |
| `assets/images/people-online-class.jpg`             | People collage                               | Woman attending an online class on a laptop video call                                      |
| `assets/images/people-graduate-diploma.jpg`         | People collage                               | Graduate in a cap and gown holding a diploma                                                |
| `assets/images/people-student-library.jpg`          | People collage                               | Student choosing a book from library shelves                                                |
| `assets/images/people-student-backpack.jpg`         | People collage                               | Smiling student carrying a backpack on campus                                               |
| `assets/images/people-student-outdoor-portrait.jpg` | People collage                               | Smiling woman with curly hair posing outdoors                                               |
| `assets/images/people-student-red-book.jpg`         | People collage                               | Woman holding a red book and smiling                                                        |
| `assets/images/people-students-group.jpg`           | People collage                               | Group of international students laughing together                                           |

If you use another format (e.g. `.webp`), update the extension in the component imports.

## Design tokens

Defined in `app/globals.css` and used as Tailwind classes
(e.g. `bg-primary-blue`, `text-text-secondary`, `border-line-1`).

- **Fonts:** Inter for text, Plus Jakarta Sans for headings (H1–H5)
- **Colors:** primary-blue `#3157F6`, primary-blue-light `#E2E8FF`, primary-yellow `#E9D659`,
  secondary-yellow `#FFEE7E`, primary-orange `#FF704D`, text-primary `#171B2C`,
  text-secondary `#656770`, text-tertiary `#6D7384`, background-orange `#FFCB9F`,
  background-yellow `#FFF1C2`, background-light-yellow `#F9F8F3`,
  background-darkblue `#171B2C`, line-1 `#DBDFEB`
- **Icons:** [Lucide React](https://lucide.dev)

## Key decisions

- **Small, simple components.** Each section is its own file, and repeated UI
  (`Button`, `Eyebrow`, `CategoryCard`, `StepItem`, `StatItem`, `InfoCard`, `FormField`,
  `AvatarStack`, `FooterColumn`) is extracted so it can be reused.
- **Server components by default.** Only the pieces that need state or browser APIs
  are client components: `Navbar` (mobile menu), `ContactForm`, and `Reveal`.
- **Lightweight animations.** Only `transform` and `opacity` are animated, using plain
  CSS plus a small `IntersectionObserver` (`Reveal`) that animates each block once.
  No animation library. Everything is disabled under `prefers-reduced-motion`.
- **Tokens in CSS, not config.** Tailwind v4 `@theme` keeps colors and fonts in one place.
- **Mobile first.** Layouts stack on small screens and switch to columns from `md`/`lg`.
- **Accessibility basics.** Labelled form fields, `aria` attributes on the menu toggle,
  visible keyboard focus, decorative shapes hidden from screen readers.
- **Images.** Photos live in `assets/images/` and each component imports the ones it
  uses (e.g. `import heroLearner from "@/assets/images/hero-learner.jpg"`). They are
  rendered with a plain `<img>` through `components/Photo.tsx`, which sets `width`/`height`
  from the imported file (no layout shift), lazy-loads by default and eager-loads the hero.
  Purely decorative images (the avatar stacks) use an empty `alt`.
- **Design deviations.** The mobile design shows the contact form in Portuguese, but the
  desktop design is in English, so English is used everywhere. The "How it works" steps
  are numbered 01, 02, 03 (the design shows 01 on all three).

## Known gaps

- **Contact form has no backend.** It validates and shows a confirmation, but does not
  send the data anywhere (see the `TODO` in `ContactForm.tsx`).
- **Images must be added.** `assets/images/` ships empty: the app will not compile until
  every imported file exists. Add the files listed in the section below.
- **Placeholder content.** The "People" paragraph is lorem ipsum (as in the design) and
  course/category links point to on-page anchors.
- **Navigation links are anchors.** "Log in" and the footer links are not wired to real pages.
- **No automated tests.** Visual checks were done manually at 1440px and 390px.
- **Browser coverage.** Checked in Chromium only.
- **Production build and fonts.** Verified the build with the Google fonts stubbed out
  (the development environment had no access to Google Fonts), so run `npm run build`
  once with internet access to confirm the full build.
- **Approximate, not pixel-perfect.** Spacing and sizes follow the reference designs closely
  but were not measured against them.

## Time spent

Approximately **10 hours**

## AI tools used

- **Claude (Anthropic)** was used to troubleshoot issues, refine key details and speed up
  repetitive tasks during development. All code was reviewed and adjusted by me.
