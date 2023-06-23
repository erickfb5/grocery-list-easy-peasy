Grocery List App
================

This is a simple Grocery List App that allows users to manage their shopping list. Users can add items to the list, search for specific items, and remove items from the list.

The app is deployed on both [Netlify](https://www.netlify.com) and [Render](https://render.com).

 - [https://grocery-list-app-ep.netlify.app](https://grocery-list-app-ep.netlify.app) 
 
 - [https://grocery-list-app-ep.onrender.com](https://grocery-list-app-ep.onrender.com)

Installation
------------

##### To run the Grocery List App locally, follow these steps:

1. Clone the repository: `git clone [repository-url]`

2. Navigate to the project directory: `cd grocery-list-easy-peasy`

3. Install the dependencies: `npm install`

4. Start the development server: `npm start`

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000/) to access the app.

Usage
-----

##### The Grocery List App allows you to manage your shopping list effectively. Here are the key features:

- Add Item: Use the "Add Item" input field to enter a new item and click the "Add" button to add it to your shopping list.

- Search Item: Use the "Search Item" input field to search for specific items in your shopping list. The list will dynamically update as you type.

- Content: The main content area displays the list of items. You can view and delete items from the list.

- Footer: The footer section displays the total number of items in your shopping list.

Store
-----

##### The Grocery List App uses Easy Peasy to manage its store. The store consists of the following properties and actions:

- items: An array representing the shopping list items.

- setItems: An action to update the shopping list items.

- newItem: A string representing the value of the input field for adding new items.

- setNewItem: An action to update the value of the input field for adding new items.

- search: A string representing the search query.

- setSearch: An action to update the search query.

- listCount: A computed property that calculates the total number of items in the shopping list.


License
-------

This project is licensed under the [MIT License](https://opensource.org/license/mit/).

Feel free to contribute, report issues, or submit pull requests.