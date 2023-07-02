import {useState} from 'react';

import { addTodo } from './store/todoSlice';
import TodoList from './components/TodoList';

import './App.css';
import { useAppDispatch } from './hooks';
import NewTodoForm from './components/TodoForm';


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;