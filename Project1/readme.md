Browser Game: Hamster Stackers

Minimum Viable Product (MVP)

Game Flow Description
 - The aim of the game is to stack 5 hamsters on top of each other.
 - The hamsters will be falling from the top at random locations but will be triggered via click.
 - Using the left and right arrow keys, the player can catch the hamsters and stack them on top of each other.
 - The game is won once all 5 hamsters are stacked. If one hamster falls without being stacked, then the player loses the game.

Deliverables
 - The 2 event handlers will be click and keydown for left and right arrow.
 - Utilizing grid with absolute positioning for the div and Hamster img layout.
 - The link to the game on Github is the following: (https://git.generalassemb.ly/mohamadhazem/GA-SEI-Hazem/tree/main/Project1)

Technologies Used
 - VS Code
 - Windows Powershell
 - Github
 - Microsoft Paint
 - Microsoft PowerPoint

Approach Taken
 - First, I did the pseudocode of how the game flow will be.
 - Next, I list out all the elements and basic functions needed for the game.
 - I started out with HTML to build the framework of the webpage and then CSS to style the background, hamsters and instructions on the website.
 - After that on Day 2, I coded JS for the Hamster Stack movement and falling hamster movement.
 - On the third day, I did the collision detection function and win/lose conditions.
 - On the fourth and final day, I linked everything together and fixed up the major bugs that stop the game from achieving the MVP.

Installation
 - It can be played on any browser via localhost.

Instructions
 - Help HamHam to save his friends falling from the tree.
 - Use the arrow right and left keys to control HamHam's movement to catch his friends.
 - Click to ask the next hamster to jump. Try to click now, the first hamster is a trial run.
 - There should be hamsters stacked to win the game. If one falls, you lose the game.
 - Refresh after every win/los session to avoid any glitches.

Unsolved Problems
 - Bugs such as the first hamster not being detected on collision/death.

Motivations/Reasons for Choosing this game
 - I chose this game because I can be creative and I love hamsters. It improves my use of JS and CSS especially in terms of programatic thinking to flesh out the steps for the game logic.

Functions and Elements
 - Elements:
	- 5 Hamsters in a stack
	- 1 Falling Hamster
 - Functions:
	- Move (Arrow left and right keys)
	- Appear (Upon collision detected)
	- Falling (Upon click)

Most challenging part of the project
 - the most challenging part was connecting all the functions to work properly and fixing all the bugs. Got valuable advice from Ebere (using JS instead of CSS for falling function and clear Interval to stop infinite loop), Pravin (collision detection function and logging the coordinates of elements) and Talha (for global and local scope) in order to understand the concepts to solve the bugs and successfully connect everything.

Further work and next steps
 - Solve the initial Hamster not detecting bug.
 - The game can be improved by adding difficulty levels such as faster falling hamsters and wider falling field. Also, can add functions like additional lives and scoreboard for number of hamsters caught.


