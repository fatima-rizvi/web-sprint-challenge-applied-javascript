// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topics = document.querySelector('.topics')

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(stuff => {
        console.log(stuff)
        const topicsArray = stuff.data.topics
        console.log(topicsArray);
        topicsArray.forEach(topic => {
            const currentTab = makeTab(topic)
            topics.appendChild(currentTab)
        });
    })
    .catch(err => {
        console.log(err);
    })

    function makeTab(singleTopic) {
        //Instantiating element
        const tab = document.createElement('div')
        //Set text content
        tab.textContent = singleTopic
        //Set class name
        tab.classList.add('tab')
        //Return
        return tab
    }