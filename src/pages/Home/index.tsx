import React from 'react';
import { useHistory } from 'react-router';
import { Button, Header, Text } from '../../components';

import './styles.css'; 

function Home() {
    const history = useHistory();

    function handleWithdrawButton(): void {
        history.push('/withdraw');
    }

    return (
        <div id="page-home">
            <Header />

            <div className="content">
                <Text>Clique no botão abaixo para sacar dinheiro:</Text>
                <Button text="Sacar" onClick={handleWithdrawButton} />
            </div>
            
        </div>
    )
}

export default Home;