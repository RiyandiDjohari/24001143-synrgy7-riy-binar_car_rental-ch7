import { Breadcrumb, Button, Flex, Space } from "antd";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ListCar from "../../components/ListCar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cars() {
  const [cars, setCars] = useState<any[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchCars = async () => {
    const response = await axios.get("https://powerful-grata-riyandidjohari-02bd0c8c.koyeb.app/api/v1/cars",{
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
