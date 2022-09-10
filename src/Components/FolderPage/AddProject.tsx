import './Modal.css';
import { useState } from 'react';
import { Project } from './FolderView';

type AddProjectProps = {
  showModal: (on: boolean) => void;
  onAddProject: (project: Project) => void;
};
export const AddProject = ({ showModal, onAddProject }: AddProjectProps) => {
  const [name, setName] = useState<string>('');

  const onClick = async () => {
    const formData = new FormData();

    formData.append('name', name);

    let result = await fetch('http://localhost:8000/api/addproject', {
      method: 'POST',
      body: formData
    });

    onAddProject(await result.json());
  };

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
          <p>Create your folder now !</p>
        </div>
        <div className="body">
          Folder Name :{' '}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="folderinput"
            placeholder="project name"
          />
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
          <button onClick={onClick}>Continue</button>
        </div>
      </div>
    </div>
  );
};
