# Game Discovery App

This is a game discovery app built with React and Chakra UI, using the [RAWG Video Games Database API](https://rawg.io) for game data.

## Features

- Search for games by title
- View game details, including cover image, release date, rating, and description
- Browse upcoming games, popular games, and new releases
- Filter games by platform, genre, and tag
- Pagination for browsing large sets of games
- Responsive design for desktop and mobile devices

## Live Demo

A live demo of the app is available at [https://game-hub-dln.vercel.app/](https://game-hub-dln.vercel.app/).

## Getting Started

To run the app locally, clone this repository and install dependencies:

```bash
git clone https://github.com/daudln/game-hub.git
cd game-hub
npm install
```

Then, create a `.env.local` file in the root directory of your project and add your RAWG API key:

```
REACT_APP_RAWG_API_KEY=your-api-key-here
```

You can obtain a free RAWG API key by signing up for an account on the [RAWG website](https://rawg.io/apidocs).

Finally, start the development server:

```bash
npm start
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

## Deployment

To deploy the app to Vercel, create an account and link it to your GitHub repository. Then, create a new project in Vercel and follow the instructions to deploy the app.

## Technologies Used

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [RAWG Video Games Database API](https://rawg.io/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Credits

This app was created by [Daud L Namayala](https://github.com/daudln).
