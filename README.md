# Maze Mercantile
> Maze Mercantile is a Mobile-First apparel shopping app with a focus on intuitive user interaction / experience. This repo highlights my abilities in Front-end development.

![Mobile Image](public/media/mobile.jpg)

This app was built from scratch and bundled with Webpack and Babel. It is the Product-Overview service of a single page app in a service oriented / microservices architecture.

![Desktop Image](public/media/desktop.jpg)

## Related Projects
- https://github.com/Maze-Merch/maze-proxy-server
- https://github.com/Maze-Merch/related-products
- https://github.com/Maze-Merch/reviewsService
- https://github.com/Maze-Merch/QnA


# Business Requirements Mockup
![Mockup](public/media/mockup.jpg)

## Built With
* React
* Node.js
* Express
* Bootstrap
* HTML5
* CSS3
* JavaScript
* Webpack
* Babel



## Getting Started
Prerequisites: 
 * NodeJS v12.16.0
 * NPM v6.14.6
 * Xcode 11.6

Clone the Github repository:
```
$ git clone https://github.com/Maze-Merch/productDetails.git
```

cd into the directory 'productDetails' and run the following commands:

```
$ npm install
$ npm start
```

Now, navigate to http://localhost:3001 in your browser

### proxy-server

To run all 4 services, clone this repo: https://github.com/Maze-Merch/maze-proxy-server.git - And install dependencies. Then ensure you are in the root directory and RUN:
```
$ npm start
```
 --> this script runs:
 ```
$ npm run concurrently --kill-others-on-fail \"nodemon\" \"cd productDetails && npm start\" \"cd QnA && npm start\" \"cd related-products && npm start\" \"cd reviewsService && npm start\"
```
 --> this long script will cd into each service and run the 'start' script within that service. If this command fails anywhere, it will kill all the other commands in this script.

To turn off the servers for all 4 services, ENTER: control+c --> for a mac

All css files have been combined on the proxy server under the dist folder inside the styles.css file.

The index.html for the proxy server exists in the dist folder of the proxy server. In the body of this file is a div for each of the 4 services which line up with what each service is expecting in their ReactDOM.render. Also, in this file exists the header and footer attributes.
