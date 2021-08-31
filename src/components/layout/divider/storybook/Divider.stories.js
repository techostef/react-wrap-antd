/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Layout from '../../layout/Layout';
import Divider, { DividerOrientation, DividerType } from '../Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
  argTypes: {
    className: argTypesEnum.STRING,
    dashed: argTypesEnum.BOOL_FALSE,
    children: argTypesEnum.STRING,
    orientation: argTypesEnum.RADIO({
      defaultValue: DividerOrientation.center,
      options: DividerOrientation,
    }),
    plain: argTypesEnum.BOOL_TRUE,
    style: argTypesEnum.OBJECT,
    type: argTypesEnum.RADIO({
      defaultValue: DividerType.horizontal,
      options: DividerType,
    }),
  },
};

const TemplateHorizontal = (args) => (
  <Layout>
    <Layout.Content style={{padding: 30}}>
      <Divider {...args}>
        {args.children}
      </Divider>
    </Layout.Content>
  </Layout>
);

const TemplateVertical = (args) => (
  <Layout>
    <Layout.Content style={{padding: 30}}>
      Text 1
      <Divider {...args} type="vertical" />
      Text 2
      <Divider {...args} type="vertical" />
      Text 3
    </Layout.Content>
  </Layout>
);

const TemplateDividerForHeading = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider plain>Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="left" plain>
        Left Text
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="right" plain>
        Right Text
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </>
  )
}

export const DividerHorizontal = TemplateHorizontal.bind({});
DividerHorizontal.args = {
  children: "The Title",
};

export const DividerVertical = TemplateVertical.bind({});
export const DividerForHeading = TemplateDividerForHeading.bind({});



// import React from 'react';
// import argTypesEnum from '../../../../enums/argTypesEnum';
// import Divider, { DividerOrientation, DividerType } from '../Divider';

// export default {
//   title: 'Example/Layout/Divider',
//   component: Divider,
//   argTypes: {
//     dataTestId: argTypesEnum.STRING,
//     dashed: argTypesEnum.BOOL_FALSE,
//     plain: argTypesEnum.BOOL_TRUE,
//     orientation: argTypesEnum.RADIO({
//       defaultValue: DividerOrientation.center,
//       options: DividerOrientation,
//     }),
//     type: argTypes.RADIO({
//       defaultValue: DividerType.horizontal,
//       options: DividerType,
//     })
//   },
// };

// const TemplateDefault = (args) => (
//   <Divider
//     {...args}
//   />
// );

// export const DividerDefault = TemplateDefault.bind({});
// DividerDefault.args = {
//   children: 'Text',
// };