import { useState } from 'react';
import { Paper } from '@mui/material';
import Login from './Login/Login';
import Signup from './SignUp/SignUp';
import NavTabs from '../molecules/NavTabs/NavTabs';
import TabPanel from '../molecules/TabPanel';
import { tabTitles } from './TabbedAuthForm.static';

const TabbedAuthForm = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <Paper>
      <NavTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        titles={tabTitles}
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
