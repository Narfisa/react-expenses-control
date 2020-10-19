import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import {Buying, IBuying} from "./Buying";
import { Amount } from "./Amount";
import { useSelector } from 'react-redux';
import { getFilteredList} from '../store/byingSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        backgroundColor: "#f0f0f0"
    }
}));

export const BuyingsList = () => {
    const classes = useStyles();
    const buyings = useSelector(getFilteredList);
    
    const sum = buyings
        .map((buying: IBuying) => Number.parseFloat(buying.cost as any))
        .reduce((a: number, c: number) => a + c, 0);

    const items = buyings.map((buying: IBuying) => <Buying key={buying.id} buying={buying}/>)

    return <>
        {items}        
        <Card className={classes.root}>
            <CardContent>
                <Amount value={sum}></Amount>
            </CardContent>
        </Card>
    </>;
}
