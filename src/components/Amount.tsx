import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sum: {
        marginTop: "5px"
    }
}));

type AmountProps = {
    value: Number;
}

export const Amount = ({value}: AmountProps) => {
    const classes = useStyles();

    return <>    
        <Typography variant="h5" component="h2" className={classes.sum}>
            Сумма: {value.toFixed(2)}
        </Typography>
    </>;
}