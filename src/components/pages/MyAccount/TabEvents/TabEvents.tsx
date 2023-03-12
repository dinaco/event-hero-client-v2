import { useState } from 'react';
import { Paper } from '@mui/material';
import TabPanel from '../../../molecules/TabPanel';
import NavTabs from '../../../molecules/NavTabs/NavTabs';
import EventsList from './EventsList/EventsList';
import type { Event } from '../../../../utilities/GlobalTypes';

const TabEvents = ({ userEvents }: Record<string, Event[]>) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabTitles = ["Today's", 'Upcoming', 'Past'];

  return (
    <Paper elevation={20} sx={{ p: 2 }}>
      <NavTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        titles={tabTitles}
      />
      {tabTitles.map((_, index) => {
        return (
          <TabPanel selectedTab={selectedTab} index={index} key={index}>
            <EventsList selectedTab={selectedTab} userEvents={userEvents} />
          </TabPanel>
        );
      })}
    </Paper>
  );
};

export default TabEvents;
