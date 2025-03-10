import { Button, Form, Input, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../service/User";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const data = await loginAdmin(values.username, values.password);

      console.log(data);

      message.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      message.error(error.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Card className="w-96 shadow-xl">
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Email"
            name="username"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
