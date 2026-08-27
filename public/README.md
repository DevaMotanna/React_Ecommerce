# React E-Commerce Website Course Project

A production-style **E-Commerce Website** built with **React + Vite + Tailwind CSS**, using **hardcoded local JSON files** instead of a backend.  
This project is designed lesson-by-lesson so students can learn, build, compare branch-wise code, and track progress easily.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React Icons

## Installation Setup Followed

This project setup was done in the following order:

1. Installed Tailwind CSS using the official **Tailwind CSS + Vite** documentation.
2. Installed **Lucide React** for icons.
3. Installed **React Router DOM** for page routing and navigation.

## Packages Installed

```bash
npm install
npm install tailwindcss @tailwindcss/vite
npm install lucide-react
npm install react-router-dom
```

## Tailwind CSS Setup Reference

Tailwind CSS was configured using the official Vite guide from Tailwind CSS documentation.

### Example setup used:

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```css
/* src/index.css */
@import "tailwindcss";
```

## Project Goal

The goal of this project is to build a **frontend-only e-commerce website** that looks and feels production-ready, while keeping the data static using JSON files such as:

- `products.json`
- `users.json`
- `categories.json`
- `reviews.json`
- and other supporting files

This helps students focus on:

- React fundamentals
- Component-based architecture
- Routing
- Props and state
- Reusable UI components
- Cart flow
- Checkout flow
- Real-world folder structure
- GitHub branch-based progress tracking

## Lesson-wise Branch Strategy

Each lesson is maintained in a separate Git branch so students can check the exact code for that lesson.

### Branches

- `lesson-01`
- `lesson-02`
- `lesson-03`
- `lesson-04`
- `lesson-05`
- `lesson-06`
- `lesson-07`

### Why this branch structure?

This makes it easier to:

- Share lesson-specific reference code
- Help students compare their work stage by stage
- Review code branch-wise
- Continue development cleanly from one lesson to the next

## How to Clone and Use a Specific Lesson

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Switch to a specific lesson branch:

```bash
git checkout lesson-01
```

Example:

```bash
git checkout lesson-03
```

Run the project:

```bash
npm install
npm run dev
```

## Lesson Plan Overview

## Lesson 1: Project Setup and Foundation

In this lesson, we set up the React project using Vite, configured Tailwind CSS, added routing, installed Lucide React icons, created the folder structure, added JSON data files, and built the initial layout with navbar, footer, and reusable UI components.

### Topics covered

- Vite project setup
- Tailwind CSS setup
- React Router DOM setup
- Lucide React icons setup
- Folder structure planning
- Local JSON data files
- Navbar
- Footer
- Reusable Button/Card/Badge components
- Home page base layout

### Branch

- `lesson-01`

---

## Lesson 2: Homepage UI Development

In this lesson, we expand the home page with hero sections, featured categories, featured products, promotional sections, banners, trust highlights, and reusable homepage sections.

### Topics covered

- Hero section
- Promotional banners
- Featured categories
- Featured products
- Section headings
- Homepage reusable components
- Better layout composition

### Branch

- `lesson-02`

---

## Lesson 3: Product Listing Page

In this lesson, we build the products page using local JSON data and add searching, sorting, category filters, and UI state handling.

### Topics covered

- Products page
- Product card rendering
- Category filtering
- Search functionality
- Sorting
- Price display
- Empty states
- Filter UI

### Branch

- `lesson-03`

---

## Lesson 4: Product Details Page

In this lesson, we create the product details page with dynamic route handling, image preview, product information, quantity selector, reviews, and related products section.

### Topics covered

- Dynamic routing
- Product details page
- Product lookup from JSON
- Quantity selection
- Reviews section
- Related products
- Better component reusability

### Branch

- `lesson-04`

---

## Lesson 5: Cart and Wishlist

In this lesson, we implement cart logic and wishlist functionality using React state or Context API.

### Topics covered

- Cart page
- Add to cart
- Remove from cart
- Quantity update
- Subtotal calculation
- Wishlist or save for later
- Shared cart state

### Branch

- `lesson-05`

---

## Lesson 6: Authentication and Checkout

In this lesson, we build mock authentication using `users.json` and create the checkout flow with shipping form, payment method UI, and order summary.

### Topics covered

- Mock login
- Mock register
- Using `users.json`
- Checkout form
- Address form
- Payment method selection
- Order summary
- Success page

### Branch

- `lesson-06`

---

## Lesson 7: Final Polish and Production Readiness

In this lesson, we improve responsiveness, accessibility, loading states, empty states, code cleanup, and final project readiness.

### Topics covered

- Responsive improvements
- Mobile layout fixes
- Loading skeletons
- Empty states
- Reusable alerts/toasts
- Final UI polish
- Code cleanup
- Deployment preparation
- Final project review

### Branch

- `lesson-07`

## Suggested Folder Structure

```bash
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── product/
│   ├── cart/
│   └── ui/
├── context/
├── data/
│   ├── products.json
│   ├── users.json
│   ├── categories.json
│   ├── reviews.json
│   └── other dependent files
├── hooks/
├── pages/
├── routes/
├── utils/
├── App.jsx
└── main.jsx
```

## Git Workflow for Lessons

### Create lesson-01 branch

```bash
git checkout -b lesson-01
git add .
git commit -m "lesson-01: project setup and layout"
git push -u origin lesson-01
```

### Create next lesson branch from previous one

Example for lesson-02:

```bash
git checkout lesson-01
git checkout -b lesson-02
git add .
git commit -m "lesson-02: homepage development"
git push -u origin lesson-02
```

Follow the same pattern for all remaining lessons.

## Learning Outcome

By the end of this project, students will be able to:

- Build a complete React e-commerce frontend
- Use Tailwind CSS in a Vite project
- Work with reusable components
- Use React Router DOM for multi-page UI
- Manage app state for cart and checkout
- Read and render local JSON data
- Organize a real-world frontend project
- Use GitHub branches lesson-wise for learning and code review

## Important Note

This project does **not use a backend**.  
All data is handled through local JSON files for learning and UI-building purposes.

This keeps the course beginner-friendly while still making the project look realistic and production-oriented.

## Author

Created for teaching a **7-lesson React E-Commerce course** with session-wise GitHub branch references.
