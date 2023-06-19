# ComiC

ComiC is a mobile app built with React Native that displays a collection of anime fetched from the RapidAPI. The app allows users to browse and explore various anime titles, view their details, and access additional information about each anime.

## Features

- **Anime Listing**: Display a list of anime titles with their main pictures, titles, and other relevant information such as MAL ID, year, mean, rank, studios, and synopsis.
- **Pagination**: Implement pagination to load additional anime titles as the user scrolls down the list.
- **Anime Details**: Allow users to view additional details about an anime, including its description.
- **RapidAPI Integration**: Fetch anime data from the RapidAPI service using the provided API endpoint.
- **State Management**: Utilize the `@tanstack/react-query` library for efficient state management and data caching.
- **Styled Components**: Use `styled-components` to style the app's components, providing a consistent and visually appealing user interface.
- **TypeScript**: Develop the app using TypeScript for static typing and improved code reliability.

## Installation

To set up the ComiC app on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ComiC.git
   ```

2. Navigate to the project directory:
   ```
   cd ComiC
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Configure the RapidAPI credentials:
   - Create an account on [RapidAPI](https://rapidapi.com/).
   - Obtain an API key to access the anime data.
   - Update the API key in the appropriate location within the code (usually in the API service file).

5. Start the development server:
   ```
   npm start
   ```

6. Use the Expo CLI to launch the app on your desired platform (iOS, Android, or web). You can run the app on a connected physical device or an emulator/simulator.

## Demo

You can also try out the ComiC app by accessing it through Expo Go. Click on the following link:

[ComiC Expo Link](https://expo.dev/@kvbxss/ComiC?serviceType=classic&diistribution=expo-go)

This link will allow you to open the app in Expo Go on your mobile device and explore its features.

## Technologies Used

- React Native
- Expo
- TypeScript
- @tanstack/react-query
- styled-components
- RapidAPI

o project.

## Contributing

Contributions to ComiC are welcome! If you find any bugs or have suggestions for new features, please open an issue on the GitHub repository. If you'd like to contribute code, you can fork the repository and create a pull request with your changes.

When contributing, please adhere to the existing code style and follow the repository's [code of conduct](CODE_OF_CONDUCT.md).

## License

ComiC is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React Native](https://reactnative.dev/) for enabling the development of cross-platform mobile applications using JavaScript and React.
- [Expo](https://expo.dev/) for providing a development environment and tools to simplify React Native app development.
- [TypeScript](https://www.typescriptlang.org/) for enhancing code reliability and scalability through static typing.
- [@tanstack/react-query](https://react-query.tanstack.com/) for efficient state management and data caching.
- [styled-components](https://styled-components.com/) for simplifying component styling and theming in React Native.
- RapidAPI for providing the anime data API used in the ComiC app.

---

Feel free to modify and enhance this README file to match the specific details of your ComiC project.
