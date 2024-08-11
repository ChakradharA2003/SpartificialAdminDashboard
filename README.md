Spartificial Admin Dashboard
Overview
The Spartificial Admin Dashboard is a frontend application built for managing and monitoring various aspects of a social media application. It features efficient routing, basic authentication, and a user-friendly interface optimized for desktop devices. This application showcases essential functionalities such as pagination, theme switching, and user management.

Features
Authentication: Simple login mechanism allows access to the dashboard. Any credentials will lead to the home page of the dashboard.
Efficient Routing: Utilizes React Router for smooth navigation between pages.
Pagination: Implemented to manage and display large datasets efficiently on the posts and users pages.
Theme Switching: Allows the admin to toggle between light and dark themes.
Logout Functionality: Provides an option to end the admin session.
Desktop-Only Design: Optimized for desktop devices.
Sample Data: Uses sample data for demonstration purposes.
Installation
To get started with the Spartificial Admin Dashboard, follow these steps:

Clone the Repository

bash
Copy code
git clone https://github.com/ChakradharA2003/SpartificialAdminDashboard.git
Navigate to the Project Directory

bash
Copy code
cd SpartificialAdminDashboard
Install Dependencies

bash
Copy code
npm install
Usage
Start the Development Server

bash
Copy code
npm start
Open Your Browser

Navigate to http://localhost:3000 to view the application.

Login

Use any credentials to log in and access the dashboard.

Project Structure
The project structure is organized as follows:

src/
components/ - Contains all React components.
Login/ - Component for the login page.
Home/ - Component for the home page of the dashboard.
Users/ - Component for managing users.
Posts/ - Component for managing posts.
NotFound/ - Component for handling 404 errors.
Resources/ - Component for displaying additional resources or information.
ProtectedRoute/ - Component to handle route protection and authentication.
NavBar/ - Navigation bar component.
Header/ - Header component for the dashboard.
KPIBox/ - Component to display key performance indicators.
Pagination/ - Component for pagination functionality.
SampleData/ - Contains sample data used for demonstration purposes.
context/ - Context providers for state management.
RouteContext/ - Context for managing route state, data, and theme.
App.js - Main application component that sets up routing.
index.js - Entry point for the React application.
Routing
The application includes the following routes:

/login: The login page, accessible without authentication.
/: The home page of the dashboard, accessible only after login with any credentials.
/admin/users: The users listing page, accessible only after login with any credentials.
/admin/posts: The posts listing page, accessible only after login with any credentials.
/not-found: A 404 error page, accessible without authentication.
Configuration
Theme Switching: Admin can toggle between light and dark themes using the provided toggle switch.
Pagination: Configurable number of posts or users per page.
Notes
This application is optimized for desktop devices only.
Sample data is provided for demonstration and testing purposes. Replace it with real data as necessary for production use.
Contributing
Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.

License
This project is not licensed. You can freely use and modify the code as needed.
