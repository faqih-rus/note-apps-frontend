# Notes Application

![Notes App](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F25006367-3d-illustration-icon-of-purple-notes-and-pencil-for-ui-ux-web-mobile-apps-social-media-ads-design&psig=AOvVaw0CjXzxNmgGTWxkoS3_hYSi&ust=1723473440653000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIia1YuV7YcDFQAAAAAdAAAAABAE)

## Overview

Welcome to the **Notes Application**, a robust and user-friendly platform designed to manage your notes efficiently. This project is built using modern web technologies like **Node.js**, **PostgreSQL**, **GraphQL**, and **Chakra UI**. The application enables users to create, read, update, and delete notes seamlessly, with a sleek and responsive interface.

### 🔗 Live Demo

Check out the live version of the application [here](#).

## Features

- **Create Notes**: Easily add new notes with a title and body.
- **View Notes**: Browse through all your notes with detailed views.
- **Edit Notes**: Modify your notes and keep them up to date.
- **Delete Notes**: Remove notes that you no longer need.
- **Responsive Design**: Enjoy a consistent user experience across all devices.

## Tech Stack

- **Backend**: Node.js, Express, PostgreSQL, GraphQL
- **Frontend**: React, Chakra UI, Apollo Client
- **Database**: PostgreSQL
- **GraphQL**: For flexible API queries and mutations
- **Chakra UI**: For modern and accessible UI components

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js
- PostgreSQL
- Yarn or NPM

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```

3. **Set up the database:**
   - Create a PostgreSQL database.
   - Update the database connection settings in `.env`.

4. **Run migrations:**
   ```bash
   yarn migrate
   ```
   or
   ```bash
   npm run migrate
   ```

5. **Start the application:**
   ```bash
   yarn start
   ```
   or
   ```bash
   npm start
   ```

### Usage

- **Local Development:** 
  - Access the application at `http://localhost:3000`.

- **GraphQL Playground:** 
  - Explore API queries and mutations at `http://localhost:4000/graphql`.

## Project Structure

```
|-- backend/
|   |-- server/
|   |   |-- db/
|   |   |   |-- config.js
|   |   |   |-- schema.js
|   |   |-- graphql/
|   |   |   |-- resolvers.js
|   |   |   |-- typeDefs.js
|   |   |-- routes/
|   |   |   |-- notes.js
|   |-- package.json
|-- frontend/
|   |-- src/
|   |   |-- app/
|   |   |   |-- components/
|   |   |   |-- graphql/
|   |   |   |-- lib/
|   |   |   |-- notes/
|   |   |   |-- styles/
|   |-- package.json
|-- README.md
```

## Contribution Guidelines

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

## About This Project

This project is part of the **MSIB 7 selection test** under the **Dibimbing** program. It showcases my skills in full-stack development, particularly in building a CRUD application with modern web technologies.

---

Feel free to replace placeholders like repository URLs, images, and links with your actual content. This template is designed to be both informative and visually appealing.