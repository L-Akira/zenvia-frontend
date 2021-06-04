import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Header, Input } from '../../components';
import api from '../../services/api';

import './styles.css'; 

function Withdraw() {
    const [amount, setAmount] = useState('10');
    const [isValid, setIsValid] = useState(true);
    const [apiError, setApiError] = useState(false);

    const history = useHistory();

    function handleInput(e: ChangeEvent<HTMLInputElement>): void {
        const { value, maxLength, max, min } = e.target;
        const maxAmount = Number(max);
        const minAmount = Number(min);
        let typedAmount;

        if(value.length > maxLength)
            typedAmount = Number(value.slice(0, maxLength));

        typedAmount = typedAmount || Number(value);

        if(typedAmount < minAmount)
            typedAmount = minAmount;

        if(typedAmount > maxAmount)
            typedAmount = maxAmount;
        
        setAmount(typedAmount.toString());
    }

    async function handleConfirmButton(): Promise<void> {
        if(Number(amount) < 10){
            setApiError(false);
            return setIsValid(false);
        }
            

        setIsValid(true);

        try {
            const response = await api.get(`/atm/withdraw?amount=${amount}`);
            setApiError(false);
            const { cash } = response.data.result;
            history.push('/withdraw/result', cash)
        } catch (err) {
            setApiError(true);            
        }
    }

    return (
        <div id="page-withdraw">
            <Header />

            {!isValid && <p className="alert">*O valor minimo do saque é de R$10,00</p>}
            {apiError && <p className="alert">*Apenas multiplos de 10 podem ser processados</p>}

            <div className="content">
                <Input 
                    name="amount" 
                    min="0" 
                    max="999999990" 
                    maxLength={9}
                    type="number" 
                    label="Insira o valor:"
                    value={amount}
                    onChange={(e)=>handleInput(e)}
                />
                <Button 
                    text="Confirmar" 
                    onClick={handleConfirmButton}
                />
            </div>
        </div>
    )
}

export default Withdraw;