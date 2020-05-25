# With Style

Programmatic styles.

This package supplies the tag names and utility functions for the following two packages:

* [Easy with Style](https://github.com/djalbat/easy-with-style).
* [Reaction with Style](https://github.com/djalbat/reaction-with-style).

## Installation

With [npm](https://www.npmjs.com/):

    npm install with-style

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/with-style.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Usage

There should be no need to install this package directly. For the record, however, the imports are as follows:

```
import { tagNames, stylesUtilities, classNameUtilities } from 'with-style';

const { generateClassName, retrieveClassName } = classNameUtilities,
      { renderStyles, generateStyle, retrieveStyle } = stylesUtilities;

...
```
These are utilised or exported in turn by the aforementioned `xxx-with-style` packages.

## What CSS is supported?

Not all of it. You cannot, for example, make references to child elements at all. In the style for the `Header` component, for example, you would not be able to style the child `Link` component as follows:

```
...

a {

  ...

}
```
Not being able to do so is restrictive, admittedly, but deliberately so. After all the idea is to tightly bind a component to its style. Hence we create a child `Link` component, rather than style it by way of its parent.

If you really must style the child elements of components in some way, and there are occasions this is unavoidable, add a fixed class name to the component and define this class in an external style sheet. For example, say you wanted to create a component for viewing markdown. The markdown is to be rendered as HTML and you would like to style the resultant images, titles and so on. You could implement your component thus:

```
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

export default withStyle(MarkdownViewer)`

  ...

`;
```
Now you could create an external style sheet for styling the rendered HTML:

```
.markdown {

   ...

}
```
Other than this restriction, most of standard CSS is supported. All of the following CSS is fine, for example:

```
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
    
## References    

* [W3C Grammar of CSS 2.1](https://www.w3.org/TR/CSS21/grammar.html)

## Contact

- james.smith@djalbat.com
- http://djalbat.com
