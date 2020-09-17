import React, {useState} from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {BuyingsList} from "./components/BuyingsList";
import {NewBuyingForm} from "./components/NewBuyingForm";
import {IBuying} from "./components/Buying";


function App() {
    const [buyings, setBuyings] = useState<IBuying[]>([]);

    function formHandler(newBuying: IBuying) {
        setBuyings([...buyings, newBuying]);
    }

    function deleteHandler(index: number) {
        buyings.splice(index,1);
        setBuyings([...buyings]);
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h2" gutterBottom>
                Список покупок
            </Typography>
            <BuyingsList buyings={buyings} deleteHanlder={deleteHandler}/>
            <NewBuyingForm formHandler={formHandler}/>
        </Container>
    );
}

export default App;
