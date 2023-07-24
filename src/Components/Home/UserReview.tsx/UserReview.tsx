import {Box, Typography, Rating} from '@mui/material'
import React from 'react'

const UserReview = ({title,reviewer,description}:{title:string,reviewer:string,description:string}) => {
    return (
        <Box
        className='auto flex center col '
            sx={{
                px:2,
                maxWidth:'500px',
                height:'100%',

                borderBottom: '1px solid white'
        }}>

            <Box className="flex">
            

                <Box sx={{
                }}>

                    <Typography
                    className='clr'
                        sx={{
                            fontSize:'2em',
                        fontWeight: 500
                    }}
                        component={'h4'}>{title}</Typography>

                    <Rating readOnly name="simple-controlled" value={5}/>

                </Box>

            </Box>
            <Typography
            // className='clr'
                sx={{
                    // color:'#f8f8f8',
                fontWeight: 400,
                    maxWidth:'500px',
                pt: 1,
                fontSize: 15
            }}
                component={'p'}>{description}</Typography>
                 <Typography
            // className='clr'
                sx={{
                    // color:'#f8f8f8',
                    fontStyle:'italic',
                fontWeight: 400,
                    maxWidth:'500px',
                pt: 1,
                fontSize: 15
            }}
                component={'p'}>-{reviewer}</Typography>


        </Box>
    )
}

export default UserReview