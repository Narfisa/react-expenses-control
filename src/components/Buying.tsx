import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NewBuyingForm} from "./NewBuyingForm"

export interface IBuying {
    name: string;
    cost: number;
}

type BuyingProps = {
    buying: IBuying;
    index: number;
    deleteHandler: Function;
    formHandler: Function;
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
}));

export const Buying = ({buying, index, deleteHandler, formHandler}: BuyingProps) => {
    const classes = useStyles();
    const [edit, setEdit] = useState(false)

    function Edit(){
        setEdit(true);
        formHandler(buying, false)
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
            <Button size="small" onClick={(e) => deleteHandler(index)}>Delete</Button>
            <Button size="small" onClick={Edit}>Edit</Button>
        </CardActions>
        { edit && <NewBuyingForm formHandler={formHandler}></NewBuyingForm> }
    </Card>;
};
