import CreateNewList from "./CreateNewList";
import Lists from "./Lists";


const SideBar: React.FC = () => {
    return(
        <div className="column is-3">
            <CreateNewList />
            <Lists />
        </div>
    );
}

export default SideBar