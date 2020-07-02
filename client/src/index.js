import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap';

ReactDOM.render(<App />, document.getElementById('details'));

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <title>Maze Proxy</title>
//   </head>
//   <body>
//     <!-- Each one of these divs lines up with what the service is expecting in their ReactDOM.render -->
//     <div id="details"></div>
//     <div id="related"></div>
//     <div id="qna"></div>
//     <div id="reviews"></div>

//     <!-- Making get requests to each service for their BUNDLE, note the endpoint -->
//     <script crossorigin src="http://localhost:3001/bundle.js"></script>
//     <script crossorigin src="http://localhost:3002/bundle.js"></script>
//     <script crossorigin src="http://localhost:3003/bundle.js"></script>
//     <script crossorigin src="http://localhost:3004/bundle.js"></script>
//     <!-- When we run the above code it will run ReactDOM.render() for each service's
//         bundle which is how we get each service onto the dom -->
//   </body>
// </html>
