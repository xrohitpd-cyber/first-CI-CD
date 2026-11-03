import Button from './components/Button';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Clicked!')}>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;