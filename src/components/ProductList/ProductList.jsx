import React, { useEffect, useCallback, useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
const telegram = window.Telegram.WebApp;
const userId = telegram.initDataUnsafe.user;

const products = [
    {
        id:"uT1",
        title:"Провулками київського Кудрявця",
        description: "Дізнайтеся про літописні місця Києва та твори багатьох видатних киян – архітекторів, художників, письменників і акторів, які мешкали в цій місцевості у різні часи.",
        type :"withHearing",
        type1 :"withVisual",
        type2 :"limitedMobility",
        BarrierFree :"Так",
        length :"120 хв.",
        price: 1000, 
        language :"українська",
        img :"img"
   },
   {
     id :"uT2",
     title:"Прогулянка театральним Києвом",
     description :"Ви дізнаєтеся, як і коли виникли театральні традиції Києва, про перші театри, їхніх корифеїв і сучасних майстрів сцени.",
     type :"withHearing",
     type1 :"",
     type2 :"",
     BarrierFree :"Так",
     length :"120 хв.",
     price: 1000,
     language :"українська",
     img :"imgbig.jpg"
 },
 {
     id :"uT3",
     title:"Все починається з Університету",
     description :"Під час екскурсії ви дізнаєтеся, як Університет дав початок розбудові нового кварталу Києва, а також познайомитеся з історією створення навколо Червоного корпусу чудового парку та ботанічного саду.",
     type :"withHearing",
     type1 :"withVisual",
     type2 :"limitedMobility",
     BarrierFree :"Так",
     length :"120 хв.",
     price: 1000,
     language :"українська",
     img :"imgbig.jpg"
 },
 {
     id:"uT4",
     title:"Шлях української державності",
     description :"Під час екскурсії ви почуєте розповідь про боротьбу за українську державність часів Гетьманщини, дізнаєтеся про державні утворення України, які засновувалися століття тому, а також ознайомитеся з історією проголошення Незалежності України та боротьби за її майбутнє в новітній історії.",
     type :"withHearing",
     type1 :"",
     type2 :"",
     BarrierFree :"Так",
     length :"120 хв.",
     price: 1000,
     language :"українська",
     img:"imgbig.jpg"
 },
 {
     id:"uT5",
     title:"Конституція – шляхами творення",
     description :"Під час екскурсії ви дізнаєтесь, якими були перші закони давньоруської держави та Конституція Війська Запорізького, Універсали УНР, та як приймався Основний Закон незалежної України.",
    type:"withHearing",
    type1:"",
    type2:"",
    BarrierFree:"Так",
    length:"120 хв.",
    price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 },
 {
    id:"uT6",
    title:"Меценати Києва",
    description:"Під час екскурсії ви почуєте про традиції благодійництва та відомі родини меценатів Києва, які жили у місті більше століття тому, дізнаєтеся про їхній внесок у збереження музейних цінностей, а також про те, як власна оселя могла стати домом молитви чи музеєм.",
    type: "withHearing",
    type1:"",
    type2:"",
    length:"120 хв.",
    price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 },
 {
    id:"uT7",
    title:"Як козаки та магістрат на Подолі жили",
    description:"Під час екскурсії ви відкриєте таємниці середньовічного Подолу та дізнаєтеся про традиції Київського самоуправління.",
    type:"withHearing",
    type1:"",
    type2:"",
    Barrierfree:"Так",
    length:"120 хв.",
    price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 },
 {
    id:"uT8",
    title:"Таємниці града Ярослава",
    description:"Під час екскурсії ви довідаєтеся про оборонні споруди навколо Києва за часів правління князя Ярослава Мудрого, розкриєте таємниці Софійського та Михайлівського соборів і ще багато цікавих фактів про стародавній Київ.",
    type:"withHearing",
    type1:"",
    type2:"",
    length:"120 хв.",
    price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 },
 {
     id:"uT9",
    title:"Таємниці града Володимира",
    description:"Під час екскурсії ви почуєте про розбудову Києва та будівництво оборонних споруд князем Володимиром, дізнаєтеся про зведення першого кам’яного храму Київської держави – Десятинної церкви, а також розкриєте таємниці Володимирської гірки.",
    type:"withHearing",
    type1:"withVisual",
    type2:"",
    length:"120 хв.",
    price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 },
 {
    id:"uT10",
    title:"Київ незламний",
    description:"Прогулянка ознайомить містян і гостей столиці з історією воєнного Києва – з часів Другої світової війни і до повномасштабного вторгнення.",
    type:"withHearing",
    type1:"withVisual",
    type2:"limitedMobility",
    length:"120 хв.",
     price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 },
  {
    id:"uT11",
    title:"Київ історичний",
    description:"Познайомтеся з історією стародавнього Києва, його пам’ятками, архітектурою, історичним центром і Подолом.",
    type:"withHearing",
    type1:"withVisual",
    type2:"",
    length:"120 хв.",
    price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 },
 {
    id:"uT12",
    title:"Київ хрещатий",
    description:"Познайомтеся із головною вулицею столиці, її видатними об'єктами, довідайтеся про відомих особистостей, які свого часу жили на Хрещатику та відігравали важливу роль у розвитку Києва в цілому та його центральної вулиці зокрема.",
    type:"withHearing",
    type1:"withVisual",
    type2:"limitedMobility",
    length:"120 хв.",
    price: 1000,
    language:"українська",
    img:"imgbig.jpg"
 }
 ]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
   
    const [addedItems, setAddedItems] = useState([]);
    const {tg,queryId} = useTelegram();
    
    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
            userId,
        }  //'http://localhost:443/web-data'
        fetch('http://34.36.240.165:80/web-data', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data, "hello")
        })
        
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

 

export default ProductList; 

