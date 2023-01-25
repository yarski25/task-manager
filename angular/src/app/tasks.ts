import { ITask } from "./interfaces/ITask";

export const TASKS: ITask[] = [
    {
        id: 1,
        text: 'Make a copies of documents',
        day: 'December 10th at 1:00 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Take a lunch break',
        day: 'December 10th at 2:00 pm',
        reminder: false
    },
    {
        id: 3,
        text: 'Play game',
        day: 'December 10th at 3:00 pm',
        reminder: true
    }
]