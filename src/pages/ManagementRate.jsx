import { Table, Button, Modal, Input, Form, message } from "antd";
import { getBetOption, updateBetOption } from "../service/BetOption";
import { useState, useEffect } from "react";

export default function ManagementRate() {
  const [betOptions, setBetOptions] = useState([]);
  const [editingOption, setEditingOption] = useState(null);
  const [newMultiplier, setNewMultiplier] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchBetOptions();
  }, []);

  const fetchBetOptions = async () => {
    try {
      const data = await getBetOption();
      setBetOptions(data);
    } catch (error) {
      console.error("Error fetching bet options:", error);
    }
  };

  const handleUpdateClick = (record) => {
    setEditingOption(record);
    setNewMultiplier(record.multiplier);
    setModalOpen(true);
  };

  const handleSave = async () => {
    try {
      await updateBetOption(editingOption._id, { multiplier: newMultiplier });
      message.success("Multiplier updated successfully!");
      setModalOpen(false);
      fetchBetOptions();
    } catch (error) {
      message.error("Failed to update multiplier.");
      console.error(error);
    }
  };

  const columns = [
    { title: "Option", dataIndex: "option", key: "option" },
    { title: "Multiplier", dataIndex: "multiplier", key: "multiplier" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => handleUpdateClick(record)}>Update</Button>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Management Rate</h1>
      <Table
        dataSource={betOptions}
        columns={columns}
        rowKey={(record) => record._id}
      />

      <Modal
        title="Update Multiplier"
        open={modalOpen}
        onOk={handleSave}
        onCancel={() => setModalOpen(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Multiplier">
            <Input
              value={newMultiplier}
              onChange={(e) => setNewMultiplier(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
