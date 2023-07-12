// import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Button, Container, Grid, Typography} from '@mui/material'
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap'
import { BsArrowUpRight} from 'react-icons/bs';


interface IPlanCard {
    price ?: number
    title : string;
    planFeatures : string[];
    description : string;
    bg?:string;
    height ?: {xs?:string,sm?:string,md?:string}
}
const PlanCard = ({
    price,
    title,
    height,
    description
    ,planFeatures,
    bg
}
:IPlanCard) => {
      
        
    return (
        <Box
        className='plan-card translate op0'
            sx={{
            position : 'relative',
            textAlign: 'left',
            backgroundImage:bg || 'linear-gradient(135deg,rgba(221,125,207,.1),hsl(288deg 100% 35% / 28%))',
            width: '100% !important',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            borderRadius: '7px',
            minHeight : height ? height : 'auto' 
        }}>
            <Box sx={{
            padding:{xs:'1.5em',sm:'7%'},

            }}>

            <Typography
                sx={{
                fontWeight: 'bold',
                fontSize: '2em',
            }}
                >
                    {title}
                </Typography>
            {/* <Typography
                sx={{
                    py:'.5em',
                    fontSize:{xs:'.9em',sm:'1em'},
                    color: '#707070'
            }}
                >
                {description}
                    
                </Typography> */}
             { price &&  <Typography
            component='h4'
                sx={{
                fontWeight: '500 !important',
                fontSize: '.9em'
            }}
                >
                Starting From:

                </Typography>}
            <Typography
            component='h4'
                sx={{
                fontWeight: '200 !important',
                fontSize: '3.5em'
            }}
                >
                   
                    {price ? `$${price}` : 'Custom '}
                </Typography>
            <Link
            // variant='v3'
            className='flex row center gap'
            href={`/?plan=${title}#contact`}
            // onClick={()=>router.push(`/?s=contact&plan=${title.en}`)}
       style={{
                // color:'black',
                textDecoration: 'none',
                marginTop: '1em',
                marginBottom: '2em',
            }}
                >
                   
                <Typography sx={{fontWeight: '400',}} component='h4'>
                Get Started
                </Typography>
                <BsArrowUpRight/>
                </Link>
            <Box className='list'>

                <Typography
                component='p'
                    sx={{
                        fontSize:{xs:'.9em',sm:'1em'},
                        color: '#707070'
                }}

                    >
                        Perks:
                    </Typography>

                <ul>
                    
                    {planFeatures.map((feature,idx:number)=>{

                       return <li  key={idx}>
                        <Typography sx={{fontSize:{xs:'.85em',sm:'auto'}}} component='p'>
                            {feature}
                        </Typography>
                    </li>
                    })}
                 
                   
                </ul>

            </Box>
            </Box>
        </Box>
    )
}


const Index = () => {
    useEffect(() => {
        gsap.to('.price-t1',{opacity:1,duration:.7,stagger:.25,scrollTrigger:{trigger:'.price-t1',start:'top 70%'}})
        gsap.to('.plan-card',{opacity:1,delay:.1,duration:.7,stagger:.25,scrollTrigger:{trigger:'.plan-card',markers:false,start:'top 70%'}})
    }, [])
    return (
        <Box 
        id='pricing'
        
        sx={{
            pb: '3em',
            my:'6em'
        }}>
            <Container
                className='mx'
                sx={{
                  maxWidth:'xl',
                pt: {
                    xs: '3em',
                    sm: '3.5em'
                },
                // px: '1em'
            }}>

<Typography component='h2' className='h2 clr2 '>
Flexible Service Plans For Everyone 
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            mt: 1.5
                        }}
                            className='clr2 '>
                            Note that pricing might differ significantly from one project to another, depending on your requirements.
                        </Typography>
               



            <Grid container sx={{
                    justifyContent: 'space-between',
                mt:{xs:'2.5em',sm:'4em'}}}>
                        <Grid xs={12} sm={5.9}  item>
                               <PlanCard
                                height={{xs:'100%',md:'540px'}}

                            //    price={0}
                               title='Custom Service Plan'
                               description={`Ideal for new businesses or individuals planning to start a new business. Helps build credibility.`}
                               planFeatures={['Any nb of Pages','Custom design','Full freedom plan','Low risk, high value investment','Simple CMS interface'
                               
                               ,'Custom Maintenance timeline']}
                               />
                     
                        </Grid>
                        <Grid xs={12} sm={5.9}
                        sx={{mt:{xs:2,sm:0}}}
                      
                        item>
                        <PlanCard
                               bg={'linear-gradient(135deg,rgb(51 121 255 / 10%),hsl(237deg 100% 50% / 45%))'}
                               height={{xs:'100%',md:'540px'}}

                               price={79.99}
                               title='Advanced Service Plan'
                               description={`Great for small-medium businesses that want to increase sales, customers, or building their online presence.`}
                               planFeatures={['4 Pages business website','Custom & advanced design','Couple of free image designs','SEO optimized','Free domain + hosting','Full content control','6 month maintenance']}
                               />
                        </Grid>
                        <Grid xs={12} sm={5.9}
                          sx={{mt:{xs:2}}}
                        item>
                          
                        <PlanCard
                        
                               price={249.99}
                               height={{xs:'100%',md:'540px'}}
                               title='Gold Service Plan'
                               bg={` linear-gradient(135deg,rgb(255 226 0 / 10%),hsl(53deg 100% 45% / 52%))`}

                               description={`This is a service plan designed for .`}
                               planFeatures={['Up to 16 pages of your choice',
                                `Premium & unique web design`,
                                `Full Search Engine Optimization`, 
                                `Free 2 years domain name + hosting`,
                                `Full custom admin dashboard`,
                                `Balanced site animations `,
                                `Best and latest coding technologies`,
                                `Google analytics integration`,
                                `Coded from scratch `,
                                'Up to 6 free image design ',
                                `Chatbot/Livechat optional Setup`,  
                                `Unlimited support & maintenance`,
                                `Long-term scalability and best performance`,]}
                            
                     
                            //    planFeatures={['8 pages web application ','Full control over design','Full SEO optimization','Free domain + hosting','Custom functionalities','Enterprise-level marketing data and analytics','12 month Support & maintenance']}
                               />
                        </Grid>

<Grid xs={12} sm={5.9}
                        sx={{mt:{xs:2}}}

                        item>
                     
                        <PlanCard
                               title='Ecommerce Service Plan'
                               bg={` linear-gradient(135deg,rgb(255 255 255 / 10%),hsl(108.22deg 100% 45% / 52%))`}
                               price={399.99}
                               height={{xs:'100%',md:'540px'}}
                               description={`This customized service plan is great for any type of business that requires high & guaranteed efficiency.`}
                               planFeatures={['Full ecommerce site','Full control over design','Full Seo optimization', 'Free 3 year domain + permanent hosting','Custom functionalities', 
                               'Enterprise-level marketing data', 'Graphics design','Coded from scratch','Chatbot/Livechat optional Setup','Google analytics setup', 'Full dashboard customization', 'Up to 6 months support']}
                               />
   </Grid>
            </Grid>
            </Container>
          
        </Box>
    )
}

export default Index