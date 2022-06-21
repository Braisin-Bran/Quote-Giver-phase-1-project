//M.inimum V.iable P.roduct Deliverables

// User CHANGEs search input field and is given a few possibly related results

// fetch("http://api.quotable.io/random")
// .then((res)=>res.json())
// .then((randomQuote) => {
//console.log(quotes)

let random = document.querySelector("#random-click");
random.addEventListener("click", () => {
  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((randomQuote) => {
      let quoteSpace = document.querySelector("#quote");
      console.log(randomQuote);
      quoteSpace.innerText = randomQuote.content;
      random.append(quoteSpace);
    });
});

// grab html via query selector
let form = document.querySelector("#author");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted");
  //create event listener
  fetch(
    `http://api.quotable.io/search/quotes?query=${searchResult}&fields=author`
  )
    .then((res) => res.json())
    .then((authors) => {
      console.log(authors);
      let searchResult = document.querySelector("#search-bar").value;
      let author = authors.filter(searchResult);
      // e.preventDefault();
      //filter by "author.value"
      let quotes = document.createElement("p");
      quotes.innerText = `${author.slug}`;
      searchResult.append(p);
    });
});

//is given extensive list of results
//If photo is availible then display
//else MEGAMIND "No Photo / Not Mario"
//Author Wikipedia
