import { useState } from 'react';
import { marked} from 'marked';
import './App.css';

// a header {H1 size}, a sub header {H2 size}, a link,
// inline code, a code clack, a list item,
// a blockquote, an image, and bolded text

function App() {
  const [text, setText] = useState(`# Markdown Previewer`);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <div class="freecodecamp-logo-container">
            <img src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg" alt="Logo de freeCodeCamp" class="freecodecamp-logo" />
        </div>
      <textarea id='editor' onChange={(event)=>{
        setText(event.target.value);
      }}
      value={text}
      ></textarea>

      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(text), }}></div>
    </div>
  );
}

export default App;