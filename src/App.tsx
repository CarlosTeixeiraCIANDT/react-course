import React, { useEffect, useState } from "react";
import { NewTask } from "./components/NewTask/NewTask";
import { Tasks } from "./components/Tasks/Task";
import { useHttp } from "./hooks/use-http";

function App() {
    const [tasks, setTasks] = useState<any[]>([]);

    const { isLoading, error, sendRequest: fetchTasks } = useHttp();

    useEffect(() => {
        const transformTasks = (tasksObj: any) => {
            const loadedTasks = [];

            for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
            }

            setTasks(loadedTasks);
        };

        fetchTasks({ url: "url here" }, transformTasks);
    }, [fetchTasks]);

    const taskAddHandler = (task: any) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export { App };
