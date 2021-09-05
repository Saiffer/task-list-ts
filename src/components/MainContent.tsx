import React, { Fragment } from "react";
import SelectList from "./SelectList";
import {useSelector} from 'react-redux'
import AddNewTask from "./AddNewTask";
import { RootState } from "../store/store";
import Tasks from "./Tasks";


const MainContent: React.FC = () => {

    const selectedList = useSelector((state: RootState) => state.list.selectedList)
 
    return(
        <div className="column is-9">
            <div className="box">
                <SelectList />
                {
                    selectedList &&
                    <>
                        <AddNewTask list={selectedList} />
                        <hr />
                        <Tasks tasks={selectedList.tasks}/>
                    </>
                }   
            </div>
        </div>
    );

}

export default MainContent