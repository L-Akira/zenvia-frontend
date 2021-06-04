import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Badge, Button, Header, Text } from '../../components';

import './styles.css'; 

function Result() {
    const [data, setData] = useState({} as any);
    const history = useHistory();

    useEffect(() => {
        const { state } = history.location as any;
        setData(state);
    }, [history.location])

    function backToHome() {
        history.push('/');
    }

    return (
        <div id="page-result">
            <Header />
            {!data && 
            <div className="content">
                <Text>Não ha valor para ser sacado</Text>
                <Button 
                    text="Voltar"
                    onClick={backToHome} 
                />
            </div>}

            {data && 
            <div className="content" id="content-result">
                <Text>Tipo e quantidade de notas a ser retidas respectivamente:</Text>

                <div className="cash">
                    <Badge text={`R$100 -> ${data["100x"]}x`} />
                    <Badge text={`R$50 -> ${data["50x"]}x`} />
                    <Badge text={`R$20 -> ${data["20x"]}x`} />
                    <Badge text={`R$10 -> ${data["10x"]}x`} />
                </div> 

                <Button 
                    text="Finalizar"
                    onClick={backToHome} 
                />
            </div>}
            
        </div>
    )
}

export default Result;
