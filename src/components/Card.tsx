import React from 'react';
import { CardContainer } from '../UI/styles';

interface CardProps {
  text: string;
}

export const Card = ({ text }: CardProps): JSX.Element => {
  return <CardContainer>{text}</CardContainer>;
};
