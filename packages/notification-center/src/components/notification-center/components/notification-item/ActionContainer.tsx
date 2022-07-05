import React from 'react';
import { NotificationButton } from './NorificationItemButton';
import { IMessageAction } from '@novu/shared';
import styled from 'styled-components';

export interface IActionContainerProps {
  action?: IMessageAction;
}

export function ActionContainer(props: IActionContainerProps) {
  const buttons = props?.action?.buttons;

  return (
    <>
      <TemplateContainerWrap>
        <TemplateContainer>
          {buttons?.map((button) => (
            <NotificationButton buttonContext={button} key={button.type} />
          ))}
        </TemplateContainer>
      </TemplateContainerWrap>
    </>
  );
}

const TemplateContainerWrap = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const TemplateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  max-height: 50px;
  margin-left: -15px;
  margin-right: -15px;
`;
