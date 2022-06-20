

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

fetch("http://api.quotable.io/random")
.then((res)=>res.json())
.then((randomQuote) => {
    //console.log(quotes)

    let random = document.querySelector("#random-click")
random.addEventListener("click", (e) => {
    // build counter
    //conditional, 
        // if clicked for the first first time load quote BOOM
        // if clicked for the second time, click count greater than 1
            //window.location.reload() ((which is new jsom fetch = new quote))
            // then we run as usual 
            // set counter back to 1
    e.preventDefault()
    console.log("clicked")
    //window.setTimeout(function(){location.reload()},25000)

    let quoteSpace = document.createElement("p")
    
    quoteSpace.innerText = `${randomQuote.content}`

    random.append(quoteSpace)
})
console.log(random)
})




//if it is the first randome quote 
    //cool, pull quote

//else, if it is the second or more
    // build click counter
    //that is when we pull new quote

//





