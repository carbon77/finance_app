import React from 'react'


function Account() {

    const trans = [
        {id: 1, type: "основной", amount: 300000},
        {id: 2, type: "спорт", amount: 10000},
        {id: 3, type: "транспорт", amount: 5000},

    ]
    return (
        <div className="my-container">
            <h1>Счета</h1>
            <div className="d-flex w-100 justify-content-around my-5">
                <div className="d-flex flex-column align-items-center">
                    <img width={30} className="mx-auto" src="history.svg" alt=""/>
                    <p>история</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img width={30} src="add.svg" alt=""/>
                    <p>создать перевод</p>
                </div>
            </div>
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

export default Account