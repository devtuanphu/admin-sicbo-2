import { Layout } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ManagementRate from "./ManagementRate";
import SetResult from "./SetResult";

const { Content } = Layout;

export default function Dashboard() {
  return (
    <Layout className="h-screen">
      <Sidebar />
      <Layout>
        <Content className="m-4 bg-white p-6 rounded-xl shadow overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="management-rate" />} />
            <Route path="management-rate" element={<ManagementRate />} />
            <Route path="set-result" element={<SetResult />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
