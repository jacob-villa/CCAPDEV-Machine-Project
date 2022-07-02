# ANIMATRIX - CCAPDEV Machine Project

Animatrix is an online anime discussion forum web application created for the completion of the requirements of CCAPDEV - Web Application Development.

## Running the App - Remote

The app can be accessed at [https://animatrix-ccapdev.herokuapp.com/](https://animatrix-ccapdev.herokuapp.com/).

## Running the App - Local

The app can also be run locally by cloning the repository, navigating to the directory of the project, and running the following command in the command line:

```
node index.js
```

## Features

### Account Creation
Users can create an account by accessing the sign-up page. The user must enter a valid email address, a username between 3 and 16 characters in length, and a password at least 8 characters long without exceeding 16 characters, with a combination of upper and lowercase characters, numbers and symbols.

### Logging-In
After successfully creating an account, a user can log-in to the application by entering their registered username and password in the log-in page. 

### Sessions
Upon logging in and account registration, sessions are saved by the app. A logged-in user will still be logged in after closing and reopening the site. Cookies on the browser are used to track the sessions of the logged-in user.

### Home Page
Logged-in users have access to the home page of the application. The home page displays all the posts logged into the database of the application. The user can also upload a post through a form in the home page. The home page and all other non-login pages have a header with the website logo, a search bar, navigation buttons (Home, Profile, Logout, About), and the current user's profile image and username.

### Posting
Users can upload posts onto the website via the home page. A title is required to upload a post. The user may also choose to include text content and attach an image to the post. The post is submitted to the app after pressing the "Publish Post" button.

### Viewing Posts
Users can view posts on the website by clicking posts on the home page. Clicking a post will redirect the user to  a page that displays the full content of the post, including the post title, text content, image content, and all comments under the post. From the post page, the profile of the original poster may also be visited. 

### Liking
Users can toggle their likes on posts and comments by clicking on the like icon when viewing a post or a comment.

### Commenting on a Post
Users can comment on a post when viewing a post by inputting text content and optionally uploading image content under the post. Text content is required to post a comment.

### Deleting
Users can delete posts and comments that they have made. When viewing their own post or comment, a "Delete" button will be visible. Clicking the delete button will prompt the user to delete. Clicking "OK" on the prompt will delete the corresponding post/comment and redirect the user back to the home page/post respectively. 

### Editing
Users can edit posts and comments that they have made. When viewing their own post or comment, an "Edit" button will be visible. Clicking the edit button will create an editable text field where the user can edit the text content of the post/comment and upload an image. Reclicking the Edit button will hide the editable text field. The edit is saved by clicking on the "Save Changes" button.

### Profiles
Users can view their own profile and other users' profile pages. When viewing their own profile, users have the option to edit their own profile via an "Edit Profile" button. Users can choose to upload images for their profile image and favorite character image. Users can also edit the text content of their favorite quote and bio. Users can also choose to delete their own profile in their profile page. Clicking on the "Delete Profile" button will prompt the user before deletion. Deleting a profile will redirect the user to the log-in page, and the credentials of their deleted account will not be recognized by the app as an existing account.

### Search
Users can search for posts and profiles via the search bar on the header of each page. Inputting keywords will bring up search results for posts and usernames registered in the app's database. Clicking on a search result will redirect the user to the respective post or profile.

### Logout
Users can logout of the app via the "Logout" button on the header of each page. Logging out of the app will redirect users back to the log-in page. 

### About
An about page can be accessed via the "About" button on the header of each page. The about page shows all npm packages and third-party libraries used in the development of the app.

## Contributors
This app was created by Ryan Go, Anton Moraña, and Jacob Villa under the guidance of Sir Arturo Caronongan III in CCAPDEV - Web Application Development. 
