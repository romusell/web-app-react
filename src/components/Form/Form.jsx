import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {

    useEffect(()=>{
        tg.ready(); 
        },[]);


    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback( ()=>{
             const data = {
                country,
                street,
                subject
             } 
            tg.sendData(JSON.stringify(data)) 
    },[country,street,subject]);
    
    useEffect( ()=>{
      tg.onEvent('mainButtonClicked', onSendData);
      return () =>{
        tg.offEvent('mainButtonClicked', onSendData);
      }          
    },[onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Відправити данні'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])  

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>В ведіть данні</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Країна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Вулиця'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицє</option>
                <option value={'legal'}>Юр. лицє</option>
            </select>
        </div>
    );
};

export default Form;