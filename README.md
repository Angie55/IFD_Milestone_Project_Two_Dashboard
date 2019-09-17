Link to deployed website [London Road Casualties Dashboard](https://angie55.github.io/IFD_Milestone_Project_Two_Dashboard/)  
     
# London Road Casualties Dashboard

This dasboard displays the data for London Road Casualties 2010-2014. The primary goal of the dashboard is to give users an insight into the details of each incident.
It was designed to be easy to use with simple displays that the user can use to get a good range of information. The interactive charts give the user the opportunity
to drill down to specific details as much as they need and can feel informed as an individual. As a cyclist who commutes through central London nearly everyday I found the data
to be interesting and informative.

### Developer goals

- To create a simple, clearly displayed data set for users to see key information that is easy to navigate.

- To create an interactive dashboard that in intuitive for users and has help available.

- A first attempt at using d3, dc and crossfilters for a data set I have chosen and styling the page in line with the data.

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

- To see a range of information on the subject of casualties on the roads of London that is simple and easy to digest.

- To have useful information on using the dashboard easily available to me to explain how to use it.

- I want to choose when any help pop ups are launched and not have annoying pop ups before I have had a chance to view the page.

- I want to know where the data came from.

- I want to be able to find specific data by using the interactive charts.

- I need to be able to reset the data at anytime.

- I want a brief introduction and information on charts to help me in my understanding as I analyse and draw my own conclusions.

- I would like the site to have some familiarity with goverment information sites so I trust the data.

**Design choices**

- Colours- The main colours are white, blue and greys, with some shades taken from the London TFL website, this gives the feel of an offical information site. 

- Fonts- The fonts orginally planned were Hammersmith and Cabin which were the closest free alternatives to the fonts used on the offical TFL webiste. After removing the darker backgound image I was
using, much lighter fonts were needed to fit the lighter, floaty feel of the cards. Montserret and Lato are easy to read, friendly fonts that work great with the overall look and feel.

- Text-align- The text is centered in the cards as this looks and flows better with the chart displayed. Left align text was tested and looked odd with the centered chart and cards. As the text is fairly short
I believe it works for the cards. The help and main intro are left aligned as there is more text and it is more suitable.

- Icons- Font awesome icons are used to make the number displays more appealing, create a clear close button on the help modal and add a nice Github logo on the footer.

- Cards- This bootstrap design feature is used to give each display or chart it's own clear section to make the whole page easier to read as it is easy to seperate each bit of data being rendered.
Seperating information like this is often used of offical London gov sights too.

- Imagery- A clear related image is used for the header. The boldness is a good contrast to the simple colours and layout.

- Box shadows- These are used to help the main content stand out even more against the background, giving a floating effect.

- Transitions- These are kept simple as there is enough interaction and things going on within the page but the feedback is still clear to the users as they hover.

- Small screen- Each chart has a full row so the content can been seen clearly.

- Content displayed on one page so the user can compare data, the content is spread enough to have a clear display of each chart.

**Wireframes**

Click to view [Wireframes](https://balsamiq.cloud/siclxdl/p7pak5v) created in Balsamiq.

**Responsive design**

This site was created to be viewed on a larger screen such as laptop or desktop as this is when the charts work best. The page will be repsonsive right down to mobile size and the general
layout and text will look good but the charts will look too small or may display oddly.

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
and gives key information or tips if needed. A few lines follow each chart that clarify key points but leave further analysis to the user.

- Number displays- Use a large font size and icons for a clear, bold display. 

- Pie and donut section- pie charts are placed either side of the donut chart for symmetry. External labels give clear labelling on the donut chart.

- Bar chart- two colours are used for clear seperation but no more so there is not too much going on visually. The x-axis labels are rotated so they fit and can be clearly read.

- Line chart- This features a few colours (traffic light colors) not used in charts before but are necassary for a good contrast so the chart is easy to read and analysed.

- Row chart- Three colours are used to seperate each row, different colours from the bar chart to add variety but still familiar colours that have been used before. The font was changed to black
to make the labels easier to read.

**Features to implement in the future**

- A drop down filter could be added to the page that allows the user to filter the data by individual year.

- A map could be added using the Google maps API for users to see their route and if it goes through a risky area.

## Technologies used 

-   HTML 
-   CSS 
-   [Adobe Photoshop CC](https://www.photoshop.com/) - used to resize header, design favicon and logo.
-   [git](https://git-scm.com/) - used for version control.
-   [GitHub]() - used as a remote repository and the hosting of this site.
-	[AWS Cloud9 IDE](https://us-east-1.console.aws.amazon.com/cloud9/ide) – Used for building the website and viewing developments.
-	[Bootstrap](https://getbootstrap.com/) – used mainly to help with the layout and making the site responsive.
-	[Google Fonts](https://fonts.google.com/) – a link to Google fonts is used to style fonts on the website.
-	[Font Awesome](https://fontawesome.com/) - used for icons on the website.
-   [JavaScript](https://www.javascript.com) - used for the clickable pop up help menu, reset button and to render and style the data/charts on the page.
The following Javascript libraries were also used to create and display charts:
-   [D3.js](https://d3js.org/) - for manipulating documents based on data.
-   [DC.js](https://dc-js.github.io/dc.js/) - uses D3 to render charts in a SVG format that is easy to work with. It uses crossfilter support to render charts that are data driven and reactive.
-   [Crossfilter.js](http://square.github.io/crossfilter/) - used to create multi-dimensional datasets, supports DC to provide fast interaction. 
-   [D3-queue.js](https://github.com/d3/d3-queue) - used to load the dataset before running any other files.

## Testing

The index.html, style.css, graphs.js and helper_reset.js were all run through the appropriate online code validators and any errors corrected.

### Client goals/journey testing

Client can:
- Easily figure out what the site is about.
- Instantly have information visible and can see where to find help.
- Recognise a familiar layout with features like help and reset in a predictable place.
- See the help and reset at all time while viewing the charts.
- See a clear display of charts and information.
- Get good clear feedback when hovering over navigation, buttons and links.
- Understand what they are looking at by the title if they choose not to read the information.
- Read more on each chart introduction that will help guide them.
- Read simple analyse under charts and draw their own conclusions.
- Interact with charts to explore data.
- Reset data displays at any time.
- See a range of data that tells them something new with each display.
- See a variety of charts to make the data more interesting.
- Feel like they have a good set of information on the subject.
- See the raw information and find other data sets by clicking link to data source.
- Find more detail and where information was sourced for some of the facts by clicking the link.
- Won't lose where they are when following links as they open in a new tab.
- Use the back to top link to quickly go back up.
- Click the logo header on larger screens to go back to the top/home.

### Manual testing

Alot of manual testing was carried out along the way, testing new changes as they were made. Then further checks were made to test everything when the project was ready for submission.

- Page links- all open in a new tab and hover effect works.
- Header link- correctly takes users to the top of the page and hover effect works.
- Social media links - Git hub link in footer opens in a new tab and hover effect works.
- Buttons- Hover effect on both buttons works.
- Help modal- opens and displays well, there are no grammatical errors, information is clear and the modal close button is obvious and works.
- Reset- correctly resets the data.
- Back to top link takes the user back to the top of the charts.
- The image, logo and the favicon loaded on each page. The images are responsive.
- The page is fully responsive and resizes with all correct positioning and spacing. There are some issues with the donut chart and the way charts display in internet explorer which is mentioned below.
- Page content was proofed to check content made sense and there were no grammatical errors I am aware of.

### Cross browser/device testing

**iMac 21.5inch screen**- 

- Chrome- resizing the screen from the smallest to largest size. Also using the developer tools to check site all devices available in portrait and landscape mode.

- Safari – resizing the screen from the smallest to largest size.

- Firefox- resizing the screen from the smallest to largest size. Also using Firefox developer tools to view site on all available devices in portrait and landscape.

**iPhone 5SE**– 
- Safari and Chrome- portrait and landcape.

Checked site across a few versions of browsers on [Browserly](https://www.browserling.com/) 

### Issues found and resolved -
- Grey used in charts was too close to the default grey that the charts go when filtered, I changed the shade so the difference can be seen.
- Spelling and grammatical errors updated and commited.
- Removed background image as it was too distracting and dulled the look of floating cards. I then had to change the font to something much ligher to fit the overall look.
I then changed the header image as it looked too red with everything else, this led to me changing the nav colour so it looked better with everything. 
- The card row size needed to be 12 on smaller screens so they looked better.
- Adjusted close button on help modal as it was too far to the right of the page and not very visible on tablets and mobiles.

### Left to resolve-
- Internet explorer chart display very small, I believe this to be a known issue but will look into if there are any known fixes in future.
- The donut chart is not displaying well all the time, at times the labels are cut off even on the same browser if I have resized the screen. I believe this is a problamatic 
pie type to use and I would look to replace it unless I can find a solution to fix it.
- The charts do not have to be fully repsonsive for this project as dc charts work best on a desktop. I have tried to make them look as good as I can and they all display
well enough for now but this site was designed to be viewed on a desktop. 

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

Data sourced from [London Road Casualties by severity 2010-2014](https://data.london.gov.uk/dataset/road-casualties-severity-borough)

Images sourced from [Pixabay](https://pixabay.com/) and [Unsplash](https://unsplash.com/)

**Code**

Help modal built using this guide as a template [How to make a modal](https://www.w3schools.com/howto/howto_css_modals.asp)

I built the basics of each chart from Codeacademy tutorial videos then googled various things I wanted to add/customise for my data.

## Disclaimer

The content of this website was created for educational purposes.