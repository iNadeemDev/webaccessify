import React, { useContext } from "react";
import { useGetIdentity, useOne } from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  TextField,
  FormControl,
  Select,
  MenuItem
} from "@pankod/refine-mui";
import { Search } from "@mui/icons-material";

export const Header: React.FC = () => {

  
const { data:user} = useGetIdentity<{
  name: string
  website: string
}>();

  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderHeader ? (
    <AppBar color="default" position="sticky" elevation={0} sx={{ background: "#FCFCFC" }}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <FormControl sx={{flex: 3}}> */}
              <Select  sx={{border: '1px solid black', color: '#000'}}
              variant='outlined'
              color='info'
              displayEmpty
              required
              style={{width: '25%'}}
              inputProps={{'aria-label': 'without-label'}}
              defaultValue={'site1'}
              >
                <MenuItem value='site1'>{user?.website}</MenuItem>
              </Select>
            {/* </FormControl> */}
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            <Typography color={'#11142d'} fontWeight={500} fontSize={18}>{user?.name}</Typography>
            <Avatar src="/broken-image.jpg" />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
