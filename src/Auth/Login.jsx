import React from "react";
import { Alert, Card, Input, Typography, Form, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { loginUser, error, loading } = useLogin();
  const handleLogin = (values) => {
    loginUser(values);
    console.log(values);
  };
  return (
    <Card className="w-[700px]">
      <div>
        {/* form */}
        <div className="flex  flex-col gap-2">
          <Typography.Title level={3} strong className="text-center">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="text-center">
            Unlock your world!
          </Typography.Text>
          <Form layout="vertical" autoComplete="off" onFinish={handleLogin}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "please enter your email",
                },
                {
                  type: "email",
                  message: "The input is not a valid Email",
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "please enter your Password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter password" />
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closeable
                className="mb-[1.5rem]"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="w-[100%] "
              >
                {loading ? <Spin /> : "Sign In"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button htmlType="submit" size="large" className="w-[100%] ">
                  {loading ? <Spin /> : "Create Account"}
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Card>
  );
};

export default Login;
