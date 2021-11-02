import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { Variant } from '../variant/variant.interface';

import { LgAlertModule } from './alert.module';
import { LgAlertComponent } from './alert.component';
import { notes } from './alert.notes';

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Alert',
  component: LgAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [LgAlertModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The projected content.',
    },
    showIcon: {
      description:
        'Whether the icon should display on the warning, error or success variants.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    variant: {
      options: Object.values(Variant),
      description: 'Applies colour treatment and ARIA role if applicable.',
      table: {
        type: {
          summary: Object.values(Variant),
        },
        defaultValue: {
          summary: Variant.Generic,
        },
      },
      control: {
        type: 'select',
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-alert
  [showIcon]="showIcon"
  [variant]="variant">
  {{content}} Here is some <a href="#"> link text</a>.
</lg-alert>
`;

const alertTemplate: Story<LgAlertComponent> = (args: LgAlertComponent) => ({
  props: args,
  template,
});

export const standardAlert = alertTemplate.bind({});
standardAlert.storyName = 'Standard';
standardAlert.args = {
  content: 'This is an alert.',
  variant: Variant.Generic,
};
standardAlert.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
