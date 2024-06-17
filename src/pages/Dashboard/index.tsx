import { Breadcrumb, Flex, Space } from "antd";
import { Link } from "react-router-dom";
import ListOrder from "../../components/ListOrder";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TableCar from "../../components/TableCar";
import { AuthContext } from "../../context/authContext";

const Dashboard = () => {
  const [orders, setOrders] = useState<any>([]);
  const [cars, setCars] = useState<any[]>([]);

  const { currentUser }: any = useContext(AuthContext);
  const token = currentUser.token;

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    setOrders(data.orders);
  };

  const fetchCars = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/cars", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    setCars(data.cars);
  };

  useEffect(() => {
    fetchOrders();
    fetchCars();
  }, []);

  return (
    <Space direction="vertical" className="w-full" size="large">
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/admin/" className="font-semibold">
                Dashboard
              </Link>
            ),
          },
          {
            title: <Link to="/admin/">Dashboard</Link>,
          },
        ]}
      />

      <Flex align="center" justify="space-between">
        <h2 className="font-bold text-xl">Dashboard</h2>
      </Flex>

      <ListOrder orders={orders} />
      <TableCar cars={cars} />
    </Space>
  );
};

export default Dashboard;
