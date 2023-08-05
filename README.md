# SketchConnect

Welcome to 'SketchConnect,' the ultimate collaborative doodling game for 4 players. Assigned to unique quadrants, each participant takes turns drawing, only seeing a subset of previous players' work on their aligned edges. Witness the magic of creativity and diversity as the quadrants unite, creating a mesmerizing and (potentially) seamless masterpiece. <img align="right" alt="SketchConnect" src="./client/public/assets/images/logo.png" width="300px" height="138px" style="border-radius: 25px;">

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Project Task Goals](#project-task-goals)
-   [Course Technology Utilized](#course-technology-utilized)
-   [Above and Beyond](#above-and-beyond)
-   [Next Steps](#next-steps)
-   [Developed By](#developed-by)
-   [Project Description](#project-description)
-   [Task breakdown](#task-breakdown)
-   [Prototypes](#prototypes)

## Project Task Goals

#### Minimum Requirements

-  A canvas to doodle individually prompted and combined at the end
-   Making it collaborative with 4 players
-   Creating and storing a session
-   Storing the images
-   Getting Canvas image data and store it, stitch it together then store and display final image

#### “Standard” Requirements

-   Guidelines for other person to continue from and they see a bit of what the other person has drawn
-   Downloadable PNG File
-   Share Via Social Media
-   Default Timer to complete Design

#### Stretch Requirements

-   More drawing options such as brush color, width, fill, clear screen, and more
-   Oauth (Google / Apple / Facebook) Login
-   Public / Private session rooms
-   Group Chat to communicate with other players in-game
-   Configurable Timer / Game Settings
-   Players completed can watch what the other player is doing

## Course Technology Utilized

## Above and Beyond

#### Image Storage
SketchConnect incorporates many additional features such as cloud storage using Google’s external API, allowing players to save their final drawings.

#### Sharing via Social Media
Additionally, SketchConnect integrates with social media platforms, empowering players to share their final masterpieces with friends and family. 

#### Research-driven UX
In shaping SketchConnect, we prioritized a user-centric approach through conducting thorough UX research and testing with over 50 users. By understanding player preferences (style of online games played, prompts, timer configurations, etc.) we ensured an interface that would be fun, friendly, seamless and intuitive for a delightful collaborative online doodling experience.

#### Authentication
To safeguard user data and maintain a secure environment, the app implements Firebase authentication, providing a hassle-free login and registration process. With these innovative features, SketchConnect promises endless fun, collaboration, and artistic expression for all players.

## Next Steps

## Developed By

-   [Martin Cai](https://github.com/martincai8)
-   [Michelle Kim](https://github.com/michelleykim)
-   [Michelle Wang](https://github.com/michelle-wangg)
-   [Shu Ting Hu](https://github.com/shuting-hu)
-   [Vishal Desh](https://github.com/VDeshh)

<!-- further materials (from initial) can remove or keep -->

## Project Description

**1. Who is it for?**

SketchConnect is designed for groups of four friends or family members, or really, anyone who enjoys doodling.

**2. What will it do?**

Players will sequentially draw in their assigned sections of a 2x2 grid, with only the slight glimpse of the bordering segments' drawings visible. Once everyone has finished, the four sections merge, revealing the collective masterpiece!

**3. What type of data will it store?**

Each SketchConnect session will be stored as a distinct record in our database. A single session (or game) will house up to the information of four logged-in users, their respective drawings, and the final combined artwork.

**4. What will users be able to do with this data?**

The unique session IDs will be utilized to generate invite links for users to join a SketchConnect game. Upon the creation of the final combined artwork, users can laugh at and share their final drawing.

**5. What is some additional functionality you can add or remove based on time constraints?**

We have numerous ideas for enhancing the game experience, such as:

-   Additional customization features for the drawing experience (e.g., brush colors, brush thickness, clear drawing, etc.)
-   A timer to indicate the remaining drawing time for each player
-   Options for public or private game rooms
-   In-game group chats for player communication
-   Additional game modes (e.g., 3x3 grid, collaborative drawing modes, etc.)

## Task breakdown

#### A canvas to doodle individually prompted and combined at the end :

-   Create a basic a frontend interface
-   Have the pages setup for the correct control flow for the user
-   Create HTML5 Canvas and make it interactive for the user on the right page
-   Fetch data from HTML 5 Canvas
-   Store Data from HTML 5 Canvas

#### Creating and storing a session

-   Create individual sections as records in the database. In each record, have fields for all the necessary information (user ids, session id, individual canvases, etc.)
-   Create a mechanism to generate new session ids for new games
-   Create dynamic links for players to join a session given a unique url

## Prototypes

<img src="client/public/assets/images/hi-fi/homePage.png" width=600px>
<img src="client/public/assets/images/hi-fi/gameLobbyPage.png" width=600px>
<img src="client/public/assets/images/hi-fi/drawingPage.png" width=600px>
<img src="client/public/assets/images/hi-fi/finishedDrawingPage.png" width=600px>
