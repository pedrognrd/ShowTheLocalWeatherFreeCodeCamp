# Show The Local Weather Free Code Camp
## **Description**

App which displays the weather wherever the user happened to be. It capture data from [Open Weather](https://openweathermap.org/) and [Weather Tomorrow](www.weathertomorrow.net/). The app implements the following user stories:

* User can view the weather in his/her current location.
* User can toggle the temperature unit (Celsius or Fahrenheit).
* Weather icon or background image will change depending on weather conditions.

### Design

My idea was to display a little and simple landscape drawing with CSS styles with a rising icon that represents the current weather. Also, I decided to use two different icon styles, once for the icon in the landscape en the other for the icon in the information area.

The [example project](https://codepen.io/freeCodeCamp/full/bELRjV) was pure black&white so I added some color to mine.

##### Scss

Scss has been used to creath the CSS styles. It includes media-queries, maps and eachs.

### Logic

* [Open Weather](https://openweathermap.org/) offers through its API the information needed to accomplish the app.
* Longitude and Latitude are needed to weather informatio on page load.
* Using the HTML5 Geolocation api was a easy way to manage this information.

## **Installation**

You can follow the next guides to use this app:

* Cloning the repository:
  * [Cloning remote repositories](https://docs.github.com/es/github/getting-started-with-github/about-remote-repositories).
  * [Cloning a repository from GitHub to GitHub Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop).

* For local execution:
  * [Download repository in a ZIP file](https://stackoverflow.com/questions/2751227/how-to-download-source-in-zip-format-from-github).

* An Online version is available in my [Codepen Profile](https://codepen.io/pedrognrd/pen/zjZvWb).

## **Usage**

The app contains the following structure:

* index.html: main file. you need to open it to execute the app
* css folder: contains scss and css styles
* img folder: contains screenshot images
* js folder: contains JavaScript scripts

The usage is very simple, you only need to open "index.html" file on your browser. The browser will ask for location permission to execute properly the app.

## **Credits**

Development and design by [Pedro González Rodríguez](https://github.com/pedrognrd)



    License: Finally, include a section for the license of your project. For more information on choosing a license, check out GitHub’s licensing guide!

