import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { BarChartOutlined, SettingOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar() {
  const location = useLocation();

  return (
    <Sider breakpoint="lg" collapsible>
      <div className="text-white text-xl font-bold text-center py-4">
        My Dashboard
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/dashboard/management-rate" icon={<BarChartOutlined />}>
          <Link to="management-rate">Management Rate</Link>
        </Menu.Item>
        <Menu.Item key="/dashboard/set-result" icon={<SettingOutlined />}>
          <Link to="set-result">Set Result</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
