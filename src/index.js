import React from 'react'

// First we are going to create a new component. We need this component to produce some HTML.
const App = function() {
    return <div>Hello World!</div>
}

// We also need to take the above component's compiled HTML and put it on the page (e.g place it in the DOM)
React.render(App)

