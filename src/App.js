import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese texto:
          <input type="text" name="text1" />
        </p>
        <p>
          <input type="submit" value="texto ingresado" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const text1=String(e.target.text1.value, 10);
  const text=text1;
  alert('el texto que ingreso es: '+text);
}

export default App;