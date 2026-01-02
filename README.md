
# Professional Portfolio Setup Instructions

Follow these steps to get your full-stack portfolio running locally.

## Prerequisites
- Node.js installed (v16+)
- PostgreSQL installed and running

## 1. Project Structure
The project is split into `frontend` and `backend` for clear separation of concerns.

## 2. Database Setup
1. Open your PostgreSQL terminal (psql) or a tool like pgAdmin.
2. Create a new database:
   ```sql
   CREATE DATABASE portfolio_db;
   ```
3. Run the SQL commands found in `schema.sql` to create the table.

## 3. Backend Setup
1. Navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   npm install express pg dotenv cors
   ```
3. Create a `.env` file based on `.env.example` and fill in your PostgreSQL credentials.
4. Start the server:
   ```bash
   node server.js
   ```

## 4. Frontend Setup
1. Create a new Vite app in a `frontend` folder if not already present:
   ```bash
   npm create vite@latest frontend -- --template react
   ```
2. Install dependencies:
   ```bash
   cd frontend
   npm install react-router-dom axios
   ```
3. Add Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
4. Copy the provided `.tsx` files into the `src` directory according to the structure.
5. Start the development server:
   ```bash
   npm run dev
   ```

## 5. Testing the Contact Form
1. Ensure both the frontend and backend servers are running.
2. Go to the "Contact" page in your browser.
3. Fill out the form and click "Send Message".
4. Check your PostgreSQL `contact_messages` table to see the new entry!
