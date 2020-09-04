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

//Build the article maker function as if it's inside the specific topic
//run the article maker function inside a foreach loop, for each topic
//maybe tuck the article maker function under multiple click events?


const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(stuff => {
        //console.log(stuff)
        //console.log(stuff.data.articles)
        //console.log(stuff.data.articles.bootstrap)
        const allArticles = stuff.data.articles
        console.log(allArticles);
        const bootstrapArts = allArticles.bootstrap
        const jsArts = allArticles.javascript
        const jqueryArts = allArticles.jquery
        const nodeArts = allArticles.node
        const techArts = allArticles.technology
        const topicArray = [ bootstrapArts, jsArts, jqueryArts, nodeArts, techArts]
        console.log(topicArray);
        // console.log(bootstrapArts);
        // console.log(jsArts);
        // console.log(jqueryArts);
        // console.log(nodeArts);
        // console.log(techArts);
        topicArray.forEach(topic => {
            console.log(topic) 
            topic.forEach(art => {
                const currentArt = artMaker(art)
                cardsContainer.appendChild(currentArt)
            })
        });
    })
    .catch(err => {
        console.log(err)
    })

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

//Article maker function

function artMaker(obj) {
    //Instatiating elements
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const name = document.createElement('span')
    // Setting class, attributes and text
    // attributes and text
    authorImage.src = obj.authorPhoto
    headLine.textContent = `${obj.headline}`
    name.textContent = `${obj.authorName}`
    // class names
    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    //Hierarchy
    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(name)
    imgContainer.appendChild(authorImage)
    //return
    return card
}