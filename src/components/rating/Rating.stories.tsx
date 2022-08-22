import React from 'react';
import Rating, {RatingPropsType, valueType} from './Rating';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

type defaultSettingsType = {
  defaultValue: valueType
  onChange: (value: valueType) => void
}

export default {
  title: 'components/Rating component',
  component: Rating
}

const defaultSettings: defaultSettingsType = {
  defaultValue: 1,
  onChange: action('Change value')
}

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>

export const RatingForStory = Template.bind({});
RatingForStory.args = {
  title: 'Menu',
  ...defaultSettings
}

