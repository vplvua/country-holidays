# Holiday Explorer

Holiday Explorer is a web application built with Angular, allowing you to explore holiday information for over 100 countries worldwide. It provides an intuitive interface to browse and search for public holidays across different nations, helping users plan their international schedules or simply learn about cultural celebrations around the globe.

## Technical Stack

- Frontend Framework: Angular (version 18.2.0)
- Language: TypeScript
- Styling: CSS
- API Integration: HTTP Client Module

## Key Features

- Browse holidays for more than 100 countries
- Search holidays by country
- View detailed information about country holidays
- Access holiday data for a wide range of years, from 2020 to 2030
- Efficient data management and rendering with Angular's powerful features

The application leverages the [Nager.Date API](https://github.com/nager/Nager.Date) to fetch accurate and up-to-date holiday information.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/)
- You have read [Angular's documentation](https://angular.io/docs).

## Installing Holiday Explorer

To install the application, follow these steps:

1. Clone the repository
   ```
   git clone https://github.com/vplvua/country-holidays
   ```
2. Navigate to the project directory
   ```
   cd country-holidays
   ```
3. Install dependencies
   ```
   npm install
   ```

## Using Holiday Explorer

To use the application, follow these steps:

1. To run the application in development mode:

   ```
   make run
   ```

   This will start the development server. Open your browser and navigate to `http://localhost:4200/`.

2. To build the application for production:
   ```
   make build
   ```
   This will create a `dist/` directory with the built application.

## Development

This project uses a Makefile to simplify common development tasks:

- `make clean`: Removes the `dist/` directory.
- `make ft`: Formats the code using Prettier.
- `make lint`: Lints the code using ESLint.
- `make test`: Runs the unit tests.
- `make build`: Formats and lints the code, then builds the application.
- `make run`: Starts the development server.
