# E-Commerce Back-end

## Description

This e-commerce app is a command-line application that provides a back-end for an e-commerce website. It is built using the latest technologies to ensure the retail company can effectively compete in the e-commerce market.  

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## Installation
In order to use this application, ensure that you have Node.js and Node Package Manager (npm) installed on your local machine. Clone the repository, open the root directory of the application on your terminal. Within the directory, you need to add your database name, MySQL username, and MySQL password to an environment variable file. 

## Usage
Once you have set up the environment variable file, run a command `npm install` to install the required dependencies. After installing the dependencies, make sure you have MySQL initialized and running on your local machine. Enter your MySQL password when prompted. You can now run the schema and seed the commands within the app's command-line interface, using a command `npm run seed`, to populate the database tables with test data. Afterword, invoke the application by running a command `npm start`; this will start the server and synchronize the Sequelize models with the MySQL database.

You can test the API'S GET, POST, PUT, and DELETE routes in insomnia or related tools to successfully create, update, and delete data in the connected database.

You can also follow the syntax below to view a walkthrough video that demonsatrates the functionality of the application.

![Demo Video] ()

## License
N/A