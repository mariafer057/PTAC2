import './App.css'
import { Exemplo } from './Exemplo'
export default function App() {
  const listaalunos = [
    {nome: "Ani", idade: 16, cidade: "Nova Andradina"}, 
    {nome: "Máfer", idade: 16, cidade: "Nova Andradina"},
    {nome: "Monis", idade: 16, cidade: "Nova Andradina"}];
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista = {listaalunos}/>
      </div>
  
    );
  }

  