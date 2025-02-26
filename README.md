# React Book Application

This project is a book application developed with React. The application allows users to view book titles, authors, descriptions, and images. It also provides detailed information for each book. The design is built using Bootstrap and custom CSS for a modern, responsive interface.

## Features

- **Book List:** The application displays a list of books with their titles, authors, publication years, page numbers, and descriptions.
- **Categories:** Books can be filtered by their categories.
- **Book Detail Page:** Users can click on any book to view more detailed information.
- **Responsive Design:** The application is designed to be fully responsive across various devices.
- **API Integration:** Book information is fetched using React's `useEffect` and `axios`.
- **Dynamic Routing:** Book details are loaded dynamically using `useParams` from `react-router-dom`.

## Technologies Used

- **React:** For building the user interface.
- **React Router DOM:** For dynamic page routing and URL parameters.
- **Axios:** For fetching data from an API.
- **Bootstrap:** For fast and responsive design.
- **CSS:** For custom styling and layout.


## User Interface

The application displays a simple list of books. Each book shows the following information:

- **Title**: The name of the book
- **Author**: The author of the book
- **Publication Year**: The year the book was published
- **Page Count**: The number of pages in the book
- **Description**: A brief summary of the book
- **Category**: The book's category

Additionally, users can click on any book to view more detailed information. The book details are dynamically fetched based on the URL parameters.


**This project is developed for learning and demonstration purposes.**
