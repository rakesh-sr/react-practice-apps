import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"
const AddUser = (props) => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({ title: "Invalid Input", message: "Please enter valid name and age (non - empty values)" });
            return
        }


        if (+age < 1) {
            setError({ title: "Invalid Input", message: "Please enter valid age (> 0)" });

            return
        }
        props.onAddUser(userName, age);
        console.log(userName, age);
        setUserName('');
        setAge('');
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);

    }

    const errorHandler = () => {
        setError(null);
    }


    return (

        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="userName">UserName</label>
                    <input id="userName" type="text" onChange={userNameChangeHandler} value={userName}></input>
                    <label htmlFor="age">Age (in Years)</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler} ></input>
                    <Button type="submit">Add User</Button>

                </form>
            </Card>
        </div>
    )

}

export default AddUser;