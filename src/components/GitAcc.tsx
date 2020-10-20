import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { getGitHub, getStatus, ActionValue, getResult } from "../store/gitSlice";
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root: {
        margin: theme.spacing(2),
    },
}));

export const GitAcc = () => {  
    const dispatch = useDispatch();
    const classes = useStyles();
    const [value, setValue] = useState('');
    const status = useSelector(getStatus);
    const result = useSelector(getResult);

    function handleGetGit() {
        dispatch(getGitHub(value));
    }

    return <>
        { status === ActionValue.DONE && ( <>
            <span font-color="green">Hello,{result.name}!</span>
            <img src={result.avatar_url}/>     
        </>)}
        { status === ActionValue.ERROR && <span font-color="red">Error</span> }
        { status === ActionValue.PROCESS && <span font-color="orange">In processing</span> }
        <Card className={classes.root}>
            <CardContent>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        value={value}
                        label="Название товара"
                        onChange={event => setValue(event.target.value)}
                        inputProps={{className: "buying-name"}}
                    />
                    <Button variant="contained" color="primary" onClick={handleGetGit}>
                        Сохранить
                    </Button>
                </form>
            </CardContent>
        </Card>
    </>;
}
