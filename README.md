# CopyCat

![alt text](https://github.com/jtuck15/milestone-project-2/blob/master/assets/copycat.PNG "Picture of the website, CopyCat")

>This is a memory game which is aimed at entertaining and frustrating any user who plays it. The game is solely based on working your brain to see if you can remember the pattern. The longer the pattern goes on, the harder it gets. If you think you have what it takes, go ahead and give it a shot!

## UX

The purpose of this project is to create a static **(front-end only)** website aimed at entertaining users of all ages. I have built it using the languages I have learned so far - HTML, CSS, JavaScript and jQuery. The target audiences for this website are people of all ages who love a challenge, adults who like to keep their brain working efficiently and also children to help with their development skills. 

**In order for the target audience to achieve these things when visiting my website, I incorporated the following:**
- A nice and simple visual display to make the site easy on the eye for all visitors
- Easy functionality when playing the game, to allow younger children play at ease
- A "how to play" section to educate all users on how the game works
- A start button to give the user the choice on when they want to start the game
- A reset button to allow the user start the game over
- Strict mode - this makes the game more difficult as the pattern will not be repeated if the user guesses incorrectly
- A counter in the middle of the buttons which will show the user which round they are on

 ### Wireframe Mockups
 
 These can be found at the following links below:

>https://github.com/jtuck15/milestone-project-2/blob/master/assets/copycat_original_wireframe.png
https://github.com/jtuck15/milestone-project-2/blob/master/assets/copycat_updated_wireframe.png

## Features

### Gamebuttons
The gamebuttons are highlighted with a light coloured shadow around them and a sound is made to show the pattern that the user has to follow.

### How to play 
This button opens a modal which provides the user with all of the information they need on how to play the game and how the game works.

### Start 
This button allows the user to start the game when they are ready to play, instead of the game starting automatically when the webpage loads.

### Strict Mode
This button turns on and off the strict mode feature within the game. It gives the user the option to make the game more difficult. Once strict mode is enabled, the pattern will not be repeated if the user guesses the pattern incorrectly.

### Reset
This button gives the user the ability to reset the game at any time and will immediately reset the round count to 0.

### Counter
There is a counter set directly in the middle between all of the gamebuttons which shows which round the user is currently on. I have added a nice feature that allows the number to fade down from the top when the round number changes.

## Technologies Used

- **HTML5** - This was used as the layout to fully build the website
- **CSS** - This was used to style the website 
- **[Bootstrap](https://getbootstrap.com/docs/3.3/)** - This was used to get the layout up and running quickly and also use grids to help with the responsive design
- **[JavaScript](https://www.javascript.com/)** - This was used to build the functionality of the game
- **[JQuery](https://jquery.com/)** - This was also used to build the functionality of the game and contribute to the fade effect on the round counter

## Testing

I have tested this game vigorously and was unable to find any problems with it. All of the buttons work as they should. The reset button always resets the count back to 0. If you do not follow the pattern correctly you will always receive the error message to notify you that it is wrong. I have also tested completing the game by reaching 20 and this resets the game back to 0 after closing the alert.

**Devices Used:**
- Samsung Galaxy S8 – Android 8.0
- Samsung Galaxy S7 - Android 8.0
- Samsung Galaxy S6 – Android  7.0
- iPhone 8 – iOS 11.4
- HP Laptop 15-bs0xx – Windows 10
- iPad Air 2 – iOS 11.2.2 & iOS 11.4.1

**Browsers Used:**
- Chrome 
- Firefox
- Microsoft Edge
- Safari

### Issues/Bugs
A big issue I realised after playing the game for a little while was when the game automatically started when the webpage loaded. I had some of my colleagues in work try out the game and to provide me with feedback on what they thought was good and what was not so good. Overall the feedback was great, however they also found it quite annoying when the game would start automatically. I implemented the start button to combat this issue and I think it makes a difference to the overall performance of the game.

### Validation
HTML file passed validation testing at https://validator.w3.org/nu/#textarea <br>
CSS file passed validation testing at https://jigsaw.w3.org/css-validator/validator <br>
JS file passed validation testing at https://www.piliapp.com/javascript-validator/

## Deployment
My website is currently deployed on Github Pages - https://jtuck15.github.io/milestone-project-2/

I was able to deploy the website here by going to my repository in which all the files are saved, clicking on settings at the top and scrolling down to the heading GitHub Pages. Underneath the heading there is a source and I chose master branch from the dropdown which allows you to host the website on GitHub Pages.

## Credits

### Media Content
- [freeCodeCamp](https://www.freecodecamp.org/) - Simon sounds used in the game.
- [SweetAlert](https://sweetalert.js.org) - I used some of these stylish alerts in my game.
- [AngryTools](http://angrytools.com/gradient/) - I used this tool to style the gamebuttons.

### Acknowledgements
- [Code Institute](https://www.codeinstitute.net/)
- Daniel Eden - I used his [animate.css](https://daneden.github.io/animate.css/) library which allowed me to add the fade effect on the round counter.
- Simurai - I used his brushed metal design on [Codepen](https://codepen.io/simurai/pen/DwJdq) for the buttons within my project.
- [Bootstrap](https://getbootstrap.com/docs/3.3/javascript/#modals) - I used the modal on Bootstrap to implement the information into the how to play button.

### References
Further references can be found [here](https://github.com/jtuck15/milestone-project-2/blob/master/assets/references.txt)
