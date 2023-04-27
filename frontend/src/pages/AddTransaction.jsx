import React, {useEffect, useState} from 'react'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


function AddTransaction() {

    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/accounts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAccounts(data);
            });
    }, []);


    const [tran, setTran] = useState({
        transactionType: "INCOME",
        amount: 0,
        account: null
    })


    return (
        <Form className="my-container">
            <FormGroup>
                <Label for="acc">
                    Select
                </Label>
                <Input
                    id="acc"
                    name="select"
                    type="select"
                >
                    <option>
                        acc1
                    </option>
                    <option>
                        acc2
                    </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="type">
                    Select
                </Label>
                <Input
                    id="type"
                    name="select"
                    type="select"
                    onChange={(event) => setTran({...tran, transactionType: event.target.value})}
                >
                    <option value="INCOME">
                        Пополнение
                    </option>
                    <option value="OUTCOME">
                        Расходы
                    </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="summ">
                    Сумма
                </Label>
                <Input
                    id="summ"
                    name="summ"
                    type="number"
                    onChange={(event) => setTran({...tran, amount: event.target.value})}
                />
            </FormGroup>
            <Button onClick={event => {
                event.preventDefault()
                fetch('http://localhost:8080/transactions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(tran)
                }).then(r => console.log(r))
            }}>
                Submit
            </Button>
        </Form>
    )
}

export default AddTransaction