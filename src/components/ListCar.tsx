import { Button, Card, Col, Flex, Row, Space } from "antd";
import { useContext } from "react";
import { GoPeople, GoTrash } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { AuthContext } from "../context/authContext";
import { TiEdit } from "react-icons/ti";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ListCar = ({ cars, fetchCars }: any) => {
  const { currentUser }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const token = currentUser.token;
  const role = currentUser?.role;

  console.log(role);

  const handleDeleteCar = async (id: string) => {
    await Swal.fire({
      title: 'Menghapus Data Mobil',
      // icon: "warning",
      imageUrl: "https://res.cloudinary.com/df25q8a0m/image/upload/v1718368234/fevv1chmn4xa5tkgcq3q.png",
      text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ff4d4f",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://localhost:8000/api/v1/cars/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.data;
          if (data.status === true) {
            await Swal.fire("Success", "Delete Car Successfully", "success");
            fetchCars();
          } else {
            await Swal.fire("Error", "Failed to Delete Car", "error");
          }
        } catch (error) {
          await Swal.fire("Error", "Something Went Wrong", "error");
        }
      }
    })

  };
  return (
    <div className="container my-8 p-0 ">
      <Row gutter={[24, 24]}>
        {cars?.map((car: any) => (
          <Col key={car.id} sm={24} md={12} lg={8} xxl={role === "admin" ? 8 : 6}>
            <Card className="flex flex-col h-[550px]">
              <img alt="preview" src={car.image} className="h-[225px] w-full object-fill rounded-md mb-4" />
              <Space direction="vertical" size="small" className="flex-grow">
                <p>{`${car.manufacture} / ${car.model}`}</p>
                <h4 className="font-bold text-base">{`Rp. ${car.rentPerDay} / hari`}</h4>
                <p>{car.description}</p>
              </Space>

              <div className="flex flex-col gap-2 w-full">
                <Flex align="center" gap={6}>
                  <GoPeople />
                  <p>{`${car.capacity} orang`}</p>
                </Flex>
                <Flex align="center" gap={6}>
                  <IoSettingsOutline />
                  <p>{car.transmission}</p>
                </Flex>
                <Flex align="center" gap={6}>
                  <MdOutlineDateRange />
                  <p>{`Tahun ${car.year}`}</p>
                </Flex>
                {role == "user" ? (
                  <button className="btn-primary">Pilih Mobil</button>
                ) : (
                  <Flex gap={16} className="flex-1">
                    <Button
                      icon={<GoTrash />}
                      size="large"
                      danger
                      className="flex-1 font-bold rounded-sm"
                      onClick={() => handleDeleteCar(car.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      icon={<TiEdit fontSize={20} />}
                      size="large"
                      className="flex-1 font-bold rounded-sm bg-[#5CB85F] text-white hover:!text-[#5CB85F] hover:!border-[#5CB85F]"
                      onClick={() => navigate(`/admin/edit-car/${car.id}`)}
                    >
                      Update
                    </Button>
                  </Flex>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListCar;
