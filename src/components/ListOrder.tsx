import { Flex, Space, Table } from "antd";
import { useState } from "react";
// import { showLimitOption } from "../constant";

const ListOrder = ({ orders }: any) => {
  const [entryData, setEntryData] = useState(10);

//   const handleLimitChange = (value: number) => setEntryData(value);
  const dataSource = orders.map((order: any, i: number) => ({
    key: i,
    no: `${i + 1}`,
    id: order.id,
    user_email: order.user.email,
    car: order.car.manufacture,
    start_rent: order.start_rent,
    finish_rent: order.finish_rent,
    price: order.price,
    status: order.status,
  }));

  const columnsOrders: any = [
    {
      title: "No",
      dataIndex: "no",
      fixed: "left",
      key: "no",
    },
    {
      title: "User Email",
      dataIndex: "user_email",
      fixed: "left",
      key: "user_email",
    },
    {
      title: "Car",
      dataIndex: "car",
      key: "car",
    },
    {
      title: "Start Rent",
      dataIndex: "start_rent",
      key: "start_rent",
    },
    {
      title: "Finish Rent",
      dataIndex: "finish_rent",
      key: "finish_rent",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <Space direction="vertical" className="w-full" size="large">
      <Flex gap={8}>
        <div className="bg-primary w-1"></div>
        <h5 className="font-bold">List Order</h5>
      </Flex>
      <Table
        columns={columnsOrders}
        dataSource={dataSource}
        bordered
        pagination={{
          pageSize: +entryData,
          
        }}
        style={{zIndex: -1}}
      />
      {/* <div>
        <p>Limit</p>
        <Select
          defaultValue={10}
          style={{
            width: 60,
            margin: "0 10px",
          }}
          onChange={handleLimitChange}
          options={showLimitOption}
        />
      </div> */}
    </Space>
  );
};

export default ListOrder;
