The project is built based on React, Next.js and TypeScript. I had barely used Next.js before so I took some time for research.

In this small project I didn't got to utilize many of it's advantages, I really only used the getStaticProps function for fetching at build time, the Link for transitions between routes and the Images component. I tested the file-system based routing but it wasn't neccessary considering I needed additional data at the initial screen. 

All components are functional and use hooks to handle state. 

There's two responsive screens, one that shows the pokemon list and another one that shows additional information of each pokemon. On the first page I added an extremely simple pagination component.

One thing that clearly would need to be fixed is the way the information is being sent between the pages, but I thought it would take too long to add a state management solution.
