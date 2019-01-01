# With Style

Programmatic styles support.

This package supplies tag names and utility functions for [Reaction with Style](https://github.com/djalbat/reaction-with-style). There is no need to install it directly as a dependency of your project. However, you might wish to clone it in order to try out the example.

## Installation

With [npm](https://www.npmjs.com/):

    npm install with-style

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/with-style.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Usage

```js
const stylesSupport = require('with-style');  ///

const { tagNames, classUtilities, stylesUtilities, classNameUtilities } = stylesSupport;

const { isClass } = classUtilities,
      { generateClassName, retrieveClassName } = classNameUtilities,
      { renderStyles, generateStyle, retrieveStyle } = stylesUtilities;

...
```

## Example

Not an example as such. It allows you to test out CSS against the built-in CSS lexer and parser. This is the first port of call should you suspect that your CSS is not being parsed correctly. Both the lexical entries and BNF that make up the CSS grammar can be altered on the fly. Pull requests are welcome for improvements to either.

## What CSS is supported?

Not all of it. You cannot, for example, make references to child elements at all. In the style for the `Header` component, for example, you would not be able to style the child `Link` component as follows:

```css
...

a {

  ...

}
```
Not being able to do so is restrictive, admittedly, but deliberately so. After all the idea is to tightly bind a component to its style. Hence we create a child `Link` component, rather than style it by way of its parent.

If you really must style the child elements of components in some way, and there are occasions this is unavoidable, add a fixed class name to the component and define this class in an external style sheet. For example, say you wanted to create a component for viewing markdown. The markdown is to be rendered as HTML and you would like to style the resultant images, titles and so on. You could implement your component thus:

```js
class MarkdownViewer extends React.Component {

  ...

  render(update) {
    const className = retrieveClassName(this),
          ...
          ;

    return (

      <section className={`markdown {className}`}>

      ...

      </section>

    );
  }
}

module.exports = withStyle(MarkdownViewer)`

  ...

`;
```
Now you could create an external style sheet for styling the rendered HTML:

```css
.markdown {

   ...

}
```
Other than this restriction, most of standard CSS is supported. All of the following CSS is fine, for example:

```css
  color: ${black};
  border: ${border};
  display: block;
  position: relative;

  .error {
    border-color: ${fiery};
  }

  :disabled {
    background-color: ${white};
  }

  ::after {
    content: "×";
    position: absolute;
    font-family: monospace;
  }

  [readonly] {
    color: ${shuttle};
  }

  @media (min-width: ${desktop}) {
    margin: 0;
  }
```
Note that all of the selectors, including the class selector, relate to the the component's outermost rendered element.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
