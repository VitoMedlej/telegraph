import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Autoplay, Pagination} from "swiper";
import UserReview from './UserReview.tsx/UserReview';



// const Clients = [
//     {id:1,
//         description:``,
//         name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
//         {id:2,
//             description:``,
//             name:'',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
//         {id:3,
//             description:``,
//             name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

// ]


const Testimonial = () => {
    const tests = [
        {
            title: 'Deserves a 5 stars rating and more.',
            reviewer:'“(Omar, Founder/CEO/Lead Interior Architect )',
            description : `Very professional and understanding.
             Prompt reply and fast delivery. Moe deserves a 5 stars rating and more.`
        },
        {
            title: 'Very professional and responsive. Highly recommended!',
            reviewer:'“(Fady, Electronics Relatiler)',
            description : `Excellent service! My eCommerce site looks fantastic 
            and works perfectly. They are very
             professional and responsive. Highly recommended!`
        },
        
        {
            title: 'Amazing assistance',
            reviewer:'“(Rudy, Pet Business Owner)',
            description : `Amazing assistance and fast delivery with customization, always ready to help as soon as possible in case of any bug`
        },
        {
            title : `I just love it! -`,
            reviewer:`“(Zekra Advertising Specialist)`,
            description : `We’re a local business and most of our clients are 
            Lebanese. What I love about
             the site is that it supports both arabic and english at the same time.`
        },
        {
            title :`I knew I made the right choice - `,
            reviewer:`”(Yehya, Founder of Teentops)`,
            description : `I was so impressed with the shop they built for me - it was so easy 
            to use! And when they built my 
            Android app, I knew I made the right choice. No regrets at all.
            `
        },
        
        
        {
            title :`They made it work perfectly - `,
            reviewer:`”(Powerhouse’s Owner)`,
            description : `OnBeirut really came through for me. I was worried that my huge inventory 
            would be too much for the site to handle, 
            but they made it work perfectly. I’m so grateful for them.`
        }
       
    ]
  return (
    <Box className=' flex wrap center ' sx={{width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'6em',textAlign:'center'}}>
                <Typography component='h1' sx={{color:"black",fontWeight:'700',fontSize:{xs:'2em',sm:'3em',md:'3.5em'}}}>
                What Our Clients Say
                </Typography>
                <Typography sx={{color:"black",fontWeight:'200',fontSize:{xs:'1em',sm:'1.2em'},mb:2}} className=''>
                  Authentic Reviews From Our Clients
                </Typography>
            </Box>
       <Box
            sx={{
            
            py: {
                xs: '.85em',
                sm: '2em'
            },
            width: '100%',
            maxWidth: 'lg',
            margin: '0em auto',
            mb:'6em',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>

            <Swiper
                pagination={{
                clickable: true
            }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                navigation={true}
                spaceBetween={10}
                slidesPerView={1}
                slidesPerGroup={1}
                modules={[FreeMode, Autoplay, Pagination]}
              >

                {tests.map((item ) => {
                    if (!item.title) 
                        return
                    return <SwiperSlide
                        style={{
                        marginRight: '0 !important'
                    }}
                        key={item.title}>
                         <UserReview title={item.title} reviewer={item.reviewer} description={item.description}/>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>
    </Box>
  )
}

export default Testimonial
