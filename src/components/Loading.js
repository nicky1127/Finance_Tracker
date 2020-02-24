import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const Loading = ({ msg }) => (
  <Message icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      {msg}
    </Message.Content>
  </Message>
);

export default Loading;
