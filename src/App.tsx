import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import {BuyingsList} from "./components/BuyingsList";
import {NewBuyingForm} from "./components/NewBuyingForm";
import {IBuying} from "./components/Buying";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
    },
}))

function App() {
    const classes = useStyles();
    const [isCreate, setIsCreate] = useState(false)

    function Create(){
        setIsCreate(true);
    }

    function Close(){
        setIsCreate(false);
    }

    function dialogHandler(){
        setIsCreate(false);
    }

    return (
        <Container maxWidth="sm">
            <Typography className={classes.button} variant="h2" gutterBottom>
                Список покупок
            </Typography>
            <BuyingsList/>
            <Button onClick={Create} className={classes.button} variant="contained" color="primary" autoFocus> Создать </Button>
                <Dialog open={isCreate} onClose={Close}
            aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"/>
                <DialogContent>
                    <NewBuyingForm dialogHandler={dialogHandler}/>
                </DialogContent>
                <DialogActions>
                <Button onClick={Close} color="primary" autoFocus>
                    Закрыть
                </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default App;
