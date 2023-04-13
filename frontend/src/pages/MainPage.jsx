import React, {useEffect, useState} from 'react'
import MyDropDownMenu from "../components/MyDropDownMenu";


function MainPage() {
    const [acccs, setAcccs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/accounts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAcccs(data);
            });
    }, []);
    return (
        <div style={{padding: 10, display: 'flex', justifyContent: 'center'}}>
            <MyDropDownMenu items={acccs}/>
        </div>
    )
}

export default MainPage