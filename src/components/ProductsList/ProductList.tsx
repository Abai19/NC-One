import React, {useEffect} from 'react';
import {createGlobalState} from "react-hooks-global-state";
import './productList.scss'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Filled from './filled.svg'
interface Props {
    arr: Item[]
}
interface Item {
    id: number;
    price: number;
    name: string;
    src: string
}
const initialState: Props = { arr: [] };
const { useGlobalState } = createGlobalState(initialState);
const ProductList = () => {
    const [data, setData] = useGlobalState('arr');
    useEffect(()=>{
        fetch('https://testbackend.nc-one.com/image')
            .then(response => response.json())
            .then(data=> setData(data))
    },[])
    return (
        <div className="listItems">
            {data.map(i=> (
                    <Card sx={{ maxWidth: 345 }} key={i.id} className="singleItem">
                        <Box>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://testbackend.nc-one.com${i.src}`}
                                alt="green iguana"
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h6">
                                    {i.name}
                                </Typography>
                                <Typography  variant="h6" className="blockPrice">
                                    ${i.price}
                                    <img src={Filled} alt=""/>
                                </Typography>
                                    {/*<button>sadas</button>*/}
                            </CardContent>
                        </Box>
                    </Card>
            ))}
        </div>
    );
};

export default ProductList;