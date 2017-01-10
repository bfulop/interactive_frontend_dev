# Interactive FrontEnd Development

Like CSS livereload but for HTML and JavaScript components. 

## 1. Components based 

Create independent, small components that can be used to build up the page. 

### 1. 1 Documentation

Can generate a documentation page (style guide) from these components that lets the designers oversee the renderings on the page and the developers the available components that they can use.

### 1. 2 Testing, quality assurance

It's much easier to write comprehensive tests for small components. We can run these tests locally while developing (BDD) and on a "testing farm" (e.g. CrossbrowserTesting.com) using a wide range of browsers and screen sizes. 

### 1. 3 Interactive programming

I can work on one component, save the modifications, and immediately see what's changed in my browser without having to reload the page. This is much faster than the traditional workflow.

### 1. 4 Encapsulation

Components styles don't leak to other elements on the page. I don't have to worry that if I change the style of element, causes regression somewhere else on another page. (using CSS modules)

### 1. 5. Performance

We can create optimised JavaScript and CSS files that only hold the minimum necessary to make the site work and progressively load all extra code as needed.

## 2. The ideal workflow

### 2. 1. Work locally on the components

Test Driven Development style, where I first write the tests then satisfy them with by building the components. Tests can be visual rules (e.g. "button should be 5px below the title") or business logic ("remove from cart  should reset the cart value to empty").

### 2. 2. Build the pages using the components 

### 2. 3. Generate the style guide page

That the designer can review. Run some cross-browser tests on it.

### 2. 3. Export the pages as Twig/HTML

To be integrated in the current architecture. 

### 3. Technologies

There are three technologies I'm currently considering. Previously I was using Grunt, Assemble.io with Handlebars templates to create my components. I'm looking for something that lets me work faster (interactive programming, and easier way to embed components into each other). 

### 1. Web components + Polymer

This is part of HTML5, so the most standards compliant way. 
The reason I'm less motivated to use them is that, they are more suited to adding independent widgets (date-picker, charts). We, on the other hand will want to easily embed one component into another several layers deep ("add a column and insert a block and insert a title in it").
Would be harder to export to simple HTML or Twig format.

### 2. Elm language

It's a new programming language for the front end that compiles to JavaScript. It has a very simple syntax and includes all the great ideas that arrived to the front end development world in the recent years. 

Using Elm would ensure a sort of "coding style" so that all developers code using the right patterns. It's still easier to learn Elm than either Web Components and all the related technologies. And also easier and "safer" than option 3. i.e. doing the same patterns as in Elm but with standard JavaScript and libraries, where you have to learn even more technologies and easy to write bad code. 

The current downside is that it's harder to export (i.e. not possible) optimised bundles than with JavaScript. The elm runtime is about 200Kb, so the size of jQuery which not that bad. However with Webpack and ES6 JavaScript modules and newer virtual DOM libraries we can go much lower.
Also, the tooling is not yet as good as with "standard" JavaScript. The test reporters are slightly less fancy (like Wallaby.js for JS) and I have to check if there's an equivalent of testdouble.js for stubbing modules (very important for designing the architecture).

The big advantage of going with Elm is that the code quality and performance is guaranteed by the language (not at all true for JavaScript). 

### 3. Standard JavaScript with a Virtual DOM library

The architecture would be same as Elm but recreated with JavaScript patterns and libraries. Using a Virtual DOM library to render our components, Redux pattern to manage the state (data) and CSS modules to couple the styles with the component. The concepts are the same as in Elm. Using Webpack I can export static HTML or Twig for the back-end (also true for Elm).
I can also use a lot more helper libraries. 

## 4. The future: server-side rendering

So far, the technologies are not that important, unless we start adding more user interactions to the page (listings, reordering, lots of AJAX calls). As long as the pages are more or less static, we don't really need a heavy client-side runtime for the JavaScript. 
For the short term then, the choice of these technologies are not much more important than how I want to compile SASS to CSS...

### 4. 1. Middle-end architecture 

One interesting side-effect however, is that from here, it's very easy to go to rendering the component with NodeJS on the server. This is the sweet spot for NodeJS: receive the requests from the browser, pass it to the back-end and render the html back to the browser. Even a cheap, low-end server can handle a surprisingly large number of requests (practically, there's no memory cost per connection).

This is sometimes called as at the middle-end architecture (Netflix and Paypal use this among practically everyone who starts using a Virtual DOM library).
 

