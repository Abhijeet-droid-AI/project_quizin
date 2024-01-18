# Quizin

This is a quizin practice app built as an internship assignment, data include a list of 21 questions.

The app has the following features:

-   Ten non-repeated questions each round.
-   Timed rounds with timer stopped during answer checking.
-   Scoreboard ranking all users' submissions by score and time.

I used this project to learn and experiment with Next.js's serverless functions and stale-while-revalidate (SWR). So you will see different techniques used for fetching data. For example:

-   Directly get data from the database, through Next.js's `getServerSideProps`, for the /trivia page.
-   Exposing data through an API and fetch them on the client-side through SWR, using the `useScores` hook, for the /socre page.

I also used this project to learn MongoDB, so you will see different methods used for saving and retrieving data. For example:

-   Directly getting trivia question data from firestore.
-   Posting and getting score data through firebase.

## Demonstration

Demo the project in action at [Quizin](https://trivia-master.vercel.app)

## Built With

-   [Next.js](https://nextjs.org) - A React framework.
-   [Firebase](https://www.firebase.google.com) - Document-based database.
-   [Chakra UI](https://chakra-ui.com/) - Styling component library.

## How to use

### Install and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

### Configuration:

Get and set up the following local environment variables:

-   GITHUB_CLIENT_ID & GITHUB_CLIENT_SECRET: follow this [GitHub Guide](https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps) on how to authorize OAuth apps.
-   NEXTAUTH_URL: this should be 'http://localhost:3000'.
-   JWT_SECRET: generate your own.

## Author

-   **Abhijeet Dass** - _Developed the app_ -
    [Abhijeet-droid-AI](https://github.com/Abhijeet-droid-AI)
