// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  // create elements
  let div = document.createElement("div");
  let span1 = document.createElement("span");
  let h1 = document.createElement("h1");
  let span2 = document.createElement("span");

  //   add data and classnames to elements
  div.classList.add("header");
  span1.classList.add("date");
  span1.textContent = "March 28, 2020";
  h1.textContent = "Lambda Times";
  span2.classList.add("temp");
  span2.textContent = "98°";

  //   create hierarchy among elements
  div.appendChild(span1);
  div.appendChild(h1);
  div.appendChild(span2);

  headerContainer = document.querySelector(".header-container");
  headerContainer.appendChild(div);

  return div;
}
Header();
