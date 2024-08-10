# Installation

Follow these steps to set up and run customer-portal on your local machine.

## Instructions

#### 1. Clone the Repository

Begin by cloning the repository to your local machine using the following command:
  ```sh
  git clone https://github.com/parthy007/customer-portal.git
  ```

#### 2. Navigate to the Client Directory
  ```sh
  cd customer-portal
  npm install
  ```

#### 3. Configure Environment Variables

Create a .env file in the root directory of the project. Obtain an API key from Pixabay by visiting [Pixabay API Documentation](https://pixabay.com/api/docs/ "Pixabay API Documentation"), and add it to the .env file with the following format:
  ```sh
  REACT_APP_PIXABAY_API_KEY=your_pixabay_api_key_here
  ```

#### 4. Start the Development Server
  ```sh
  npm start
  ```
The application will be available at http://localhost:3000.
