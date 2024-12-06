# Udemy Course on React | Notes

## Webpack

1. Webpack is an asset bundler.
2. Benefits
  a. Helps to organize JavaScript files and allows for their referencing in one script tag instead of multiple script tags.
  b. Allows a developer to break up JavaScript code into discrete sections that communicate with each other.
  c. Allows a developer to import dependencies when needed into files and manage them in package.json, instead of using a CDN.
  d. Compresses the bundled code and runs babel for us.
3. Before and After
  A. Before
    a. public
      i. html
      ii. JavaScript (order matters)
        1. React
        2. React DOM
        3. utils.js
        4. app.js
  B. After
    a. public
      i. index.html
      ii. bundle.js: everything needed from src and node_modules
    b. src
      i. app.js
      ii. util.js
    c. node_modules
      i. React
      ii. React DOM
4. Webpack's Role in the Era of Server Side Rendering (SSR) and Static Site Generation (SSG).
  A. Frameworks like Next.js (for SSR/SSG) and Vite (for fast development builds) often abstract away the need to configure Webpack directly. 
  B. Webpack remains widely used, particularly for:
    i. Custom client-side React setups.
    ii. Legacy React projects.
    iii. Applications requiring detailed control over the bundling process.

5. Modern Alternatives to Webpack
  A. Vite: A modern, fast development server and build tool.
  B. ESBuild: Focuses on speed and simplicity. 
  C. Parcel: Zero-config bundler for simpler setups.
