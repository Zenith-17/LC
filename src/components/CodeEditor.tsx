// // components/CodeEditor.js
// import React from 'react';
// import AceEditor from 'react-ace';

// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/theme-monokai';

// const CodeEditor = () => {
//   return (
//     <AceEditor
//       mode="javascript"
//       theme="monokai"
//       name="code-editor"
//       width="100%"
//       height="500px"
//       editorProps={{ $blockScrolling: Infinity }}
//       setOptions={{
//         enableBasicAutocompletion: true,
//         enableLiveAutocompletion: true,
//         enableSnippets: true,
//         showLineNumbers: true,
//       }}
//       value="// Start coding here..."
//       onChange={(newValue) => {
//         // Handle code changes here
//       }}
//     />
//   );
// };

// export default CodeEditor;



import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

function CodeEditor() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

export default CodeEditor;