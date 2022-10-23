import React from 'react';

import './productList.scss'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Filled from '../../icons/filled.svg'
import {Item, useGlobalState} from "../../App";
import {Link} from "react-router-dom";

const ProductList = () => {
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
     console.log(fav)
    return (
        <div className="listItems">
            {data.map(i=> (

                    <Card sx={{ maxWidth: 345 }} key={i.id} className="singleItem">

                        <Box>
                            <Link to={`/product/${i.id}`}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://testbackend.nc-one.com${i.src}`}
                                alt="green iguana"
                            />
                            </Link>
                            <CardContent >
                                <Typography gutterBottom variant="h6">
                                    {i.name}
                                </Typography>
                                <Typography  variant="h6" className="blockPrice">
                                    ${i.price}
                                    <img src={Filled} className={ checkFav(i.id) ? 'activeFav' : 'disActiveFav' } alt="" onClick={makeFav} data-id={i.id}/>
                                </Typography>
                            </CardContent>
                        </Box>

                    </Card>

            ))}
        </div>
    );
};

export default ProductList;