 
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Collection = () => {

    const collection = JSON.parse(localStorage.getItem('collections'))
    console.log(collection)

 

    return (
        <>
            {/* <Box sx={{display:'flex', flexDirection:'row', gap:'1rem', overflow:'scroll'}}> */}
            <Box sx={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '20px', overflow: 'hidden'}}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
            >
                    {collection.map((item, index) => (
                         <SwiperSlide key={item.id}>
                        <Card sx={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 440 }}
                                image={item.imagen_1}
                                title="product"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.descripcion}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        </SwiperSlide>
                    ))}
              </Swiper>
            </Box>



        </>
    )
}

export default Collection