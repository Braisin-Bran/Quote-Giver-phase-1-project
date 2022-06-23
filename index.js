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

let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let searchResult = document.querySelector("#search-bar").value;
  let target = document.querySelector("#searchResultArea");
  target.innerText = "";
  fetch(
    `http://api.quotable.io/search/quotes?query=${searchResult}&fields=author`
  )
    .then((res) => res.json())
    .then((searchData) => {
      console.log(searchData);
      searchData.results.forEach((quote) => {
        console.log(quote);
        let quotes = document.createElement("p");

        quotes.innerText = `"${quote.content}" by ${quote.author}`;

        target.append(quotes);
      });
      //   authors.forEach((quoteList) => {
      //     let resultAuthor = author.results.content;
      //     console.log(authors);
      //     e.preventDefault();
      //     let quotes = document.createElement("p");
      //     quotes.innerText = `${resultAuthor}`;
      //     quoteList.append(p);
      //   });
    });
});

//is given extensive list of results
//If photo is availible then display
//else MEGAMIND "No Photo / Not Mario"
//Author Wikipedia
