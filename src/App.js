import Input from './components/Input';
import NumInput from './components/NumInput';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form>
        <Input name="text input" initialValue="first initial" />
        <NumInput name="numeric input" labelText="second label" initialValue="1234" />
        <Button text="a button" />
      </Form>
    </div>
  );
}

export default App;
