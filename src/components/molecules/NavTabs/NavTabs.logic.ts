import { useCallback } from 'react';
import type { SyntheticEvent } from 'react';
import type { NavTabProps } from './NavTabs';

type HandleChangeBetweenForms = (
  e: SyntheticEvent<Element, Event>,
  newTabValue: number
) => void;

function useNavTabs({
  setSelectedTab,
}: Pick<NavTabProps, 'selectedTab' | 'setSelectedTab'>) {
  const handleTabSwitch: HandleChangeBetweenForms = useCallback(
    (e, newTabValue) => {
      e.preventDefault();
      setSelectedTab(newTabValue);
    },
    [setSelectedTab]
  );

  return {
    handleTabSwitch,
  };
}

export default useNavTabs;
