import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';

const InputText = ({text, change, id}) => {
  return (
    <div id= {id}> 
    <div id={`inner-${id}`}> 
      <h2>Editor</h2>
    </div>
    <textarea onChange={change}>{text}</textarea>
    </div>
  )
}

const OutputText = ({text, id}) => {
  return (
    <>
    <div id={id}>
    <div id={`inner-${id}`}>
      <h2>Preview</h2>
    </div>
    <div dangerouslySetInnerHTML= {{__html: marked.parse(text)}} id={`text-${id}`}>
    </div>
    </div>
   
    </>
  )
}

const App = () => {
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

`;
 
  const [text, setText] = React.useState(placeholder);

  return (
    <>       
    <InputText text={text} change= {(e)=> setText(e.target.value)} id='editor'/>
    <OutputText text={text} id='preview'/>
    </>
  )
}

export default App;