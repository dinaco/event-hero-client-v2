import { useState } from 'react';
import { Paper } from '@mui/material';
import Login from './Login/Login';
import Signup from './SignUp/SignUp';
import NavTabs from '../molecules/NavTabs';
import TabPanel from '../molecules/TabPanel';
import type { HandleChangeBetweenForms } from './TabbedAuthForm.static';

const TabbedAuthForm = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const titles = ['Sign In', 'Sign Up'];

  const handleChange: HandleChangeBetweenForms = (e, newTabValue) => {
    e.preventDefault();
    setTabValue(newTabValue);
  };

  return (
    <Paper>
      <NavTabs
        tabValue={tabValue}
        handleChange={handleChange}
        titles={titles}
        variant={'fullWidth'}
      />
      <TabPanel tabValue={tabValue} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel tabValue={tabValue} index={1}>
        <Signup handleChange={handleChange} />
      </TabPanel>
    </Paper>
  );
};

export default TabbedAuthForm;
