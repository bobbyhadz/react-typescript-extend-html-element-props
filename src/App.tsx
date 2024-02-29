import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  children?: React.ReactNode;
  // ... your custom props here
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  ...rest
}) => {
  return <button {...rest}>{text}</button>;
};

const App = () => {
  return (
    <div>
      <Button
        onClick={() => console.log('button clicked')}
        text="Click"
      />
    </div>
  );
};

export default App;
