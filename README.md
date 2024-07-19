# Weather App

This is a weather forecast application built with React and Vite. It displays current weather information based on the user's geolocation or a specified location.

## Prerequisites

Before you begin, you will need to have Node.js and npm installed on your machine. You can download them [here](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine.

2. Navigate to the project directory:

```bash
cd WeatherApp
```

3. Install the project dependencies:

```bash
npm install
```

## Configuration

This project uses the Open Weather Map APIs. You will need to sign up and obtain an API key from Open Weather Map. Make sure to subscribe to the Current Weather Data and Daily Forecast 16 Days APIs.

1. Create a .env file in the root of the project.

2. Add your API key to the .env file. Here is an example:

```env
VITE_API_KEY=your_api_key_here
```

Replace your_api_key_here with your actual API key.

## Running the Project

To start the development server, run:

```bash
npm run dev
```

This will start the application in development mode. Open http://localhost:3000 to view it in your browser.

## Build

To create an optimized production build, run:

```bash
npm run build
```

Made with ❤️ by Bruna Grassi
