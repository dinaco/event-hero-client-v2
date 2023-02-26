import { useState } from 'react';
import { Paper } from '@mui/material';
import Login from './Login/Login';
import Signup from './SignUp/SignUp';
import NavTabs from '../molecules/NavTabs';
import TabPanel from '../molecules/TabPanel';

const TabbedAuthForm = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const titles = ['Sign In', 'Sign Up'];

  return (
    <Paper>
      <NavTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        titles={titles}
        variant={'fullWidth'}
      />
      <TabPanel selectedTab={selectedTab} index={0}>
        <Login />
      </TabPanel>
      <TabPanel selectedTab={selectedTab} index={1}>
        <Signup />
      </TabPanel>
    </Paper>
  );
};

export default TabbedAuthForm;
