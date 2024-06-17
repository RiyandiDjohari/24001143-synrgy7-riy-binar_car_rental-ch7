import { Breadcrumb, Button, Flex, Space } from "antd";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ListCar from "../../components/ListCar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

export default function Cars() {
  const [cars, setCars] = useState<any[]>([]);
  const navigate = useNavigate();
  const { currentUser }: any = useContext(AuthContext);
  const token = currentUser.token;

  const fetchCars = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/cars",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.data;
    setCars(data.cars);
  }
  useEffect(() => {
    fetchCars();
  }, [])

  return (
    <Space direction="vertical" className="w-full" size="large">
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/admin/cars" className="font-semibold">
                Cars
              </Link>
            ),
          },
          {
            title: <Link to="/admin/add-car">List Cars</Link>,
          },
        ]}
      />

      <Flex align="center" justify="space-between">
        <h2 className="font-bold text-xl">List Cars</h2>
        <Button type="primary" icon={<FaPlus />} onClick={() => navigate("/admin/add-car")}>Add New Car</Button>
      </Flex>

      <ListCar cars={cars} fetchCars={fetchCars}/>
    </Space>
  )
}