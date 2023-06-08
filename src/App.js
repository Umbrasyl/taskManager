import styles from './App.module.sass';
import Overview from './components/Overview';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(event) {
    event.preventDefault();
    const task = event.target[0].value;
    setTaskList([...taskList, task]);
    event.target[0].value = '';
  }

  return (
    <div className={styles.app}>
      <form onSubmit={addTask} className={styles.form}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <Overview taskList={taskList} taskUpdater={setTaskList}/>
    </div>
  );
}

export default App;
