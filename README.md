
# Spartificial Admin Dashboard

The Spartificial Admin Dashboard is a frontend application built for managing and monitoring various aspects of a social media application. It features efficient routing, basic authentication, and a user-friendly interface optimized for desktop devices. This application showcases essential functionalities such as pagination, theme switching, and user management.


## Documentation

Components:

Login: Handles login and redirects to the home page.   
Home: Main dashboard displaying key metrics.  
Users: Manage users with pagination and modals for actions.  
Posts: Manage posts with similar features to Users.  
NotFound: Displays a 404 error page for invalid routes.  
Resources: Additional informational components.  
ProtectedRoute: Ensures pages are only accessible to authenticated users.  
State Management: Uses RouteContext for managing global state like theme and routing.

UI Components:

NavBar: Navigation links.  
Header: Displays the title and user info.  
KPIBox: Shows key performance indicators.  
Pagination: Navigates through paginated content.  

Future Enhancements:  

Improved Authentication: Add secure user authentication.  
Backend Integration: Connect to a backend for dynamic data.  
Mobile Support: Adapt the design for mobile devices.  
Advanced Features: Include role-based access and notifications.
## Features

Sample Data: The app uses mock data to simulate real scenarios. Replace with actual data from a backend when needed.

Pagination: Navigate through lists of users and posts easily. Adjust the number of items per page in the Users and Posts components.

Theme Management: Switch between light and dark modes using the RouteContext to apply the theme globally.

Authentication: Basic authentication allows access with any credentials. Protected routes ensure only logged-in users can view certain pages.


## Run Locally

Clone the project

```bash
  git clone https://github.com/ChakradharA2003/SpartificialAdminDashboard
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Demo

spartificial-admin-dashboard.netlify.app
## Support

For support, email chakradharchakri018@gmail.com 

