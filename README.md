# __SCSS Mixins__

[Slack group for related discussions](https://scss-mixins.slack.com/)

###### beta v0.1.3

A set of useful SCSS mixins to supercharge your workflow, with no development dependencies. The package avoids redundant prefixing mixins. Instead, we'd let ```autoprefixer``` take care of that for us while compiling CSS stylesheet document.

_Note: This package is still under development phase, refrain using for production purposes until v1.0.0 is rolled out_

## Installation

```npm install --save scss-mixins```

## Usage

#### Import scss-mixins in your project
Your project structure might look something like this:

*node_modules/scss-mixins/src/mixins.scss  
src/scss/app.scss*

In that case, add `@import` rule in app.scss as:  
```
@import "../../node_modules/scss-mixins/mixins";
// Rest code here
```
