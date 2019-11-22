import React from 'react'
import { storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';



storiesOf('Youtube', module)
    .addDecorator(StoryRouter()) // 해당 데코레이터가 없다면, Link 기능을 사용하지 못함.
