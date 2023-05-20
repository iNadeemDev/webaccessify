import React, { useState, useEffect } from 'react';
import { useList } from '@pankod/refine-core';
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent, TotalUser } from 'components';
import { Typography, Box, Stack, FormControl, FormHelperText, TextField, Select, MenuItem } from '@pankod/refine-mui';
import CustomButton from '../components/common/CustomButton';
import axiosInstance from '../App';

var initialState = { widStatus: '', btnColor: '', widPrimColor: '', widSecColor: '', headColor: '', textColor: '', widSize: '', widPosition: '' }


const Home = () => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const fetchConfigs = async () => {
      const token = localStorage.getItem("admin");
      const response = await fetch("https://manage.cyclic.app/user/api/v1/configs", {
        method: "GET",
        headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      initialState = {widStatus: data.widStatus, btnColor: data.btn_color, widPrimColor: data.primary_color, widSecColor: data.secondary_color, headColor: data.headings_color, textColor: data.text_color, widSize: data.wid_size, widPosition: data.wid_location};
      setFormData(initialState);
    };

    fetchConfigs();
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("admin");
    const response = await fetch("https://manage.cyclic.app/user/api/v1/configs", {
      method: "PUT",
      headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(formData)
    });
    if(response.status == 200){
      alert("Configs updated successfully!")
    }else if(response.status == 410){
      alert("Something went wrong!")
    } else if(response.status === 500){
      alert("Something went wrong!")
    }
  }
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Widget Customization
      </Typography>
      <Box mt={2.5} borderRadius={'15px'} padding="20px" bgcolor="#fcfcfc">
        <form style={{ marginTop: '0', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
          <Stack direction={'row'} gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>
                Enable Widget
              </FormHelperText>
              <Select sx={{border: '1px solid black', color: '#000'}}
                variant='outlined'
                color='info'
                name='widStatus'
                displayEmpty
                required
                inputProps={{ 'aria-label': 'without-label' }}
                onChange={handleChange}
                value={formData.widStatus}
              >
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inActive'>Inactive</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Change Button Color</FormHelperText>
              <TextField sx={{border: '1px solid black', borderRadius: '6px'}}
                fullWidth
                required
                id='outlined-basic'
                color='info'
                name='btnColor'
                variant='outlined'
                type={'color'}
                onChange={handleChange}
                value={formData.btnColor}
              />
            </FormControl>

          </Stack>

          <Stack direction={'row'} gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Widget Primary Color</FormHelperText>
              <TextField sx={{border: '1px solid black', borderRadius: '6px'}}
                fullWidth
                required
                id='outlined-basic'
                color='info'
                name='widPrimColor'
                variant='outlined'
                type={'color'}
                onChange={handleChange}
                value={formData.widPrimColor}
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Widget Secondary Color</FormHelperText>
              <TextField sx={{border: '1px solid black', borderRadius: '6px'}}
                fullWidth
                required
                id='outlined-basic'
                color='info'
                name='widSecColor'
                variant='outlined'
                type={'color'}
                onChange={handleChange}
                value={formData.widSecColor}
              />
            </FormControl>

          </Stack>

          <Stack direction={'row'} gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Headings Color</FormHelperText>
              <TextField sx={{border: '1px solid black', borderRadius: '6px'}}
                fullWidth
                required
                id='outlined-basic'
                color='info'
                name='headColor'
                variant='outlined'
                type={'color'}
                onChange={handleChange}
                value={formData.headColor}
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Text Color</FormHelperText>
              <TextField sx={{border: '1px solid black', borderRadius: '6px'}}
                fullWidth
                required
                id='outlined-basic'
                color='info'
                name='textColor'
                variant='outlined'
                type={'color'}
                onChange={handleChange}
                value={formData.textColor}
              />
            </FormControl>

          </Stack>

          <Stack direction={'row'} gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>
                Change Widget Size
              </FormHelperText>
              <Select sx={{border: '1px solid black', color: '#000'}}
                variant='outlined'
                color='info'
                name='widSize'
                onChange={handleChange}
                displayEmpty
                required
                inputProps={{ 'aria-label': 'without-label' }}
                value={formData.widSize}
              >
                <MenuItem value='small'>Small</MenuItem>
                <MenuItem value='medium'>Medium</MenuItem>
                <MenuItem value='large'>Large</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>
                Change Widget Position
              </FormHelperText>
              <Select sx={{border: '1px solid black', color: '#000'}}
                variant='outlined'
                color='info'
                name='widPosition'
                displayEmpty
                required
                onChange={handleChange}
                inputProps={{ 'aria-label': 'without-label' }}
                value={formData.widPosition}
              >
                <MenuItem value='topRight'>Top Right</MenuItem>
                <MenuItem value='topLeft'>Top Left</MenuItem>
                <MenuItem value='bottomRight'>Bottom Right</MenuItem>
                <MenuItem value='bottomLeft'>Bottom Left</MenuItem>
              </Select>
            </FormControl>

          </Stack>

          <CustomButton type='submit' title={'Submit Customizations'} backgroundColor='#018e86' color='#fcfcfc' />
        </form>
      </Box>
    </Box>
  )
}

export default Home