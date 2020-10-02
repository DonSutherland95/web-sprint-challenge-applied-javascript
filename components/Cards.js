// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios";
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    const cardsContainer = document.querySelector(".cards-container");
    // object.values converts the object data into an array of objects
    let topics = Object.values(
      res.data.articles
    ); /* res.data.articles containing object data*/
    // topics.forEach loops thru each topic item in array
    topics.forEach((item) => {
      // item.forEach loops thru the data of each item
      item.forEach((article) => {
        cardsContainer.appendChild(createArticle(article));
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
// function creates an html markup to display to the dom
function createArticle(obj) {
  // create html elements
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");

  // style elements
  div1.classList.add("card");
  div2.classList.add("headline");
  div3.classList.add("author");
  div4.classList.add("img-container");

  // fill elements with data
  div2.textContent = obj.headline;
  img.src = obj.authorPhoto;
  span.textContent = `By ${obj.authorName}`;

  // setup hierarchy among elements
  div1.appendChild(div2);
  div1.appendChild(div3);
  div3.appendChild(div4);
  div3.appendChild(span);
  div4.appendChild(img);

  // add a click listener to every article created on the dom
  div1.addEventListener("click", () => {
    console.log(obj.headline);
  });
  //   console.log(div1);
  return div1;
}
