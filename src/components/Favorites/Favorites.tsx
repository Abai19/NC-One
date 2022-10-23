import React from 'react';
import './favorites.scss'
import {Item, useGlobalState} from "../../App";
import CardMedia from "@mui/material/CardMedia";
import Filled from "../../icons/filled.svg";

const Favorites = () => {
    const [data] = useGlobalState('arr');
    const [fav,setFav] = useGlobalState('fav');
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
    return (
        <div className="block">
            <p className="favoritesTitle">
                Favorites
            </p>
            {
                fav.map(f=>(
                    <div  key={f.id} className="itemBlockFav">

                            <CardMedia
                                component="img"
                                height="90"
                                image={`https://testbackend.nc-one.com${f.src}`}
                                alt="green iguana"
                                className="favImg"
                            />
                            <div >
                                <p  >
                                    {f.name}
                                </p>
                                <p   className="blockPrice">
                                    ${f.price}
                                    <img src={Filled} className='disActiveFav '  alt="" onClick={makeFav} data-id={f.id}/>
                                </p>
                            </div>
                    </div>
                    )
                )
            }
        </div>
    );
};

export default Favorites;