# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File watching algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics behind the scenes
- Error Handling
- We can host our app on HTTPS using Parcel
- Tree Shaking - remove unused code for us
- Different build for Dev and production


// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "This is h1 tag!"),
//     React.createElement("h2", {}, "This is h2 tag!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is h1 tag!"),
//     React.createElement("h2", {}, "This is h2 tag!"),
//   ]),
// ]);

// const Title = () => <h1>This is a functional component</h1>;

// //This is also known as Component Composition

// const HeaderComponent = () => (
//   <div id="container">
//     <Title />
//     <h1>This is another functional component</h1>;
//   </div>
// );

# Food ordering App
// Header
// - Logo
// Links
// - Home
// - About Us
// - Contact Us
// - Cart
// Body Container
// - Search input
// - Restaurant Cards
// Footer
// - Copy Right
// - Links



# There are two types of export/import
- default export:
export default <name of variable/component>
import <name of variable/component> from file path

- named export
export const <name of variable/component>
import {<name of variable/component>} from file path


# React Hooks
 - are normal JS functions written by FB developers inside React package.
 - useState() - super powerful react variables.
 - useEffect()


# Types of Routing
# There are two types of routing in web apps
- Client side routing
- Server side routing





# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our own Store
- Connect our store to our app.
- create a cart slice
- dispatch an action
- read the data using selector.


# Types of testing (developer)
 - Unit Testing
 - Integration Testing
 - End to end Testing (e2e testing)



 # setting up testing in our app
 - install React testing library
 npm i -D @testing-library/react

 - install jest
 npm i -D jest

 - installed babel dependencies which are required when we use jest along with babel
 npm i -D babel-jest @babel/core @babel/preset-env

 - configure babel. - we added babel.config.js and pasted below code inside it.
 module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

- configure parcel config file .parcelrc to disable default babel transpilation.
- Jest Configuration
npx jest --init

- install jsdom library
npm install --save-dev jest-environment-jsdom

_ _ = dunder (double underscores)
__tests__ dunder


- install @babel/preset-react to make JSX work inside my test cases
npm i @babel/preset-react

- add @babel/preset-react inside my babel config
[("@babel/preset-react", { runtime: "automatic" })], 
add the above to babel.config.js preset

- Install @testing-library/jest-dom
npm i -D @testing-library/jest-dom




React Element, JSX, REact Fiber NOde, Virtual DOM Object are the same thing.