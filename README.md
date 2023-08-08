=======

# StarWars DashBoard

# \__Using Swapi_ [🔗](https://swapi.dev/)

# Dependencies:

        "@tailwindcss/aspect-ratio": "^0.4.2",
        "@testing-library/jest-dom": "^5.16.1",
        "@testing-library/react": "^12.1.2",
        "@testing-library/user-event": "^13.5.0",
        "bootstrap": "^5.3.1",
        "node-modules": "^0.0.1",
        "react": "^17.0.2",
        "react-audio-player": "^0.17.0",
        "react-bootstrap": "^2.8.0",
        "react-dom": "^17.0.2",
        "react-helmet": "^6.1.0",
        "react-icons": "^4.3.1",
        "react-query": "^3.39.3",
        "react-router-dom": "^5.3.4",
        "react-scripts": "^5.0.1",
        "styled-components": "^5.3.3",
        "web-vitals": "^2.1.4"

[Live](https://star-wars-five-pi.vercel.app/)

# Folder structure

src/
|-- components/
|-- pages/
|-- HomePage.js
|-- features/
|-- Films.js
|-- People.js
|-- Planets.js
|-- StarShips.js
|-- Species.js
|-- Vehicles.js
|-- Routes.js

# Description:

HomePage.js: This file contains the component for the homepage of the Star Wars dashboard. It might include the overall layout and links to navigate to different features.

Films.js: This file contains the component to display information about Star Wars films. It might include the logic and UI elements to display films in either grid or list view.

People.js: This file contains the component to display information about important people in the Star Wars universe. It might include the logic and UI elements to display people in either grid or list view.

Planets.js: This file contains the component to display information about planets in the Star Wars universe. It might include the logic and UI elements to display planets in either grid or list view.

StarShips.js: This file contains the component to display information about starships in the Star Wars universe. It might include the logic and UI elements to display starships in either grid or list view.

Species.js: This file contains the component to display information about species in the Star Wars universe. It might include the logic and UI elements to display species in either grid or list view.

Vehicles.js: This file contains the component to display information about vehicles in the Star Wars universe. It might include the logic and UI elements to display vehicles in either grid or list view.

Routes.js: This file contains the routing configuration for the entire application. It imports the necessary components from the pages directory and sets up the routes using Switch and Route components from React Router DOM.

The Routes.js file exports the Routes component, which is responsible for rendering the appropriate component based on the URL path. When a user navigates to different routes, React Router DOM will match the URL path with the defined routes and render the corresponding components.

For example, when the user visits the URL path /films, the Film component will be rendered. Similarly, visiting /people, /planets, /starships, /species, or /vehicles will render the corresponding components People, Planets, StarShips, Species, or Vehicles, respectively. The HomePage component will be rendered for the root URL /.

Ensure that you have the necessary components defined in the corresponding files and that you have set up the React Router DOM in your main application file to use the Routes component. With this setup, your Star Wars dashboard will have a routing system in place to navigate between different features/pages

# Search function

<per>
import React from "react";

function Input({ searchQuery, setSearchQuery }) {
return (
<div>
<input
type="text"
placeholder="Search by name or title"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
className=" absolute p-2 border rounded-md right-10 text-black"
/>
</div>
);
}

export default Input;

</per>
