import { Box, Button, Typography } from '@mui/material'
import { React, useState } from 'react'

const Todo = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [write, setWrite] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    const submitNote = (event) => {
        addNote(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
        setWrite(false);
    }

    const divClicked = () => {
        setWrite(true);
    }


    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Box
                style={{
                    backgroundColor: '#F5F9F9',
                    height: '70vh',
                    padding: '2rem',
                    width: '18vw',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography>To do</Typography>
                <Button style={{
                    marginTop: '1rem',
                    backgroundColor: '#ECF3F3',
                    color: '#329C89',
                    fontSize: '1.5rem',
                    borderRadius: '7px',
                    padding: '0'
                }}
                    onClick={divClicked}
                >+</Button>
                {write && (
                    <div>
                        <input
                            name="title"
                            onChange={handleChange}
                            value={note.title}
                            placeholder="Title"
                        />
                        <textarea
                            onClick={divClicked}
                            name="content"
                            onChange={handleChange}
                            value={note.content}
                            placeholder="Take a note..."
                            rows={write ? 3 : 1}
                        />
                        <Button onClick={submitNote}>+</Button>
                    </div>

                )}
                {notes.map((noteItem, index) => {
                    return (
                        <div>
                        <h4>{noteItem.title}</h4>
                        <p>{noteItem.content}</p>
                        </div>
                        // <Note
                        //     key={index}
                        //     id={index}
                        //     title={noteItem.title}
                        //     content={noteItem.content}
                        //     onDelete={deleteNote}
                        // />
                        
                    );
                })}
            </Box>
        </div>
    )
}

export default Todo