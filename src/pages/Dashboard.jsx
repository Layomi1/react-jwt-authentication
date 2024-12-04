import { Avatar, Button, Typography } from "antd";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Card from "antd/es/card/Card";
import { UserOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const { logOut, userData } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <Card className="w-[500px]">
      <div className="flex flex-col  gap-1 ">
        <div className="mb-6 flex justify-center">
          <Avatar size={150} icon={<UserOutlined />} />
        </div>

        <div className="flex flex-col ">
          <Typography.Title level={2} strong className="capitalize">
            {userData.name}
          </Typography.Title>
          <Typography.Text type="secondary" className="">
            Email:{userData.email}
          </Typography.Text>
          <Typography.Text type="secondary" className="my-[1.3rem] w-full">
            Role::{userData.role}
          </Typography.Text>
          <Button type="primary" size="large" onClick={handleLogOut}>
            LogOut
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Dashboard;
