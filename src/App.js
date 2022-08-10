import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Input name="first input" initialValue="first initial" />
      <Input name="second input" labelText="second label" initialValue="second initial" />
      <Button text="a button" />
    </div>
  );
}

export default App;
