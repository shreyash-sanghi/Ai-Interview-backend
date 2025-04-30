# Backend Setup

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repository-url>
   cd <your-backend-folder>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory** and add the following environment variables:
   ```env
DB_URI = mongodb+srv://spayasi78:56qLkkupnxVxNTs4@cloudsek.lcbq0.mongodb.net/?retryWrites=true&w=majority&appName=cloudSEK
PORT = 3001
UserToken = sdhgfhew37846234mq&^98&fgh2323vbntsjzuya&%9fdn
   ```

## Running the Backend Server

To start the server in development mode, run:
```sh
npm run dev
```
This will start the server on `http://localhost:3001`.

## API Endpoints

### 1. Get All Posts (with Pagination)
**Endpoint:** `GET /api/posts?page={page}&limit={limit}`
- **Query Parameters:**
  - `page` (default: 1) - The page number.
  - `limit` (default: 5) - The number of posts per page.
- **Response:**
  ```json
  {
    "success": true,
    "data": [...],
    "totalPosts": 100,
    "totalPages": 20,
    "currentPage": 1
  }
  ```

## Folder Structure
```
/backend
│-- src
│   │-- controllers
│   │-- models
│   │-- routes
│   │-- config
│   ├── index.js
├── package.json
├── .env
├── README.md
```

## Additional Scripts
- **Start in production mode:**
  ```sh
  npm start
  ```

- **Run with Nodemon (for development):**
  ```sh
  npm run dev
  ```

## License
This project is licensed under the MIT License.

