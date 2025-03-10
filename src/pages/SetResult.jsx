import { getCurrentSpin, updateSpinResult } from "../service/Spin";
import { useState, useEffect } from "react";
import { Select, InputNumber, Card, Form, Button, message } from "antd";

const dataResult = [
  { chosenOption: "BAR", resultMultiplier: 25 },
  { chosenOption: "BAR", resultMultiplier: 50 },
  { chosenOption: "BAR", resultMultiplier: 100 },
  { chosenOption: "777", resultMultiplier: 3 },
  { chosenOption: "777", resultMultiplier: 1 },
  { chosenOption: "STAR", resultMultiplier: 3 },
  { chosenOption: "STAR", resultMultiplier: 1 },
  { chosenOption: "STAR", resultMultiplier: 1 },
  { chosenOption: "BELL", resultMultiplier: 3 },
  { chosenOption: "BELL", resultMultiplier: 1 },
  { chosenOption: "CHERRY", resultMultiplier: 3 },
  { chosenOption: "CHERRY", resultMultiplier: 1 },
  { chosenOption: "CHERRY", resultMultiplier: 1 },
  { chosenOption: "WATERMELON", resultMultiplier: 3 },
  { chosenOption: "WATERMELON", resultMultiplier: 1 },
  { chosenOption: "WATERMELON", resultMultiplier: 1 },
  { chosenOption: "ORANGE", resultMultiplier: 3 },
  { chosenOption: "ORANGE", resultMultiplier: 1 },
  { chosenOption: "ORANGE", resultMultiplier: 1 },
  { chosenOption: "MANGO", resultMultiplier: 3 },
  { chosenOption: "MANGO", resultMultiplier: 1 },
  { chosenOption: "MANGO", resultMultiplier: 1 },
  { chosenOption: "LUCKY", resultMultiplier: 100 },
  { chosenOption: "JACKPOT", resultMultiplier: 100 },
];
export default function SetResult() {
  const [currentSpin, setCurrentSpin] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [numberResult, setNumberResult] = useState(null);

  useEffect(() => {
    fetchCurrentSpin();
  }, []);

  const fetchCurrentSpin = async () => {
    try {
      const data = await getCurrentSpin();
      setCurrentSpin(data);
      setSelectedResult(
        dataResult.find(
          (item) =>
            item.chosenOption === data.chosenOption &&
            item.resultMultiplier === data.resultMultiplier
        )
      );
      setNumberResult(data.numberResult);
    } catch (error) {
      console.error("Error fetching spin data:", error);
    }
  };

  const handleUpdate = async () => {
    if (!selectedResult || numberResult == null) {
      message.error("Please select an option and input a valid number result.");
      return;
    }

    try {
      await updateSpinResult(
        selectedResult.chosenOption,
        selectedResult.resultMultiplier,
        numberResult
      );
      message.success("Spin result updated successfully!");
      fetchCurrentSpin();
    } catch (error) {
      message.error(error.message || "Failed to update spin result.");
    }
  };

  return (
    <Card className="mt-4">
      <h1 className="text-xl font-bold">Set Result</h1>

      <Form layout="vertical" className="mt-4">
        <Form.Item label="Chosen Option & Multiplier">
          <Select
            value={
              selectedResult
                ? `${selectedResult.chosenOption} - x${selectedResult.resultMultiplier}`
                : null
            }
            onChange={(value) => {
              const found = dataResult.find(
                (item, idx) => idx.toString() === value
              );
              setSelectedResult(found);
            }}
          >
            {dataResult.map((item, idx) => (
              <Select.Option key={idx} value={idx.toString()}>
                {item.chosenOption} - x{item.resultMultiplier}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Number Result">
          <InputNumber
            className="w-full"
            value={numberResult}
            onChange={setNumberResult}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
