import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
     const [enteredUserName, setEnteredUsername] = useState('');
     const [enteredAge, setEnteredAge] = useState('');
     const [error, setError] = useState();

    const addUserHandler = event =>{
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'invalid input',
                message:'please check input'
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'invalid age',
                message:'age must but above 0'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = () =>{
        setError(null)
    }


return (
    <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirmError={errorHandler}/>}
    <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username:</label>
                <input id="username"
                       type="text"
                       value={enteredUserName} onChange={userNameChangeHandler}/>

                <label htmlFor="age">Age:</label>
                <input id="age"
                       type="number"
                       value={enteredAge}
                       onChange={ageChangeHandler}/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    </div>
)
};

export default AddUser;