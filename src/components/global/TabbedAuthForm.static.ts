import type { SyntheticEvent } from 'react';

export type HandleChangeBetweenForms = (
  e: SyntheticEvent<Element, Event>,
  newTabValue: number
) => void;

export type HandleChangeAuthForm = React.ChangeEvent<HTMLInputElement>;

export type HandleClickAuthForm = React.MouseEvent<HTMLElement>;
