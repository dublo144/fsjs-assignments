## Full Stack Javascript Assignments

### Period 1: Basic JavaScript, es2016,17,Next, node.js, ESLint, TypeScript, Babel and WebPack

[Learning goals for period 1](https://docs.google.com/document/d/1FOsHfH0r5-f24u6TXAmfh1M4QvEgU3wAHyEWwhdSHlw/)

### Assignments for period 1:

[Introduction to the Full Stack JavaScript](https://github.com/dublo144/fsjs-assignments/tree/master/period_01/01_Intro_To_FSJS)

[Day-2, getting started with node-js
](https://github.com/dublo144/fsjs-assignments/tree/master/period_01/02_Getting-started-with-node)

[Day-3, Promises and async/await](https://github.com/dublo144/fsjs-assignments/tree/master/period_01/03_Promises_Async)

[ES-next, Babel, Typescript and WebPack](https://github.com/dublo144/fsjs-assignments/tree/master/period_01/04_webpack_babel)

**NB:** I freestyled a bit here on the demo assignment. Webpack-configs really comes to power when you can divide them. So in the demo assignment i split the Webpack-configs into [webpack.dev.js](https://github.com/dublo144/fsjs-assignments/blob/master/period_01/04_webpack_babel/webpack-demo/webpack.dev.js), [webpack.prod.js](https://github.com/dublo144/fsjs-assignments/blob/master/period_01/04_webpack_babel/webpack-demo/webpack.prod.js), and [webpack.common.js](https://github.com/dublo144/fsjs-assignments/blob/master/period_01/04_webpack_babel/webpack-demo/webpack.common.js). This allows me to have different settings, depending on the environment.

[An introduction to TypeScript](https://github.com/dublo144/fsjs-assignments/tree/master/period_01/05_typescript/exercises)

---

### Period 2

[Learning goals for period 2](https://docs.google.com/document/d/1L9t-5DTmJYeJ0bEt2fPgLhurGcISCxW9bH0yxx-O5QE/edit?usp=sharing)

#### Day 1

[Day-1, Backend Server with Node and Express](https://github.com/dublo144/fsjs-assignments/tree/master/period_02/express-mongo-typescript-start-code)

#### Day 2

[Day-2, Error Handling, Middleware and using Express with Typescript (Forsættelse af Dag-1)](https://github.com/dublo144/fsjs-assignments/tree/master/period_02/express-mongo-typescript-start-code)

#### Day-3, Testing JavaScript Backend Code with Mocha and Chai

[Guided Tutorial](https://github.com/dublo144/fsjs-assignments/tree/master/period_02/getting_started_with_mocha_and_chai/converter)

[Testing with Mocha, Chai and Nock](https://github.com/dublo144/fsjs-assignments/tree/master/period_02/testing_with_mocha_chai_nock)

#### Day 4 NoSql with MongoDB + More testing

[Seperate Repo for the start code](https://github.com/dublo144/fsjs-startcode)

#### Day 5, Geo-Location with GeoJson

[Getting started with GeoJson](https://github.com/dublo144/fsjs-assignments/tree/master/period_02/geojson_getting_started)

#### Day 6, Geo-Location with GeoJson and MongoDB

[Adding the Game related parts to your backend](https://github.com/dublo144/fsjs-assignments/tree/master/period_02/05_geolocation_geojson_mongodb)

#### Deployed Version

[geojson.madsbrandt.codes](https://geojson.madsbrandt.codes)

#### General notes to my start code for Period 2

**_dotEnv_** has been refactored to a dev dependency since it has no use in the production environment. In turn, that means that I can't import it anywhere using `require(dotEnv)`, and I have to preload the config file (.env). This can be done by requiring `-r dotenv/config` in the npm scripts.

**_chai-as-promised_** has been added in order to support testing async code.
Chai-as-promised allows me to `expect` that a function call will rejected, instead of catching the rejected promise and `expect` on that. Better use of the framework. Yay!

**_chai-spies_** has been added in order to support spies on functions. It is used in [GameEndpointTest](https://github.com/dublo144/fsjs-assignments/blob/master/period_02/05_geolocation_geojson_mongodb/test/gameEndpointTest.ts) to verify that the correct function is called in the facade with the correct parameters, without actually asserting on the outcome. The outcome is tested by the unit-test for that function.
