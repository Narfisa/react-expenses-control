import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { NewBuyingForm} from "./NewBuyingForm"
import { useDispatch } from 'react-redux';
import { actionDelete} from '../store/store';

export interface IBuying {
    name: string;
    cost: number;
}

type BuyingProps = {
    buying: IBuying;
    index: number;
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
}));

export const Buying = ({buying, index}: BuyingProps) => {
    const classes = useStyles();
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()

    function Edit(){
        setEdit(true);
    }

    function Close(){
        setEdit(false);
    }

    function saveHandler(obj: IBuying, index: number) {
        setEdit(false);
    }

    function deleteHandler(index: number){
        dispatch(actionDelete(index));
    }

    return <Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h2">
                {buying.name}
            </Typography>
            <Typography variant="body2" component="p">
                {buying.cost} р.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" className="delete" onClick={(e) => deleteHandler(index)}>Delete</Button>
            <Button size="small" className="edit" onClick={Edit}>Edit</Button>
        </CardActions>
        <Dialog open={edit} onClose={Close}
        aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"/>
            <DialogContent>
                <NewBuyingForm dialogHandler={saveHandler} editParam={buying} index={index}/>
            </DialogContent>
            <DialogActions>
            <Button onClick={Close} color="primary" autoFocus>
                Закрыть
            </Button>
            </DialogActions>
        </Dialog>
    </Card>;
};
