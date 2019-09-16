Link to deployed website [London Road Casualties Dashboard](https://angie55.github.io/IFD_Milestone_Project_Two_Dashboard/)  
     
# London Road Casualties Dashboard

This dasboard displays the data for London Road Casualties 2010-2014. The primary goal of the dashboard is to give users an insight into the details of each incident.
It was created to be be easy to use with simple displays that the user can use to get a good range of information. The interactive charts give the user the opportunity
to drill down to specific details as much as they need and can feel informed as an individual. As a cyclsit who commutes through central London nearly everyday I found the data
to be interesting and informative.

### Developer goals

- To create a simple, clearly displayed data set for users to see key information that is easy to navigate.

- To create an interactive dashboard that in intuitive for users and has help available.

- A first attempt at using d3, dc and crossfilters for a data set i have chosen and styling the page in line with the data.

### Customer goals

- To view a range of data that is displayed clearly for me to find information/details of incidents.

- To be able to easily navigate and understand the information.

- To be able to reset data at any time.

- To be able to get help any time if I need it.

- To be able to interact with the data.

### Customer who would be interested in this dasboard - Target client

- Anyone looking to commute in London.

- Anyone learning to drive in London

- Tourists visiting looking to most risky areas.

- People with a general interest of traffic and road transport in London.

- Parents researching safety of their local area their children may go visit or socialise.

## UX

**Client story**

As a visitor to the dashboard I want:

- See a range of information on the subject of casualties on the roads of London that is simple and easy to digest.

- Have useful information on using the dashboard easily available to me to explain how to use it.

- I want to choose when any help pop ups are launched and not have annoying pop ups before i have had a chance to view the page.

- I want to know where the data came from.

- I want to be able to find specific data by using the interactive charts.

- I need to be able to reset the data at anytime.

- I want a brief introduction and information on charts to help me in my understanding as I analyse and draw my own conclusions.

- I would like the site to be more visually pleasing than goverment information sites but with some familiarity.

**Design choices**

- Colours- The main colours are blues and greys, with some shades taken from the London TFL website, this gives the feel of an offical information site. 

- Fonts- The two fonts used were free fonts inspired by those used on offical London TFL sights. Hammersmith included some key familiar features such as the shape of the dot above the i's. 
 Cabin compliments hammersmith well and is clean and easy to read. It has a friendly yet inforamtive feel.

- Icons- Font awesome icons are used to make the number displays more appealing, create a clear close button on the help modal and add a nice Github logo on the footer.

- Cards- This bootstrap design feature is used to give each display or chart it's own clear section to make the whole page easier to read as it is easy to seperate each bit of data being rendered.
Seperating information like this is often used of offical London gov sights too.

- Imagery- Clear, modern imagery is used for the header and background. The boldness is a good contrast to the simple colous and layout.

- Box shadows- These are used to help the main content stand out even more against the background, giving a floating effect.

- Borders- The very thin blue border around each card adds to defining the card to help it stand out with the floating effect.

- Transitions- These are kept simple as there is enough interaction and things going on within the page but the feedback is still clear to the users as they hover.

- Small screen- Each chart has a full row so the content can been seen clearly. Padding is reduced in the text.

- Content displayed on one page so the user can compare data, the content is spread enough to have a clear display of each chart.

**Wireframes**

Click to view [Wireframes]() created in Balsamiq.

## Features

**Main navigation**

- Sticky nav bar with 'Help' and 'Reset' always visible as the user scrolls.

- Title in main nav takes the user to the top of the page when clicked, the hover effects communcates it is a link and takes the user home/to the top as they would expect it to.

- Help modal- This is optional for users to click is they choose to read more or need it while using the dashboard. The modal becomes a clear focus on the page and is easy 
to read. There is a clear close button to close the modal.

- Buttons remain visible right down to a mobile size so they are clearly visible while scrolling on all devices.

**Charts section**

- Main intro- This gives the user enough information to use and understand the dashboard while mentioning the 'Help' option if they would like to read more.

- Charts- Each chart has a clear title that the user can read and look straight to the content and understand what it displays if they do not want to read. The intro to each chart is brief
and gives key information or tips if needed. A few lines follow each chart that clarify key points but leave further anaysis to the user.

- Number displays- Use a large font size and icons for a clear, bold display. 

- Pie and donut section- pie charts are placed either side of the donut chart for symmetry. External labels give clear labelling on the donut chart.

- Bar chart- two colours are used for clear seperation but no more so there is not too much going on visually. The x-axis labels are rotated so they fit and can be clearly read.

- Line chart- This features a few colour, traffic light colors, not used in charts before but are necassary for a good contrast so the chart is easy to read and analysed.

- Row chart- Three colours are used to seperate each row, different colours from the bar chart to add variety but still familiar colours that have been used before. The font was changed to black
- to make the labels easier to read.

**Features to implement in the future**





## Technologies used 

-   HTML 
-   CSS 
-   [Adobe Photoshop CC](https://www.photoshop.com/) - used to resize header, design favicon and logo and create background tarmac image.
-   [git](https://git-scm.com/) - used for version control.
-   [GitHub]() - used as a remote repository and the hosting of this site.
-	[AWS Cloud9 IDE](https://us-east-1.console.aws.amazon.com/cloud9/ide) – Used for building the website and viewing developments.
-	[Bootstrap](https://getbootstrap.com/) – used mainly to help with the layout and making the site responsive.
-	[Google Fonts](https://fonts.google.com/) – a link to Google fonts is used to style fonts on the website.
-	[Font Awesome](https://fontawesome.com/)- used for icons on the website.
-   [JavaScript](https://www.javascript.com)- used for the clickable pop up help menu and reset button. 
-   The following Javascript libraries were also used to create and dispaly charts
-   [D3.js](https://d3js.org/) - for manipulating documents based on data.
-   [DC.js](https://dc-js.github.io/dc.js/) -uses D3 to render charts in a SVG format that is easy to work with. It uses crossfilter support to render charts that are data driven and reactive.
-   [Crossfilter.js](http://square.github.io/crossfilter/) - used to creat multi-dimensional datasets, supports DC to provide fast interaction. 
-   [D3-queue.js](https://github.com/d3/d3-queue) used to load the dataset before running any other files.

## Testing

### Client goals/journey testing


### Cross browser/device testing



### Issues found and resolved -


### Left to resolve-

## Deployment

This project was developed using the AWS Cloud9 IDE, the committed to git and pushed to GitHub through the Git Bash terminal within Cloud9.

To deploy the project from the GitHub repository to GitHub Pages I took the following steps:

1. Logged into **GitHub**.
2. Chose **Angie55/IFD_Milestone_Project_Two_Dashboard** from the list of repositories.
3. Selected **Settings** from the menu that is just under the respository, it is the last item on the right.
4. Scrolled down to the section titled **GitHib Pages**.
5. Under **Source** clicked the dropdown menu titled **None** and selected **Master Branch**.
6. This automatically refreshes the page which took me back to the top. The website has now been delpoyed.
7. Then I scrolled back down to the **GitHub Pages** section where there is now an link to the delpoyed website, I clicked the link to view and check it.
 
On submission the The Development Branch and Master Branch of this project are identical.

To run the project locally by cloning from GitHub:
1. Click this link to go to the projects [GitHub repository](https://angie55.github.io/IFD_Milestone_Project_Two_Dashboard/).
2. Click the green **Clone or download** dropdown at the top right, just above the list if files and commits.
3. Copy the URL in the box under **Clone to HTTPS**. https://angie55.github.io/IFD_Milestone_Project_Two_Dashboard/
4. Open **Git Bash** in your local IDE.
5. Change the current working directory to the location you want the cloned directory to be made.
6. Type *git clone*, then paste the URL that you copied earlier. https://angie55.github.io/IFD_Milestone_Project_Two_Dashboard/
7. When you press **Enter** your local clone will be created.


## Credits

**Media**

London Road Casualties by severity 2010-2014 https://data.london.gov.uk/

**Code**

## Disclaimer

The content of this website was created for educational purposes.