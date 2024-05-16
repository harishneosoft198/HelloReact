#npx parcel index.html --- npm run start -- npm start
#npm parcel build index.html


# React hooks
    -normal js utility functions
    -they have written this inside react
    -multiple react hooks are there
    -useState - super powerful state variables
    -useEffect

# using the swiggy api
    - https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    - structure may change
# conditional rendering
# use CORS extension for using the above api
# use async await
# use effectHook
    - it will call after ui renders
    - two arguments will be there, call back and the array of things
# useState
    - when we call setState function then whole function called again.
    - whatever it is header,card etc,.
# react working
    -Loads-->render-->api calling-->re render the page

#useEffect
    - if there is no dependecy array then it wall call whenever the component re renders(every render)
    -if there is depedency then it will call when that state varible is changed.
#useState will always top of the functional componenet, dont write in conditions and functions.
# routing
    # createBrowserRouter
        -creates the routing configuration
    # RouterProvider
        - provide this routing configuration
    # useRouterError hook
        -more information about the error
    #outlet
        -helps to refill the components as children in parent
    #never use anchor tag for routing instead use Link because with anchor tag page will reolad
    #two types of routing in web apps
        -client side routing
        -server side routing

# class component
    -state usage
    -componeent didmount
        -usees for api caling
# react life cycle
    -constructor
    -rendering
    -component did mount
    -this wil be change when we ha multiple childs
    -refer google
# react life cycle
    #componentDidMount
        calls after first render
    #componentDidupdate
        calls after mounting phase
    #componentwillunmount
        calls after removing from dom
# custom hooks
    - helps us to improve or optimise the app.
    -single responsibility code
        -one component should have only one responsibility
        -like showing the card.
    -keep you component lite(less code, one responsibility)
    -create in utils folder
    -use one file for one hook
    -starts with small letter
        -ex: useOnlineStatus
# optimizing our app
    -we will be using the lazy load function and suspense component to laod the content whenever we needed.
    //chunking
    //code splitting
    //dynamic bundling
    //dynamic import
    //on demand loading
# make our app beautiful
    -through sass and scss
    -sass gives the super powers to css
    -for bigger applications companies uses the sass
    # styles compoenents
        -to write css for our comopnents.
    # popularly react uses the tailwind css
    list of  ways to make app good
        -bootstrap
        -material ui
        -tailwind css--> we are using this
        -chakra ui
        -ant ui-->second most popular ui library

# higher order components
    - higher order components are which takes componets and enhances and return the component.
    - pure function
        - it will not change the code of component.

# lifting the state up
    -controlling the children from parent
# home work
    -collapse all accordions when we click again
# react context
    - we can avoid the props drilling
    - we can make the global state with this.
    - useContext-hook - for functional components
    - createContext-creates context
    - context.Consumer for using - for class based componets
    - context.Provider for changing the value
# redux toolkit
    - install @reduxjs/toolkit and react-redux
    - build our store and connect to our app
    - cartSlice(cart)
    - dispatch(action) -  we can change the store by actions by dispatching
    - selector - we can subscibe the store
    - when we click on button, it will dispatch an action and call a function it will change the that particular slice
    - that function called as reducer function.
    - like cart slice,user slice
    - immer is used in redux, go and check in docs
    - redux uses the immer behind the scenes to for immutable state handling.
    - mutate the state or return the new state in actions
    - install redux dev tools chrome extension for redux apps
    - rtk query try to check in docs