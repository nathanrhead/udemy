import ThemeProvider from './context';
import useTheme from './useTheme';

export default function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log({context});
  
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}
