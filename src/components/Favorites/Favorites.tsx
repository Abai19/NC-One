import React from 'react';
import './favorites.scss'
import {Item, useGlobalState} from "../../App";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";
import Filled from "../../icons/filled.svg";
import Card from "@mui/material/Card";


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
                                    {/*<Icon onClick={makeFav} data-id={i.id}></Icon>*/}
                                </p>
                                {/*<button>sadas</button>*/}
                            </div>
                    </div>
                    )
                )
            }
        </div>
    );
};

export default Favorites;