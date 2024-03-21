import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownHeader = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  min-width: 154px;
  padding: 4px 14px;
  background-color: #daf2ec;
  color: #07a46c;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;