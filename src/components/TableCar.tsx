import { Flex, Space, Table } from "antd"
import { useState } from "react";

const TableCar = ({cars} : any) => {
    const [entryData] = useState(10);

    console.log(cars)
//   const handleLimitChange = (value: number) => setEntryData(value);
  const dataSource = cars.map((car: any, i: number) => ({
    key: i,
    no: `${i + 1}`,
    id: car.id,
    manufacture: car.manufacture,
    plate: car.plate,
    price: car.rentPerDay,
    capacity: car.capacity,
    available: car.available ? "True": "False",
    transmission: car.transmission,
    type: car.type,
    year: car.year,
  }));

  const columnsCars: any = [
    {
      title: "No",
      dataIndex: "no",
      fixed: "left",
      key: "no",
    },
    {
      title: "Plate",
      dataIndex: "plate",
      fixed: "left",
      key: "plate",
    },
    {
      title: "Manufacture",
      dataIndex: "manufacture",
      key: "manufacture",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Transmission",
      dataIndex: "transmission",
      key: "transmission",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
    },

  ];
  return (
    <Space direction="vertical" className="w-full" size="large">
      <Flex gap={8}>
        <div className="bg-primary w-1"></div>
        <h5 className="font-bold">List Car</h5>
      </Flex>
      <Table
        columns={columnsCars}
        dataSource={dataSource}
        bordered
        pagination={{
          pageSize: +entryData,
          
        }}
        
      />
      
    </Space>
  )
}

export default TableCar