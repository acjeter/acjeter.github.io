# Andrew Jeter - Portfolio

Personal portfolio website for Andrew Jeter, a Senior Computer Engineering B.S. student at UC San Diego.

Live site: https://www.andrewcjeter.com

## Overview

This website serves as a digital portfolio and introduction, showcasing my background, projects, and journey at UC San Diego in San Diego, CA. The design pays homage to San Diego and my love of the desert with a "Desert Meets Ocean" aesthetic.

## Features

- Smooth animations using Framer Motion
- Clean, simple, and responsive design
- Easy navigation with React Router
- TypeScript for type safety (I'm still learning TS and JS)
- GitHub Actions CI/CD pipeline deploying to GitHub Pages

## Tech Stack

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router

## Development

To run the project locally:

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## Building for Production

To create a production build:

```bash
npm run build
```

## Deployment

The website is deployed via GitHub Pages using GitHub Actions. 

- On push to `main`, a GitHub Actions workflow runs `npm ci` and `npm run build`.
- The built `dist/` folder is uploaded as a Pages artifact and served at `https://www.andrewcjeter.com`.
- A `404.html` file is generated as a fallback so that React Router routes work on refresh.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note**: The personal images, text content, and branding assets (including the favicon) are Copyright © Andrew Jeter and are not covered by the MIT License. You may not use them without explicit permission.
