# README

Feryadi Yulius

Access my website: https://feryadiyulius.dev/

# Welcome to my Portfolio Website!

This is a [Next.js](https://nextjs.org/) powered portfolio showcasing my projects, skills, and experience.

## Technologies Used

-   **Framework**: [Next.js](https://nextjs.org/) (React framework)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Devicon](https://devicon.dev/)
-   **AI Integration**: [Google Gemini API](https://ai.google.dev/)
-   **Deployment**: Vercel

## Features

-   Responsive design
-   Dark mode support
-   Project showcase with details
-   Skills and tools section
-   Contact form
-   AI-powered content generation (experimental)

## Running Locally

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Set up environment variables:
    Create a `.env.local` file in the root directory with the following:
    ```env
    # Next.js
    PORT=9002

    # Google AI
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:9002](http://localhost:9002) in your browser.

## Development

This project uses [Flows](https://flowiseai.com/) for AI-powered features. Flows are defined in the `src/ai` directory.

## Project Structure

-   `src/app/`: Next.js pages
-   `src/components/`: Reusable React components
-   `src/ai/`: AI flows and agents
-   `public/`: Static assets (including logos)

## License

MIT