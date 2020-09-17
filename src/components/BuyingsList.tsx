import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import {Buying, IBuying} from "./Buying";
import { Amount } from "./Amount";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        backgroundColor: "#f0f0f0"
    }
}));

type BuyingsListProps = {
    buyings: IBuying[];
    deleteHanlder: Function;
    formHandler: Function;
}

export const BuyingsList = ({buyings, deleteHanlder, formHandler}: BuyingsListProps) => {
    const classes = useStyles();
    const sum = buyings
        .map(buying => Number.parseFloat(buying.cost as any))
        .reduce((a, c) => a + c, 0);

    const items = buyings.map((buying,index) => <Buying key={index} deleteHandler={deleteHanlder} formHandler={formHandler} index={index} buying={buying}/>)

    return <>
        {items}        
        <Card className={classes.root}>
            <CardContent>
                <Amount value={sum}></Amount>
            </CardContent>
        </Card>
    </>;
}
