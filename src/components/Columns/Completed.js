import { Box, Button, Input, Grid, TextField, Typography } from '@mui/material'
import { React, useState, useRef } from 'react'

const Completed = () => {
    const dragItem = useRef();
    const dragOverItem = useRef();
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

    const dragStarted = (e, ind) => {
        console.log("Drag Started")
        e.dataTransfer.setData("todoId", ind);
        dragItem.current = ind;
        console.log(e.target.innerHTML)
    }
    const draggingOver = (e, ind) => {
        console.log("Dragging over now")
        dragOverItem.current = ind;
        console.log(e.target.innerHTML);
    }
    const dragDropped = (e, ind) => {
        console.log("Dropped")
        const copyListItems = [...notes];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setNotes(copyListItems);
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
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Completed</Typography>
                    <Typography sx={{ background: '#ECF3F3', borderRadius: '7px', px: 1, color: '#329C89' }}>{notes.length}</Typography>
                </Grid>
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
                    <Box sx={{
                        background: '#FFFFFF',
                        border: '1px solid #DBDBDB',
                        boxShadow: '0px 0px 28px rgba(72, 174, 174, 0.07)',
                        borderRadius: '7px',
                        mt: 3,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Input
                            name="title"
                            onChange={handleChange}
                            value={note.title}
                            placeholder="Give your task a title"
                            disableUnderline
                            sx={{ mt: 2, ml: 2 }}
                        />
                        <TextField
                            multiline
                            onClick={divClicked}
                            name="content"
                            onChange={handleChange}
                            value={note.content}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        border: "none"
                                    }
                                }
                            }}
                            placeholder="Description..."
                            rows={2}
                            fullWidth
                            required
                        />
                        <Button sx={{ mr: 2, alignSelf: 'flex-end', mb: 2, fontSize: '1.2rem', borderRadius: '50%', maxWidth: '1rem', }} onClick={submitNote}>+</Button>
                    </Box>

                )}
                {notes.map((noteItem, index) => {
                    return (
                        <Box sx={{
                            background: '#FFFFFF',
                            border: '1px solid #DBDBDB',
                            boxShadow: '0px 0px 28px rgba(72, 174, 174, 0.07)',
                            borderRadius: '7px',
                            mt: 3,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                            draggable
                            onDragStart={e => dragStarted(e, index)}
                            droppable
                            onDragEnter={e => draggingOver(e, index)}
                            onDragEnd={e => dragDropped(e, index)}
                            key={index}
                        >
                            <Typography
                                variant='h6'
                                sx={{ mt: 2, ml: 2, color: '#21212' }}
                            >
                                {noteItem.title}
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={{ mt: 1, ml: 2, mb: 3, color: ' #6B6B6B' }}
                            >
                                {noteItem.content}
                            </Typography>
                        </Box>
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
        </div >
    )
}

export default Completed