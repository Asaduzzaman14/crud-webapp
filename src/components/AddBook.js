import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BookDataService from "../book.services";
import bookServices from "../book.services";


const defaultValues = {
    book: "",
    topic: "",
    note: "",
};

const AddBook = ({ id, setBookId }) => {


    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmitt = (event) => {
        event.preventDefault();
        console.log(formValues);

        BookDataService.addBooks(formValues);

    };


    const editHandler = async () => {
        const docSnap = await BookDataService.getBook(id);
        console.log("the record is :", docSnap.data());
        // setFormValues(docSnap)

    };

    useEffect(() => {
        console.log(id);
        if (id !== undefined && id !== '') {
            editHandler()
        }
    }, [id])


    return (
        <form onSubmit={handleSubmitt}>
            <Grid container alignItems="center" display={"grid"} justify="center" direction="column" rowSpacing={0} gridTemplateColumns="repeat(3, 1fr)" gap={1} sx={{ width: 800, padding: 4, marginTop: 2 }} >
                <Grid item>
                    <TextField
                        id="name-input"
                        name="book"
                        label="Book Name"
                        type="text"
                        value={formValues.book}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        id="name-input"
                        name="topic"
                        label="Topic"
                        type="text"
                        value={formValues.topic}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        id="name-input"
                        name="note"
                        label="Note"
                        type="text"
                        value={formValues.note}
                        onChange={handleInputChange}
                    />
                </Grid>


                <Button variant="contained" color="primary" type="submit" >
                    Submit
                </Button>

            </Grid>
        </form >
    );
};
export default AddBook;