import { Button, ButtonCount } from './components/button'

function App() {
  return (
    <div>
      <Button text="Botão 1" />
      <Button> Botão 2 com Children </Button>
      <Button text="Botão 3" />
      <ButtonCount />
      <ButtonCount />
      <Button />
      <Button />
    </div>
  );
}

export default App;
