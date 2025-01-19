# NASA Media Observer

NASA Media Observer is a web application designed to search, discover, and visualize media from NASA's image and video library. This project demonstrates the Observer design pattern by integrating user interactions with real-time updates to the UI.

## Features

- Search NASA's media library using a keyword.
- Filter search results by media type: images, videos, or audio.
- Dynamically update the user interface based on Observer pattern principles.

## Technologies Used

- HTML, CSS, and Bootstrap for responsive design.
- JavaScript (ES6+), including modules.
- NASA API for fetching media data.

## Project Structure

- `index.js`: Main entry point of the application that handles user interactions and connects components.
- `eventHandler.js`: Manages event-driven interactions and API calls.
- `base.js`: Defines core classes for the Observer pattern, such as `NasaObject`, `SolarObject`, `ObserverUI`, and `Utility`.
- `nasaSearch.html`: The HTML structure for the application, including the search bar, radio buttons for filters, and result display.
- `style2.css`: Custom styling for the application.

## How It Works

### Observer Design Pattern
The project implements the Observer pattern, with the following components:
- **Subject (e.g., `NasaObject`)**: Tracks state changes and notifies observers.
- **Observer (e.g., `ObserverUI`)**: Updates the user interface when notified.
- **Event Handler**: Coordinates actions and serves as a bridge between user input and the application logic.

### Workflow
1. Users enter a keyword and select a media type (image, video, or audio).
2. The `EventHandler` fetches data from the NASA API based on the keyword and media type.
3. The `NasaObject` updates its state with the fetched data.
4. The `ObserverUI` listens for changes in `NasaObject` and updates the HTML with the search results.

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nasa-media-observer.git
   cd nasa-media-observer
