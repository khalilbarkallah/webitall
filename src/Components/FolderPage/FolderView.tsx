import { Folder } from '../../types/types';
import { SearchBar } from '../Searchbar/SearchBar';
import { AiFillFolderAdd, AiOutlineFolderView, AiFillEdit } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { AddProject } from './AddProject';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { EditProject } from './EditProject';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import { ButtonGroup } from '@mui/material';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';

import './styles.css';
import { width } from '@mui/system';
export type Project = {
  id: number;
  name: string;
  updatedAt?: string;
};

type FolderViewProps = {
  Folders?: Folder[];
  OnFolder?: any;

  onSearch?: any;
};

export const FolderView = (props: FolderViewProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modallOpen, setModallOpen] = useState(false);
  const [selectedProject, setSelectedPeoject] = useState<Project>();

  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/api/list');
      const results = await response.json();
      setData(results);
    }
    const results = fetchData().catch(console.error);
  }, []);
  console.log('results', data);
  async function deleteOperation(item: any) {
    let result = await fetch('http://localhost:8000/api/delete/' + item.name, { method: 'DELETE' });
    result = await result.json();
    console.log(result);
    setData((prev) => prev.filter((proj) => proj.id !== item.id));
  }

  const onAddedProject = (project: Project) => {
    setData((prev) => [...prev, ...[project]]);
  };

  const onUpdateProject = (project: Project) => {
    const index = data.findIndex((proj) => proj.id === project.id);
    if (index > -1) {
      const tempData = [...data];
      tempData[index] = project;
      setData(tempData);
    }
  };

  const { Folders, OnFolder, onSearch } = props;
  return (
    <div className="main">
      <div className="flex-container">
        <div className="flex-item">
          {' '}
          <Typography variant="h6" component="div">
            <h3 style={{ color: 'black' }}>List of Projects</h3>
          </Typography>
        </div>
        <div className="flex-item">
          <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', width: 200 }}>
            Add Project
          </Button>{' '}
        </div>
        <div className="flex-item">
          {' '}
          <TextField
            label="Search Project"
            placeholder="Search Project"
            style={{ borderRadius: '2em', width: 200, marginTop: 20 }}
          />
        </div>
        x
      </div>
      {modallOpen && selectedProject && (
        <EditProject showModal={setModallOpen} project={selectedProject} onUpdateProject={onUpdateProject} />
      )}
      <List>
        {data.map((item: any) => {
          return (
            <ListItem
              className="aze"
              key={item.id}
              style={{ marginBottom: 4 }}
              secondaryAction={
                <IconButton style={{ color: 'red' }} aria-label="delete">
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                      onClick={() => {
                        deleteOperation(item);
                      }}
                    >
                      <DeleteIcon style={{ color: 'red' }} />
                    </Button>
                    <Button
                      onClick={() => {
                        onUpdateProject(item);
                      }}
                    >
                      <EditIcon style={{ color: 'green' }} />
                    </Button>
                    <Button>
                      <VisibilityIcon style={{ color: 'blue' }} />
                    </Button>
                  </ButtonGroup>
                </IconButton>
              }
            >
              <ListItemIcon>
                <FolderIcon style={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.id} />
            </ListItem>
          );
        })}
      </List>
      {/* {modalOpen && <AddProject showModal={setModalOpen} onAddProject={onAddedProject} />}
         <div className="header">
           
            <div className="bt1">

               <Button variant="contained" onClick={() => {
                  setModalOpen(true);
               }} >  <AiFillFolderAdd size="2em" color="white" /> Create Project </Button>


            </div>
            <div >
               <SearchBar OnSearch={onSearch} />
            </div>

         </div>
         <div className="row">
            <ul>

               {

                  data.map((item: any) => {

                     return (
                         
                        <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                          Icon with text
                        </Typography>
                        <div>
                          <List >
                           
                              <ListItem>
                                <ListItemIcon>
                                  <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Single-line item"
                                  secondary="azeaze"
                                />
                              </ListItem>,
                          
                          </List>
                        </div>
                      </Grid>


                        


                     );
                  }

                  )
               }


            </ul>
         </div>
         {modallOpen && selectedProject && <EditProject showModal={setModallOpen} project={selectedProject} onUpdateProject={onUpdateProject} />}
 */}
    </div>
  );
};
