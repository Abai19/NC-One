import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Item, useGlobalState} from "../../App";
import ReactImageMagnify from 'react-image-magnify';



import './singleProduct.scss'
import Filled from "../../icons/filled.svg";
const SingleProduct = () => {
    const [singleData,setSingleData]= useState<Item>();
    const {id}= useParams();
    useEffect(()=>{
        fetch('https://testbackend.nc-one.com/image?id='+ id)
            .then(response=> response.json())
            .then(data=> setSingleData(data))
    },[])
    const [data] = useGlobalState('arr');
    const [fav, setFav] = useGlobalState('fav');

    const makeFav = (event: React.MouseEvent<HTMLDivElement>)=>{
        const id  = Number(event.currentTarget.dataset.id);
        const newItem : Item  = data.find(f=> f.id===id)!;

        const someItem : Item | undefined = fav.find(i=>i.id ===newItem.id);
        if(someItem===undefined){
            setFav(current=>[...current,newItem]);
        }
        else {
            setFav(current=>current.filter(s=> s.id!== someItem.id));
        }
    }
    const checkFav = (id : number)=>{
        const item= fav.find(c=>c.id=== id);
        console.log(item)
        return !item;
    }
    return (
        <div>{
            singleData?
                <div className="blockSingle">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: `https://testbackend.nc-one.com${singleData.src}`
                        },
                        largeImage: {
                            src: `https://testbackend.nc-one.com${singleData.src}`,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                    {/*<img src={`https://testbackend.nc-one.com${data.src}`} alt=""/>*/}
                    <div>


                    <p className="singleItemName">{singleData.name}

                    </p>
                    <div className="singlePriceBlock">
                        <p>${singleData.price}</p>
                        <img src={Filled} className={ checkFav(singleData.id) ? 'activeFav' : 'disActiveFav' } alt="" onClick={makeFav} data-id={singleData.id}/>

                    </div>
                    </div>
                </div>
                :
                ""
        }


        </div>
    );
};

export default SingleProduct;