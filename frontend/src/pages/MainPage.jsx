import React, {useEffect, useState} from 'react'
import MyDropDownMenu from "../components/MyDropDownMenu";
import {Button, ButtonGroup} from "reactstrap";


function MainPage() {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/accounts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAccounts(data);
            });
    }, []);
    const trans = [
        {id: 1, type: "спорт", amount: 1000},
        {id: 2, type: "пополнение", amount: 2000},
        {id: 3, type: "продукты", amount: 3000},
        {id: 4, type: "транспорт", amount: 60},
        {id: 5, type: "кафе и рестораны", amount: 500},
    ]


    const [rSelected1, setRSelected1] = useState(1);
    const [rSelected2, setRSelected2] = useState(1);

    return (
        <div className="my-container">
            <MyDropDownMenu items={accounts}/>
            <ButtonGroup style={{width: "100%", marginTop: "20px"}}>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected1(1)}
                    active={rSelected1 === 1}
                >
                    Доходы
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected1(2)}
                    active={rSelected1 === 2}
                >
                    Расходы
                </Button>
            </ButtonGroup>
            <ButtonGroup style={{width: "100%", marginTop: "20px"}}>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected2(1)}
                    active={rSelected2 === 1}
                >
                    День
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected2(2)}
                    active={rSelected2 === 2}
                >
                    Неделя
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected2(3)}
                    active={rSelected2 === 3}
                >
                    Месяц
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected2(4)}
                    active={rSelected2 === 4}
                >
                    Год
                </Button>
            </ButtonGroup>
            <div className="w-100 mt-2">
                <div className="d-flex p-2">
                    <p style={{width:"60px"}}>номер</p>
                    <p>тип</p>
                    <p className="ms-auto">количество</p>
                </div>
                {
                    trans.map((tran, index) => (
                        <div className="d-flex border p-2 mb-3" key={tran.id}>
                            <p style={{width:"60px"}}>{index+1}</p>
                            <p>{tran.type}</p>
                            <p className="ms-auto">{tran.amount}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MainPage