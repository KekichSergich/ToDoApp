import './styles/App.css'
import Header from './components/app-header/AppHeader.tsx';
import TodoSection from './components/todo-section/TodoSection.tsx';


function App() {
  return(
    <>
      <Header />
      <TodoSection></TodoSection>
    </>
  )
}

export default App
