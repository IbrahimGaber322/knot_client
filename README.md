# Project Name

KNOT (Link Manager)

## Description

The Link Manager project is a web application that allows users to create link sections and add links to those sections. It provides CRUD (Create, Read, Update, Delete) functionality for managing links and link sections. The project is built using NestJS and React with TypeScript. It also includes complete authorization using Passport.js for secure user authentication. Material UI is used for styling the user interface.

In addition to managing links, the application also provides the option to add products to users. The product type includes card, keychain, and sticker. Products are associated with users and can be managed through the application.

## Features

- Create, read, update, and delete links
- Create, read, update, and delete link sections
- Secure user authentication with complete authorization
- Styling using Material UI
- Add and manage products for users

## Technologies Used

- NestJS
- React
- TypeScript
- Passport.js
- Material UI

## Installation

1. Clone the repository from GitHub.
2. Install the required dependencies using the package manager of your choice.
3. Set up the database connection and configuration.
4. Build and start the backend server.
5. Build and start the frontend client.

## Configuration

1. Configure the database connection settings in the backend server.
2. Set up authentication and authorization configurations in the backend server.
3. Customize the styling and theme options in the frontend client.

## Usage

1. Access the application through the provided URL or host it locally.
2. Sign up or log in to the application using your credentials.
3. Create link sections and add links to them.
4. Manage links and link sections using the provided CRUD functionality.
5. Optionally, add products to users and manage them through the application.

## API Reference

The application provides a RESTful API for managing links, link sections, users, and products. The API endpoints can be accessed using HTTP requests.

### Link Endpoints

- `GET /api/links` - Get all links
- `GET /api/links/:id` - Get a specific link
- `POST /api/links` - Create a new link
- `PUT /api/links/:id` - Update an existing link
- `DELETE /api/links/:id` - Delete a link

### Link Section Endpoints

- `GET /api/linksections` - Get all link sections
- `GET /api/linksections/:id` - Get a specific link section
- `POST /api/linksections` - Create a new link section
- `PUT /api/linksections/:id` - Update an existing link section
- `DELETE /api/linksections/:id` - Delete a link section

### User Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update an existing user
- `DELETE /api/users/:id` - Delete a user

### Product Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update an existing product
- `DELETE /api/products/:id` - Delete a product

Please refer to the API documentation for detailed information on request payloads and responses.

## License

This project is licensed under the [MIT License](LICENSE).
