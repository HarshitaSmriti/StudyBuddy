import { useTasks } from "../../context/TaskContext";
import TaskITem from "./TaskItem";

function TodayTasks() {
    const{tasks} = useTasks();
    return (
        <>
        {tasks.slice(0,4).map(task => (
            <TaskITem key={task.id} task ={task} />
        ))}
        </>
    );
    
};
export default TodayTasks;