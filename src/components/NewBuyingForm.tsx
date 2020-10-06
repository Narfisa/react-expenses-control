import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { IBuying } from './Buying';
import { useDispatch } from 'react-redux';
import { actionAdd } from '../store/store';
import { actionChange} from '../store/store';

interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
    const {inputRef, onChange, ...other} = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            suffix="р"
        />
    );
}


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

type NewBuyingFormProps = {
    editParam?: IBuying;
    index?: number;
    dialogHandler: Function;
}

export const NewBuyingForm = ({editParam, dialogHandler, index}: NewBuyingFormProps) => {
    const classes = useStyles();
    const [name, setName] = useState(editParam ? editParam.name : '');
    const [cost, setCost] = useState(editParam ? editParam.cost : 0);
    const [showMsg, setMsg] = useState(false);
    const dispatch = useDispatch();

    function handleSaveButton() {
        if ((name !== '') && (cost !== 0)) {     
            dialogHandler()
            setName('');
            setCost(0);
            setMsg(false);
        }
        else {
            setMsg(true);
        }
        if (index === undefined){      
            dispatch(actionAdd({name, cost, isDone: false})) 
        }
        else {            
            dispatch(actionChange({name, cost, isDone: false}, index))
        }
    }

    return <Card className={classes.root}><CardContent>
        { showMsg && <span font-color="orange">Пожалуйста, заполните поля ниже...</span> }
        <form className={classes.form} noValidate autoComplete="off">
            <TextField
                value={name}
                label="Название товара"
                onChange={event => setName(event.target.value)}
                inputProps={{className: "buying-name"}}
            />
            <TextField
                value={cost}
                label="Цена"
                onChange={event => setCost(Number(event.target.value))}
                InputProps={{
                    inputComponent: NumberFormatCustom as any,
                }}
                inputProps={{className: "buying-cost"}}
            />
            <Button variant="contained" color="primary" onClick={handleSaveButton}>
                Сохранить
            </Button>
        </form>
    </CardContent></Card>;
}
