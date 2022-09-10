import "./Modal.css";
import { useState } from "react"
import { Project } from "./FolderView";

type EditProjectProps = {
    showModal: (on: boolean) => void;
    onUpdateProject: (project: Project) => void
    project: Project
}

export const EditProject = (props: EditProjectProps) => {
    const { showModal, project, onUpdateProject } = props
    const [name, setName] = useState<string>(project.name || '')

    const UpdateProject = async () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        };
        const response = await fetch('http://127.0.0.1:8000/api/updateProject/' + project.id, requestOptions);
        const results = await response.json();
        onUpdateProject({...project,name})
    }
    const handleChange = (event: any) => {
        setName(event.target.value);
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            showModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <p>edit  your folder now !</p>


                </div>
                <div className="body">
                    Folder Name : <input type="text " defaultValue={""} className="folderinput" placeholder="project name" value={name} onChange={handleChange} />

                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            showModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button onClick={UpdateProject}>Continue</button>
                </div>
            </div>
        </div>
    );

}