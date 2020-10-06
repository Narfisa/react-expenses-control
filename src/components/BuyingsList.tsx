import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import {Buying} from "./Buying";
import { Amount } from "./Amount";
import { useSelector } from 'react-redux';
import { IStoreState, FilterValue} from '../store/store';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        backgroundColor: "#f0f0f0"
    }
}));

export const BuyingsList = () => {
    const classes = useStyles();
    const buyings = useSelector((state:IStoreState) => state.buyings.filter(x => {
        if (state.filter === FilterValue.DONE) {
            return x.isDone 
        }
        if (state.filter === FilterValue.UNDONE) {
            return !x.isDone 
        }
        return true;
    }));
    
    const sum = buyings
        .map((buying) => Number.parseFloat(buying.cost as any))
        .reduce((a, c) => a + c, 0);

    const items = buyings.map((buying) => <Buying key={buying.id} buying={buying}/>)

    return <>
        {items}        
        <Card className={classes.root}>
            <CardContent>
                <Amount value={sum}></Amount>
            </CardContent>
        </Card>
    </>;
}
