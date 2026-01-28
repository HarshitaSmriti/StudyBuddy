import { createContext,useContext,useEffect,useState } from "react";
const TaskContext = createContext();
export function TaskProvider({children}) {
    const[tasks,setTasks] = useState(()=> {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }
    );
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);

    const addTask = ({title,due,priority}) => {
        const newTask = {
            id:Date.now(),
            title,
            due,
            priority,
            completed:false,
            createdAt: new Date().toISOString(),
        };
        setTasks((prev) => [...prev, newTask]);
    };
    const toggleTask = (id) => {
        setTasks((prev) =>
        prev.map((t)=>
        t.id === id ? {...t,completed: !t.completed} :t));
    };

    return (
        <TaskContext.Provider value={{tasks,addTask,toggleTask}}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTasks = () => useContext(TaskContext);