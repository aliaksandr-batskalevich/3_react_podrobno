import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './Accordion';

export default {
  title: 'Accordion component',
  component: Accordion
}

export const AccordionForStory = () => <Accordion data={{title: 'Menu', collapsed: true}}/>