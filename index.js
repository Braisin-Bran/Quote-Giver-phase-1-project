

//M.inimum V.iable P.roduct Deliverables
    // User CLICKs random button
        //grab html via query selector or create element 
        //if create append as last step
        //create event listener
            //define callback/action of click

// User SUBMITs input field
    //grab html via query selector or create element 
    //if create append as last step
    //create event listener
        //define callback/action of SUBMIT  
            //is given extensive list of results
            //If photo is availible then display
                //else MEGAMIND "No Photo / Not Mario"
            //Author Wikipedia 

// User CHANGEs search input field and is given a few possibly related results

// edit here for git push double check

// fetch("http://api.quotable.io/random")
// .then((res)=>res.json())
// .then((randomQuote) => {
    //console.log(quotes)
    
    let random = document.querySelector("#random-click")
        random.addEventListener("click", () => {
        fetch("http://api.quotable.io/random")
        .then((res)=>res.json())
        .then((randomQuote) => {
            let quoteSpace = document.querySelector("#quote")
            console.log(randomQuote)
            quoteSpace.innerText = randomQuote.content
            random.append(quoteSpace)
        })
})
