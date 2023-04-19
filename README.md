This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

***Remember to add the mongoDB connection URI to your .env.local file like this:***
```bash
MONGODB_URI="mongodb://localhost:27017"
```

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

## Conventions for working with issues, labels and milestones

-   Every issue represents a child-issue.
-   Every child-issue belongs to a user story.
-   Every user story is a label, and child issues are connected to a label.
-   When a developer has finished a issue, type "Fix #numberOfIssue" in commit-message to close given issue.
    -   Or, click into issue and click on "create merge request". this will create a branch that is connected to given issue.
        When this branch is merged with main, issue will automatically close.
-   Every issue is connected to a milestone.

## Git commit and merging coventions

-   Conventions for creating branches, issues, and merge requests can be found in the wiki.
-   Merge mainbranch into your workingbranch locally before merging into main in gitlab.
    -   This way there wont be any merge-issues anywhere else than on your local pc.
-   In commit message:
    -   Subject line must be written in imperativ form, e.g. "Add (...)" or "Fix (...)"
    -   Subject line should not have punctuation
    -   Separate subject line andbody with a blank line (not needed in most IDE's e.g. VSCode by default)
    -   Try to keep the subject line concise
    -   Use the body to explain what and why
    -   Separate body and footer with a blank line
    -   Include "#{issue number}" in the footer of the commit-message

## Project setup and running rules

## Collaborate with your team

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
