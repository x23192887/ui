import styled from 'styled-components';

// Define color palette
const colors = {
  primary: '#4CAF50',
  primaryHover: '#45a049',
  secondary: '#ff6666',
  secondaryHover: '#ff4d4d',
  border: '#ccc',
  background: '#f9f9f9',
  text: '#333',
};

export const UserListContainer = styled.div`
  margin: 20px auto;
  max-width: 800px;
  background-color: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const UserListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 15px;
  border-bottom: 2px solid ${colors.border};
  background-color: ${colors.background};
  color: ${colors.text};
`;

export const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid ${colors.border};
  background-color: ${colors.background};
  color: ${colors.text};

  /* Align text based on column */
  &:first-child {
    text-align: left; /* Align Name column to the left */
  }

  &:nth-child(n + 2) {
    text-align: center; /* Align Email, Phone, and Action columns to center */
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

export const DeleteButton = styled.button`
  background-color: ${colors.secondary};
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.secondaryHover};
  }
`;

export const AddUserForm = styled.form`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  padding: 20px;
  background-color: ${colors.background};
`;

export const AddUserInput = styled.input`
  padding: 10px;
  border: 1px solid ${colors.border};
  border-radius: 5px;
`;

export const AddUserButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;
