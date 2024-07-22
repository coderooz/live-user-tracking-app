# Live User Tracking App

![Realtime-tracker Screenshot](https://github.com/coderooz/live-user-tracking-app/blob/main/public/images/realtime-tracker%20screenshot.png)

A real-time user tracking application that displays the locations of connected users on a map using Socket.io and Leaflet.js. This application captures users' geolocation data from their browsers and visualizes it on a map.

## Features

- Real-time tracking of users' locations.
- Display users' locations on a map using Leaflet.js.
- Automatic updates of users' positions.
- Removal of disconnected users from the map.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/coderooz/live-user-tracking-app.git
cd live-user-tracking-app
```

2. **Install dependencies:**

```bash
npm install socket.io express ejs
```

3. **Run the application:**

```bash
node app.js
```

5. **Open your browser:**

Navigate to `http://localhost:3000` to see the live user tracking in action.

## File Structure

```
project_folder
├── node_modules
├── public
│    ├── css
│    │   └── style.css
│    ├── js
│    │   └── script.js
├── views
│    └── index.ejs
├── app.js
└── package.json
```

## Future Developments:
- Adding a log/storage feature.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and see the [Contributing Guidelines](CONTRIBUTING.md) for more details.

