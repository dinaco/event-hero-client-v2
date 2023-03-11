import { useState } from 'react';
import { Paper } from '@mui/material';
import Login from './Login/Login';
import Signup from './SignUp/SignUp';
import NavTabs from '../molecules/NavTabs/NavTabs';
import TabPanel from '../molecules/TabPanel';
import { tabIndex, tabTitles } from './TabbedAuthForm.static';

const TabbedAuthForm = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabIndex[0]);

  return (
    <Paper>
      <NavTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        titles={tabTitles}
      />
      <TabPanel selectedTab={selectedTab} index={tabIndex[0]}>
        <Login />
      </TabPanel>
      <TabPanel selectedTab={selectedTab} index={tabIndex[1]}>
        <Signup />
      </TabPanel>
    </Paper>
  );
};

export default TabbedAuthForm;
