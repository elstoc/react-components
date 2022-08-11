import Input from './components/Input';
import NumInput from './components/NumInput';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form>
        <Input name="text input" revertButton={true} initialValue="some text" />
        <NumInput name="float input" labelText="float input" initialValue="1234" />
        <Button text="a button" />
      </Form>
    </div>
  );
}

export default App;
