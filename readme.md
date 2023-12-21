## Features

This application includes the following pages:

- Home
- About
- Register
- Login
- Logout
- Dashboard

### Home

The homepage is the starting page of the project. It provides general information about the project.
<p align="center">
<img width="700" src="/public/images/home.png" />
</p>

### About

An 'About' page has been additionally added. It is a page containing general information about the company that owns the product.

<p align="center">
<img width="700" src="/public/images/about.png" />
</p>

### Register

It is the page where the user registers for the system. For instance, if the required information is not entered, such as the username being less than 8 characters, or if all fields are not filled out, then one cannot register for the system.

<p align="center">
<img width="700" src="/public/images/register.png" />
<img width="700" src="/public/images/regiter2.png" />
</p>

### Login

If the user has registered for the system, this is the page where they can log in with their username and password. After logging in, the menu section changes to display 'dashboard' and 'logout' options. This way, the user can either log out of the system or navigate to the dashboard page.

<p align="center">
<img width="700" src="/public/images/login.png" />
</p>


### Dashboard

#### Please pay attention
This page is for adding and removing factories. However, I haven't coded the database and backend parts for this page.

<p align="center">
<img width="700" src="/public/images/dashboard.png" />
</p>

# Project Features

## 1. Node.js & Express.js
- **Server Structure**: Preferred technologies for fast and scalable server architectures.
- **Middleware Support**: Express supports a middleware mechanism for handling HTTP requests, allowing us to easily add functionalities.

## 2. EJS Template Engine
- **Dynamic Content**: EJS is used to create dynamic content server-side, enabling us to serve user-specific content using data fetched from the database.
- **Templates**: It reduces code repetition by creating reusable and customizable templates.

## 3. MongoDB Atlas
- **Cloud-Based**: A cloud-based database solution offering high availability and scalability.
- **Data Storage**: User information, products, and other relational data are securely stored in MongoDB.

## 4. ENV
- **Security**: Environmental variables are used to store sensitive information, enhancing the security of the code.
- **Configuration**: It offers configuration options for different environments (development, production, etc.).

## 5. MVC Architecture
- **Organization**: The Model, View, and Controller layers ensure organized code.
- **Ease of Maintenance**: MVC makes the code more sustainable and easier to maintain.

## 6. Bcrypt.js
- **Encryption**: User passwords are hashed to be securely stored.
- **Security**: It provides protection against brute-force attacks.

## 7. Authentication & Authorization
- **Authentication**: JSON Web Token (JWT) is used to authenticate user identities.
- **Authorization**: It controls user access to specific resources and manages authorization processes.

## 8. Cookie Parser
- **Cookie Handling**: It parses cookies sent by the client, making them processable on the server.
- **Session Management**: It enables the use of cookies to manage user sessions.

---

# Set up and Run

## Step 1: Clone and Install Dependencies

```bash
git clone https://github.com/gzcmustafa/FinalCase-Timus.git

# Navigate to the project directory
cd FinalCase-Timus

# Install dependencies
npm install

```
## Step 2: Clone and Install Dependencies

This application uses environment variables for configuration. To set up your environment variables:

1. Copy the `.env.example` file and rename it to `.env`.
2. Open the `.env` file and replace the example values with your actual values.