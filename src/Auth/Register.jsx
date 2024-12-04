import React from "react";
import { Alert, Card, Input, Typography, Form, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values);

    console.log(values);
  };
  return (
    <Card className="w-[700px]">
      <div>
        {/* form */}
        <div className="flex  flex-col gap-2">
          <Typography.Title level={3} strong className="text-center">
            Create an Account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="text-center">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" autoComplete="off" onFinish={handleRegister}>
            <Form.Item
              label="Full Name"
              type="text"
              name="name"
              rules={[
                {
                  required: true,
                  message: "please enter your full name",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>
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
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please ConfrimPassword",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter your password"
              />
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closeable
                className="mt-[1.5rem]"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="w-[100%] "
              >
                {loading ? <Spin /> : "Create Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button htmlType="submit" size="large" className="w-[100%] ">
                  SignIn
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
        <div></div>
      </div>
    </Card>
  );
};

export default Register;
