import React, { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInterceptor";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeToJalali } from "@/utils/dateAndTime";

interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const currentUser = useSelector((state: RootState) => state.auth.user);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await axiosInstance.delete(`/users/${id}`);
      fetchUsers(); // Refetch users after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>شناسه</TableCell>
            <TableCell>نام کاربری</TableCell>
            <TableCell>ایمیل</TableCell>
            <TableCell>تاریخ ایجاد</TableCell>
            <TableCell>تاریخ بروزرسانی</TableCell>
            <TableCell>عملیات‌ها</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell dir='ltr'>{changeToJalali(user.createdAt)}</TableCell>
              <TableCell dir='ltr'>{changeToJalali(user.updatedAt)}</TableCell>
              <TableCell>
                {currentUser?.id !== user.id && (
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
