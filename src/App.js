import "./App.css";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "Tất cả",
    key: "1",
  },
  {
    label: "Cà phê Việt Nam",
    key: "2",
  },
  {
    label: "Tại nhà",
    key: "3",
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="https://noreruns.net/wp-content/uploads/2017/02/Passengers-Logo.jpg" />
        </div>
        <div className="dropdown">
          <Dropdown
            menu={{
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Cà phê
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Menu
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Cửa Hàng
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="card">
          <ShoppingCartOutlined />
        </div>
      </header>
    </div>
  );
}

export default App;
