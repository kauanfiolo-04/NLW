interface ButtonProps{
  title: String;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="send 1" />
      <Button title="send 2" />
      <Button title="Send 3"/>
      <Button title="Hello World" />
    </div>
  )
}

export default App
