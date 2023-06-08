import Task from './Task'

export default function Overview(props) {
  return (
    <ul>
      {props.taskList.map((task, index) => {
        return <Task key={index} taskString={task} {...props}/>
      }
      )}
    </ul>
  )
}