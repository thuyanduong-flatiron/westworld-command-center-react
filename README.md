# Westworld Command Center

![alt main](https://cdn-images-1.medium.com/max/2000/1*BnjGd8N6zu9-Fe6stEJDEg.png)


Overview
========
The Executives at Delos Inc. need you to help them build some software for their new theme park: WestWorld. WestWorld is an interactive theme park where guests get to experience life in the Wild Wild West with the help of some AI known as "Hosts". But WestWorld needs a way to deploy these hosts to their areas of the park and bring them back to "Cold Storage" where they can be repaired or retired. Your job is to create a React based interface that allows you to select Hosts, activate them by sending them to their assigned area of the park or deactivate them by calling them back to Cold Storage. Your application should look something like when the page loads:

![TODO: Update image])

Note on Styling
---------------
The styling is a mix of pre-written CSS and Semantic components. Don't worry about it too much. As long as you're using the className's and id's we suggest everything should be fine. If you have a question about how one of the Semantic components works, search for the component in the Semantic docs for a complete run down:

[Semantic UI React Docs](https://react.semantic-ui.com/)

Clone
-----
`git fork` and `git clone` this repo onto your computer.

Run `npm install && npm start` in your terminal to start the React application.

DB
--
The database is based on a db.json file in the repo. There will be no Posts or Patches, only Get requests.

Run `json-server --watch db.json --port 4000` in your terminal to start the server on port 4000 (so you can run React on port 3000 simultaneously).

Endpoints:
1. GET /hosts
2. GET /areas


Deliverables
============

The components and styling have already been given to you. It'll be your job to import the components in the right order to build the component tree correctly and add most of the logic.

Checkpoint 1: Build the Component Tree
--------------------------------------
Determine how the component tree should be built. Some of the component tree has already been built for you. Before you get started, it is highly suggested to draw your existing component tree on paper. Then using visual clues from the example gif and clues from the comments within the code, where should the other components go in your component tree? A couple things to note:

1. The root component is `App`. Within App, there are two main sections to this application: The top half (`WestworldMap`) and the bottom half (`Headquarters`). How should each of those components import the components that live inside them?
2. Aside from visual cues, what functional cues can you get from the application? For example, it seems that the  West World Map contains multiple areas. A single `Area` component seems to hold hosts in a type of list. So what component does an area need to render that list? Is there another component that also holds hosts in a list that's not an area component?
3. Remember that two separate component branches can import the same component.

Checkpoint 2: Determine Where State Lives
-----------------------------------------
You're going to be fetching information from two endpoints `/areas` and `/hosts`. Make sure you have taken a good look at this data and come up with a good way to store state. Where should you be doing that and where should that data live once it's been fetched?

Checkpoint 3: Render the Areas
------------------------------
Area information comes in through the `/areas` endpoint. You'll have to use that information to render the right number of area components on the map. Styling is given for you but you'll have to pass the area name to the `id` attribute to make it appear in the right place on the map. For example `id=python_pass` or `id={areaObject.name}`.

Checkpoint 4: Render the Hosts
------------------------------
The `Host` component represents a host Thumbnail. Be sure the thumbnail shows up appropriately.

A host will either has a status of `active: false` or `active: true`. If the host has property `active: true`, that `Host` is Active should be rendered the correct `Area` component as specified in that host's area property. If the host has a property `active: false`, they are Decommissioned and should instead be rendered in the `ColdStorage`. Make sure you render all `Host` components to the right place on load of the page. Only one `Host` can exist on the screen at a time. If they're in `Cold Storage` then they're not on the `WestworldMap` and visa versa.

BEFORE MOVING ON: Double check, are you making sure you are only rendering active hosts on the West world map? Remember, some hosts are not active and should instead be rendered in the Cold storage.

Checkpoint 5: Details
---------------------------
IMPORTANT: Once you have successfully rendered the correct areas and the hosts in their correct place, you do not need to communicate with the server for the rest of the app. This last feature will only affect how the `App` is rendered on the front end WITHOUT persisting the changes to the back end.

Follow these rules for activating and decommissioning hosts:

1. On load of the page, your `Details` component should show an image that is the West World logo.
2. Clicking on any `Host` component will have the `Details` component display more information about that `Host`. Is there a component that might be useful for displaying info about a host???
3. If a host's active attribute is set to false then they are decommissioned and should appear in ColdStorage. The HostInfo radio button should reflect this as well, reading "Active" if `active: true` and "Decommissioned" if `active: false`.
4. Clicking on the radio button toggles the active status of that host, and the `WestworldMap` and `ColdStorage` should re-render accordingly.

For example, Hector is rendered in the Lowlands area on load of the page. Clicking on Hector will show more information about him on the bottom-right of the screen. In his host information, I can see he is active. If I click on the toggle (radio button), he becomes decommissioned and I immediately see him thumbnail in Cold Storage instead of on the map.

BONUS: Format the name in each `Area` component to remove underscores and capitalize all words for the label. Ex: 'high_plains' should be displayed as "High Plains".
