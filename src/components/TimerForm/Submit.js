import styled from 'styled-components';

import { primaryColor, media } from 'styles';

export default styled.input`
  background-color: ${props => (props.disabled ? '#eaccd9' : primaryColor)};
  color: white;
  border: 0;
  font-weight: 700;
  padding: .8em;
  display: block;
  margin: auto;
  width: 80%;
  font-size: 1.5em;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${media.tablet`
      margin: 40px auto;
      width: 300px;
    `};
`;
