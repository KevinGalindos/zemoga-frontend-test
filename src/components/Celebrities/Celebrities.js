import { Alert } from "./Alert/Alert";
import { Card } from "./Card/Card";

import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export const Celebrities = () => {
  return (
    <div className="Celebrities">
      <div className="container">
        <Alert />
        <div className="title">
          <div className="title_left">
            <h2>Previous Rulings</h2>
          </div>

          <div className="title_right">
            <Select
              defaultValue="List"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="List">List</Option>
              <Option value="Grid">Grid</Option>
            </Select>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};
