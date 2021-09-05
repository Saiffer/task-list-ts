import { ADD_LIST, ADD_TASK, DELETE_LIST, DELETE_TASK, GET_LISTS, GET_LIST_BY_ID, List, ListAction, SET_LISTID_TO_DELETE, SET_LIST_TO_EDIT, SET_SELECTED_LIST, SET_TASK_TO_DELETE, SET_TASK_TO_EDIT, Task, UNSET_TASK_TO_DELETE, UNSET_TASK_TO_EDIT, UPDATE_LIST, UPDATE_TASK } from "../types";

export const addList = (list: List): ListAction => {
    return {
        type: ADD_LIST,
        payload: list
    }
}

export const getLists = ():ListAction => {
    return {
        type: GET_LISTS
    }
}

export const getListById =(id: string):ListAction => {
    return {
        type: GET_LIST_BY_ID,
        payload: id
    }
}

export const setListIdToDelete = (id: string): ListAction => {
    return {
        type: SET_LISTID_TO_DELETE,
        payload: id
    }
}

export const setListToEdit = (id: string): ListAction => {
    return {
        type: SET_LIST_TO_EDIT,
        payload: id
    }
}

export const setSelectedList = (id: string): ListAction => {
    return {
        type: SET_SELECTED_LIST,
        payload: id
    }
}

export const deleteList = (id: string): ListAction => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}

export const updateList = (id: string, name: string): ListAction => {
    return {
        type: UPDATE_LIST,
        payload: {
            id: id,
            name: name
        }
    }
}

export const addTask = (task: Task, list:List): ListAction => {
    return {
        type: ADD_TASK,
        payload: {
            task: task,
            list: list
        }
    }
}

export const setTaskToDelete = (task: Task, list:List): ListAction => {
    return {
        type: SET_TASK_TO_DELETE,
        payload: {
            task: task,
            list: list
        }
    }
}

export const unSetTaskToDelete = (): ListAction => {
    return {
        type: UNSET_TASK_TO_DELETE
    }
}

export const deleteTask = (task: Task, list: List): ListAction => {
    return {
        type: DELETE_TASK,
        payload: {
            task: task,
            list: list
        }
    }
}

export const setTaskToEdit = (task: Task, list: List): ListAction => {
    return {
        type: SET_TASK_TO_EDIT,
        payload: {
            task: task,
            list: list
        }
    }
}

export const unSetTaskToEdit = (): ListAction => {
    return {
        type: UNSET_TASK_TO_EDIT
    }
}

export const updateTask = (taskId: string, taskName: string, taskState: boolean, list: List): ListAction => {
    return {
        type: UPDATE_TASK,
        payload: {
            taskId,
            taskName,
            taskState,
            list
        }
    }
}





