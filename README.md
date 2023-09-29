# My Projects Gallery

Welcome to the My Projects Gallery web application, a platform designed to showcase project details in an organized and visually appealing manner. The frontend is built using React.js, styled with Tailwind CSS, and structured using HTML and CSS. On the backend, we use Node.js, and MongoDB Atlas serves as the database to store comprehensive project details.

## Prerequisites

- Ensure Node.js is installed on your local machine.
- Obtain valid credentials and connection details for MongoDB Atlas.
- A stable internet connection is required for fetching necessary dependencies.

## Setup Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/ritesh9661/my-projects-gallery.git
    cd my-projects-gallery
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the root directory and provide the following variables:

    ```plaintext
    REACT_APP_API_BASE_URL=<backend_api_base_url>
    ```

4. **Start the Frontend:**

    ```bash
    npm start
    ```

    Access the application at `http://localhost:3000`.

5. **Start the Backend:**

    Ensure the backend code and API are set up using Node.js. Start the backend server.

## Usage

- Access the web application via the provided URL (default: `http://localhost:3000`).
- Explore detailed project information fetched from MongoDB Atlas through the Node.js backend.
- Utilize the user-friendly interface to navigate and view project details effectively.

## Folder Structure

- `src/`: Contains the frontend React.js application.
- `server/`: Contains the backend Node.js application.
- `public/`: Contains static files and the main HTML file.

## Technologies Used

- **Frontend:**
  - React.js: A versatile JavaScript library for constructing dynamic user interfaces.
  - Tailwind CSS: A utility-first CSS framework for efficient and modern styling.
  - HTML: Markup language for structuring web pages.
  - CSS: Stylesheets for visually enhancing the web application.

- **Backend:**
  - Node.js: A powerful JavaScript runtime for executing server-side logic.
  - Express.js: A fast and minimalist web application framework for Node.js.

- **Database:**
  - MongoDB Atlas: A robust cloud-based database service powered by MongoDB.

## Acknowledgments

We extend our gratitude to the development communities and contributors behind React.js, Tailwind CSS, Node.js, and MongoDB. Their dedication has empowered us to create this compelling and sophisticated project showcase platform.

