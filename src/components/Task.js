import styles from './Task.module.sass';
import { useState } from 'react';

export default function Task({ taskString, taskList, taskUpdater }) {
  const [editMode, setEditMode] = useState(false);

  function handleDelete(event) {
    event.preventDefault();
    const taskIndex = taskList.indexOf(taskString);
    const newTaskList = [...taskList];
    newTaskList.splice(taskIndex, 1);
    taskUpdater(newTaskList);
  }

  function submitEdit(event) {
    event.preventDefault();
    const taskIndex = taskList.indexOf(taskString);
    const newTaskList = [...taskList];
    newTaskList[taskIndex] = event.target[0].value;
    taskUpdater(newTaskList);
    setEditMode(false);
  }

  function startEdit(event) {
    event.preventDefault();
    setEditMode(true);
  }

  return (
    <>
      {!editMode ? (
        <div className={styles.task}>
          <li className={styles.listItem}>{taskString}</li>
          <button id="delete" className={styles.delete} onClick={handleDelete}>Delete</button>
          <button id="edit" className={styles.edit} onClick={startEdit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={submitEdit} className={styles.form}>
          <input type="text" defaultValue={taskString} className={styles.input}/>
          <button type="submit" className={styles.submit}>Save</button>
        </form>
      )}
    </>
  )
}