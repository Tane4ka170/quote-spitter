# Quote Splitter

![Quote Splitter Screenshot](screenshot.png)

## Description

**Quote Splitter** is a simple React application that displays random quotes. You can refresh the quote or share it on Twitter. The app uses an API to fetch a list of quotes and allows the user to quickly select a new random quote.

## Features

- Displays a random quote.
- Refreshes the quote with a button.
- Shares the quote on Twitter.

## Project Structure

- `public/` - Contains static files such as `index.html`, icons, and the manifest.
- `src/` - Main project code:
  - `components/RandomQuote/RandomQuote.js` - Component for displaying random quotes.
  - `assets/` - Images for icons (Twitter and reload).
  - `App.js` - Main app component.

## Usage

### 1. Clone the Repository

```bash
git clone https://github.com/Tane4ka170/quote-splitter.git
```

### 2. Install Dependencies

```bash
cd quote-splitter
npm install
```

### 3. Run the App

Start the app in development mode:

```bash
npm start
```

The app will be available at http://localhost:3000.

### 4. Build for Production

To create an optimized build for production:

```bash
npm run build
```

The build will be located in the build/ directory.

## Additional Information

- API: dummyjson.com/quotes - Used to fetch random quotes.
- React - Frontend library for building user interfaces.
- Twitter API - Used to share quotes.
