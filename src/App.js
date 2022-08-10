import Input from './components/Input';
import NumInput from './components/NumInput';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Input name="text input" initialValue="first initial" />
      <NumInput name="numeric input" labelText="second label" initialValue="1234" />
      <Button text="a button" />
    </div>
  );
}

export default App;
