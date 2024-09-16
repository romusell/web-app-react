import React, { useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = ()=>{

  const [country, setCountry ] = useState();   
  const [city, setCity] = useState();  
  const [samthing, setSamthing] = useState();
  const [subject, setSubject] = useState('physical');
  const {tg}= useTelegram();
  
  useEffect (() =>{
    tg.MainButton.setParams({
        text: "Відправити данні"
    },);
  }, []);

  useEffect(()=>{
      if(!country || !city){
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
  },[city,country]);
  
 const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const  onChangeCity =(e)=>{
    setCity(e.target.value);
  };

  const onChangeSamthing =(e)=>{
    setSamthing(e.target.value);
  };

  const onChangeSubject =(e)=>{
    setSubject(e.target.value);
  };
    return(
        <div className={'form'}>
         <h3>Введіть ваши данні</h3>

         <input 
            className={'input'} 
            type='text' 
            placeholder="{'Держава'}"
            value={country}
            onChange={onChangeCountry}
        />
         <input 
            className={'input'} 
            type='text' 
            placeholder="{'Вулиця'}"
            value={city}
            onChange={onChangeCity}
            />
         <input 
            className={'input'} 
            type='text' 
            placeholder="{'Щось'}"
            value={samthing}
            onChange={onChangeSamthing}
            />
         <select value={subject} onChange={onChangeSubject} className={'select'}>
            <option value={'physical'}>Фіз. лице</option>
            <option value={'legal'}>Юр. лице</option>
            <option></option>   
         </select>   
        </div>
    );
};

export default Form;