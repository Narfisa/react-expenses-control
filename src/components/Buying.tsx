import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { NewBuyingForm} from "./NewBuyingForm"
import { useDispatch } from 'react-redux';
import { actions } from '../store/byingSlice';

export interface IBuying {
    id: number;
    name: string;
    cost: number;
    isDone: boolean;
}

type BuyingProps = {
    buying: IBuying;
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
}));

export const Buying = ({buying}: BuyingProps) => {
    const classes = useStyles();
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()

    function Edit(){
        setEdit(true);
    }

    function Close(){
        setEdit(false);
    }

    function saveHandler() {
        setEdit(false);
    }

    function deleteHandler(){
        dispatch(actions.delete(buying.id));
    }

    function handleChange(){
        dispatch(actions.switchDone(buying.id));
    }

    return <Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h2">
            <Checkbox
                checked={buying.isDone}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
                {buying.name}
            </Typography>
            <Typography variant="body2" component="p">
                {buying.cost} р.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" className="delete" onClick={(e) => deleteHandler()}>Delete</Button>
            <Button size="small" className="edit" onClick={Edit}>Edit</Button>
        </CardActions>
        <Dialog open={edit} onClose={Close}
        aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"/>
            <DialogContent>
                <NewBuyingForm dialogHandler={saveHandler} editParam={buying} index={buying.id}/>
            </DialogContent>
            <DialogActions>
            <Button onClick={Close} color="primary" autoFocus>
                Закрыть
            </Button>
            </DialogActions>
        </Dialog>
    </Card>;
};
