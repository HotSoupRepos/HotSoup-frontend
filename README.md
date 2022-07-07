Welcome to HotSoup!
HotSoup is a free, open source soup kitchen/food pantry location app! It is free and downloadable across both iOS and Android platforms. It helps users to find local hot soup kitchens with 1-3 clicks, by allowing the user to either search by their location or to enter an address. The goal is to help people who are food insecure find their next free, hot meal easier and faster. With accessibility and ease of use in mind, we aim to help as many folks get fed as possible easier and with comapssion. HotSOup is available as a mobile format with desktop/web coming soon!

This project is current run exclusively by a wonderful crew of 100% volunteers, please take a look at our amazing Discord server where all the teams are working together to coordinate the features and deliverables - you might be amazed to see the level of work these folks are producing, especially since a lot of us are new to the software industry!!!

https://discord.gg/3H9CFN3Wqd

HotSoup is divided into 2 parts
HotSoup has 4 main UX types:

Screens that the user can navigate to freely or is navigated to automatically depending on which user flow the user is currently partaking in.

Tabs and Stack Navigators to allow the user to enter/exit/control their desired user-flow movement within the app to customize their user experience at any time.

Integrated Map API to render the search results in a commonly used and easy to understand format to allow the user to see where on the map the results are. The map is interactive, can be clicked on to generate directions to a map location, pinchable to zoom in/out, and also has all of the other standard types of interactivity integrated map APIs have.

Search Results List with Expanded Info Pop-Up to allow the user to view the search results as a list, with a button that triggers a pop up to allow the user to not need to navigate anywhere else, which gives the user to option to expand certain data points, such as location hours, to allow user to learn more about each individual seach result.

HotSoup has 3 pages

Landing Page contains a "search near me" button for user to search for local soup kitchens by their location and an input field to allow them to input their address - can be done by city, zipcode, or entire address - these search params query the database and then automatically send the user to the results page showing the

Search Result Page contains the integrated map API with the search results list, which contains the pop-up button that allows the user to see more inforamtion per search result

About Page contains all the info about the app, as well as more information about the project itself, which covers the group of volunteers that have put the app together.

More Information In the Readme Folder!
Please navigate to the other parts of the readme folder to see how to get involved in the project, including things such as code submission requirements, technical set-up, more information on the back-end repo, various technical documents, how to submit requests for adding new features, and more!

To check the code out, git clone this repo and cd into the directory.
We recommend using VSCode as your IDE.

You will need to install Node to run this app: https://nodejs.org/en/

We are using Yarn as the package/dependency manager: https://yarnpkg.com/

To install Yarn:
```
npm install --global yarn
```

In the project directory, you can run:

```
yarn install
```

to add node_modules

Then you should be able to run expo start to access a local build of the app on your phone.

Note: To test the app with dummy data, you will have to run a local instance of the backend in another terminal window. Backend repo/instructions: https://github.com/HotSoupRepos/HotSoup-backend
