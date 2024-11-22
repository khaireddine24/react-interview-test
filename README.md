# React Interview 

This interview test is a movie listing app built with **React**, **Vite**, **TailwindCSS**, and **Redux**. The app features a responsive design, dynamic filtering, a YouTube-style like/dislike ratio gauge, and pagination.

## Task :
+Display movies in cards with: <br/><br/>
  -The title in bold.<br/>
  -The category.<br/>
  -A YouTube-style gauge showing the like/dislike ratio.<br/>
  -Cards should be displayed side by side and responsive. When the window is resized, cards should shift to the next line.<br/>
  -Add a delete button on the cards to remove them.<br/>
  -Add a toggle like/dislike button.<br/>
  -Add a filter by category (multi-select), where categories are dynamically retrieved from the movies. If all movies in a category are deleted, the category should no longer appear.<br/>

+Add pagination with the following features:<br/>
  -Previous/Next buttons.<br/>
  -Option to choose the number of items per page (4, 8, or 12).<br/>

## Features  

### 🎥 Movie Cards
- **Title in bold**, category, and a like/dislike ratio gauge styled like YouTube.  
- Responsive design: Cards adjust to fit the screen width and wrap to the next line if needed.  

### 🗑️ Delete Movies
- Remove movies from the list by clicking the delete button on the card.  

### 👍/👎 Toggle Like/Dislike
- Each card has a button to toggle between liking and disliking a movie.  

### 🏷️ Filter by Category
- Categories are dynamically retrieved from the available movies.  
- Use a multi-select dropdown to filter movies by categories.  
- Categories with no movies automatically disappear from the filter options.  

### 📄 Pagination
- Navigate between pages with previous/next buttons.  
- Choose the number of movies to display per page (4, 8, or 12).  

## Tech Stack  
- **React**: For building the user interface.  
- **Vite**: For fast development and build.  
- **TailwindCSS**: For styling the app with modern utility-first CSS.  
- **Redux**: For managing the application state.  

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/react-movie-cards-app.git
   cd react-interview
   
2. Install dependencies:
   npm i

3. Start the development server:
   npm run dev

4. Open the app in your browser:
   http://localhost:5173

## Functionality Details
Dynamic Movie List
Movies are displayed dynamically in responsive cards, showing the title, category, and a YouTube-style like/dislike ratio gauge.

-Filters: <br/>
+The category filter dynamically fetches categories from the movies.<br/>
+Supports multi-select filtering.<br/>
-Pagination: <br/>
+Users can choose the number of items displayed per page (4, 8, or 12).<br/>
+Includes "Previous" and "Next" buttons for navigation.<br/>
-Delete Movies: <br/>
+Removes movies from the list.<br/>
+Automatically updates filters and pagination when movies are deleted.<br/>

## screenshot
<img src='https://github.com/user-attachments/assets/95b36b51-8584-4ccf-9003-322dd2ec1d1f'/>


