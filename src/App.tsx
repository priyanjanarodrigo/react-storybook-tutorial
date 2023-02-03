import { ReactElement, useRef, useState } from 'react';
import './App.css';
import { Tooltip } from '@mui/material';


const App: React.FC = (): ReactElement => {
  const codeElementRef = useRef<HTMLElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text: string): Promise<void> => {
    if (text && 'clipboard' in navigator) {
      await navigator.clipboard.writeText(text)
    }
  }

  const haldleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const command = codeElementRef.current?.innerText || "";
    copyTextToClipboard(command)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => { setIsCopied(false) }, 1500);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <h1>React Storybook Crash Course App</h1>
      <p>Please run the following command to start the sorybook</p>
      <Tooltip title={isCopied ? "Copied !" : "Click to Copy"}>
        <code ref={codeElementRef} onClick={haldleClick} className="code-snippet">
          npm run storybook
        </code>
      </Tooltip>
    </div>
  );
}

export default App;
