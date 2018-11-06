# react-parcel
Building React with Parcel without spending your time setting up compilers.

If you would like to code in TypeScript, 
please try my [react-typescript-parcel](https://github.com/ArbieDev/react-typescript-parcel).

### Requirement
- Node.js & npm (yarn/npx)
- parcel-bundler (although global installation is officially recommended, in here it goes local)

### Get Started
- `npm install` or `yarn install` to install all dependencies as usual
- `npm start` or `yarn start` to compile code with parcel (if yarn isn't installed, use npx instead)
- in this repository setting, output directory `-d` is `public` and port `-p` is on `2000`
- by the setting, it would compile code to `public` directory and start a local server `localhost:2000`
- by package default without specifying options, code would be compiled to `dist` directory and start server on port `1234`
- in watch mode e.g. `parcel watch index.html` it wouldn't start a sever

##### FYI Parcel Official Documentation https://parceljs.org/getting_started.html
