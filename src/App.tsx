import { ReactElement } from 'react';
import './App.css';

const App: React.FC = (): ReactElement => {

  const haldleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const code = e?.currentTarget?.innerText;
    navigator.clipboard.writeText(code);
  }

  return (
    <div className="App">
      <h1>React Storybook Crash Course App</h1>
      <p>Please run <code onClick={haldleClick} className="code-snippet">npm run storybook</code> command to start the sorybook</p>
    </div>
  );
}

export default App;
