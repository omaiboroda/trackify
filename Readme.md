How to run:
>npm install
>npm start

External libraries:
* styled-components and rebass for styles;
* react-router for client-side routing;
* humps for converting API responses to camelCase;
* lodash.throttle for throttling time updates in <audio /> tag.

Implementation details:
* As a next steps, I would introduce state management (redux/mobX) for decoupling logic, caching and error handling and would cover them with some tests;
* The application is responsive and codebase is linted with eslint;
* This is a first time I've tried Fractal app structure in my project - I am satisfied overall how did it work, but the approach can do not play well on a bigger-sized codebase (potential for a lot of nested folders).