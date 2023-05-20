import React from 'react';
import { useList } from '@pankod/refine-core';
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent, TotalUser } from 'components';
import { Typography, Box, Stack } from '@pankod/refine-mui';


const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display={"flex"} flexWrap={"wrap"} gap={4} >
        <PieChart title={"Total Webpages"} value={36755} series={[85, 15]} colors={['#6C5DD3', '#c4e8ef']} />
        <PieChart title={"Total Users"} value={30000} series={[80, 20]} colors={['#7FBA7A', '#c4e8ef']} />
        <PieChart title={"Total Time (Hrs)"} value={5500} series={[80, 20]} colors={['#FFCE73', '#c4e8ef']} />
      </Box>

      <Box mt="20px" display={"flex"} flexWrap={"wrap"} gap={4}>
        <TotalRevenue />
        <TotalUser />
      </Box>
      
    </Box>
  )
}

export default home