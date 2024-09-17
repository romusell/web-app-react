import React from "react";
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({ture, className,onAdd}) => {
    useEffect(()=>{
        tg.ready(); 
        },[]);
    const onAddHandler = () =>{
        onAdd(ture);
    };

    return(
    <div className={'ture' + className}>
         <div className={"img"}>{ture.picture}</div>
         <div className={"title"}>{ture.name}</div>
         <div className={"description"}>{ture.discription}</div>
         <div className={'price'}>
            <span>Ціна Єкскурсії <b>{ture.price}</b></span>
         </div>
         <Button className={'add-btn'} onClick={onAddHandler}>
           Додати в Кошик
         </Button>          
     </div>
    );
};

export default ProductItem;
