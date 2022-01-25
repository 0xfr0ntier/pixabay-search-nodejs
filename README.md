
# [Pixabay Search](https://github.com/0xfr0ntier/pixabay-search-nodejs) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/0xfr0ntier/pixabay-search-nodejs/blob/main/LICENSE)

This repo contains the backend of Pixabay Search project, which allows an image search through [Pixabay API](https://pixabay.com/api/docs/). Built using [NodeJS](https://github.com/nodejs/node).

## API Endpoint 

1. `/` - Home route, serves the [app](https://github.com/0xfr0ntier/pixabay-search-react).
2. `/register` - Register endpoint.
3. `/signin` - Signing In endpoint.
4. `/profile/:id` - Getting user profile data using `id`.
5. `/image/:id/:query` - Searching images using `query`.

## Running Server


Clone this [Repo](https://github.com/0xfr0ntier/pixabay-search-nodejs).

```sh
git clone <pixabay-search-nodejs-repo>

npm install
```
Add your Pixabay `API_KEY` and `PORT` in `server.js`, then run.

```sh
npm start
```

## Todo list

 - [x] API design.
 - [x] Querying Pixabay API.
 - [ ] Integrating with Database.
 - [ ] Implementing Auth functionality.


### License
This project is [MIT licensed](https://github.com/0xfr0ntier/pixabay-search-nodejs/blob/main/LICENSE).
