# Website-App-View
===============

## Web App Feel - Experimenting (Node and Gulp)

This is the Clean Build with minimum packages, current included (bower, gulp and node)

### Changes Log : 

Nov 25, 2014
* (Initialize) Clean 

Nov 26, 2014
* Added express for webport
* Applied angular.js to process customer list table
* Custom task to copy app and api files

Nov 27, 2014
* Added Fake increase qty Buttons
* APP added a $scope function

Nov 28, 2014
* Views folder renamed to templates
* Added Factory to collect customers data and store in global
* Added Route to gather Factory data to create single page interactive effect

Dec 01, 2014
* Implmented a Sub-Total scope fn for Orders Table - Reference : http://jsfiddle.net/slav123/75m7e/3/
* Changed Total Spent Col to Description Col
* Added a back history function in "CustomerOrdersController"
* Now moved the back history function in "CustomerOrdersController" under $rootscope as a global function - Reference : http://stackoverflow.com/questions/15025979/can-i-make-a-function-available-in-every-controller-in-angular

Dec 04, 2014
* Attached core-script.js in index.html
* Injected SVG Filter and Stylesheet in DOM by jQuery to produce Blur effect

Dec 11, 2014 (Break Point)
* Added a new json file (Current not using it)
* Removed QTY Control
* Added Bootstrap Modal - trigger by Edit Button
* Added ng-model for dropNote
