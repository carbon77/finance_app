import React, {useEffect, useState} from 'react'
import MyDropDownMenu from "../components/MyDropDownMenu";


const Category = () => {
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
        {id: 1, type: "спорт", amount: 5000},
        {id: 2, type: "спорт", amount: 1990},
        {id: 3, type: "спорт", amount: 3100},
        {id: 4, type: "спорт", amount: 500},
        {id: 5, type: "спорт", amount: 788},
    ]
    return (
        <div className="my-container">
            <h1>Категория</h1>
            <h2>Спорт</h2>
            <div style={{alignSelf:"self-start", marginBottom:"10px"}}>
                <MyDropDownMenu items={accounts}/>
            </div>
            <h3 style={{alignSelf:"self-start"}}>10 марта 2023</h3>
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

export default Category