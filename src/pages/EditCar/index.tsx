import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { carOptions, carSpecs, carType } from "../../constant";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { AuthContext } from "../../context/authContext";
import Swal from "sweetalert2";

const EditCar = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [car, setCar] = useState<any>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [availableAt, setAvailableAt] = useState<any>("");
  const { TextArea } = Input;
  const navigate = useNavigate();
  const { currentUser }: any = useContext(AuthContext);
  const token = currentUser.token;

  const fetchCar = async (idCar: string | undefined) => {
    const response = await axios.get(`https://powerful-grata-riyandidjohari-02bd0c8c.koyeb.app/api/v1/cars/${idCar}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data.car;
    setCar(data);
    setImageUrl(data.image);
    setAvailableAt(data.availableAt);
    form.setFieldsValue({
      plate: data.plate,
      manufacture: data.manufacture,
      model: data.model,
      rentPerDay: data.rentPerDay,
      capacity: data.capacity,
      year: data.year,
      transmission: data.transmission,
      available: data.available,
      availableAt: dayjs(data.availableAt),
      type: data.type,
      description: data.description,
      options: data.options,
      specs: data.specs,
      image: data.image,
    });
  };

  useEffect(() => {
    fetchCar(id);
  }, []);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    console.log(car)
    for (const [key, value] of Object.entries({ ...values, availableAt })) {
      if (key === "options") {
        values.options.forEach((option: any) => {
          formData.append("options[]", option);
        });
      } else if (key === "specs") {
        values.specs.forEach((spec: any) => {
          formData.append("specs[]", spec);
        });
      } else if (key === "image" && value instanceof Blob) {
        formData.append(key, value);
      } else {
        formData.append(key, value as string);
      }
    }

    try {
      const response = await axios.put(`https://powerful-grata-riyandidjohari-02bd0c8c.koyeb.app/api/v1/cars/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.data;
      if (data.status === true) {
        await Swal.fire("Success", "Update Car success", "success");
        navigate("/admin/cars");
      } else {
        await Swal.fire("Error", "Failed to Update Car", "error");
      }
    } catch (error) {
      await Swal.fire("Error", "Something Went Wrong", "error");
    }
  };

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date);
    setAvailableAt(dateString);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        const result = reader.result as string;
        form.setFieldsValue({ image: file });
        setImageUrl(result);
      });
    }
  };
  const handleClearImage = () => {
    form.setFieldsValue({ image: "" });
    setImageUrl(null);
  };

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
            title: <Link to="/admin/cars">List Cars</Link>,
          },
          {
            title: <Link to="/admin/edit-car">Edit Car</Link>,
          },
        ]}
      />

      <Flex align="center" justify="space-between">
        <h2 className="font-bold text-xl">Edit Car</h2>
      </Flex>

      <Form form={form} onFinish={onFinish} layout="vertical">
        <Flex gap={16} className="w-full">
          <div className="flex-1">
            <Form.Item
              label="Plate"
              name="plate"
              rules={[
                { required: true, message: "Please input plate!" },
                { max: 10, message: "Plate length max to 10 character" },
              ]}
            >
              <Input placeholder="ABC-1234" />
            </Form.Item>
            <Form.Item
              label="Manufacture"
              name="manufacture"
              rules={[{ required: true, message: "Please input manufacture!" }]}
            >
              <Input placeholder="Ford" />
            </Form.Item>
            <Form.Item label="Model" name="model" rules={[{ required: true, message: "Please input car model!" }]}>
              <Input placeholder="Mustang" />
            </Form.Item>
            <Flex className="w-full" gap={16}>
              <Form.Item
                label="Rent Per Day"
                name="rentPerDay"
                rules={[{ required: true, message: "Please input rent per day!" }]}
                className="flex-1"
              >
                <Input placeholder="200000" type="number" />
              </Form.Item>
              <Form.Item
                label="Capacity"
                name="capacity"
                rules={[{ required: true, message: "Please input car capacity!" }]}
                className="flex-1"
              >
                <Input placeholder="2" type="number" maxLength={2} />
              </Form.Item>
            </Flex>
            <Flex className="w-full" gap={16}>
              <Form.Item
                label="Year"
                name="year"
                rules={[{ required: true, message: "Please input car year!" }]}
                className="flex-1"
              >
                <Input placeholder="2022" type="number" />
              </Form.Item>

              <Form.Item
                label="Transmission"
                name="transmission"
                rules={[{ required: true, message: "Please input car transmission!" }]}
                className="flex-1"
              >
                <Select
                  placeholder="--Select Transmission--"
                  options={[
                    { value: "", label: "--Select Car Transmission--", disabled: true },
                    { value: "Manual", label: "Manual" },
                    { value: "Automatic", label: "Automatic" },
                    { value: "CVT", label: "CVT" },
                    { value: "Automanual", label: "Automanual" },
                  ]}
                />
              </Form.Item>
            </Flex>
          </div>
          <div className="flex-1">
            <Form.Item
              label="Available"
              name="available"
              rules={[{ required: true, message: "Please input car availability!" }]}
            >
              <Select
                placeholder="--Select Car Availability--"
                options={[
                  { value: "", label: "--Select Car Availability--", disabled: true },
                  { value: true, label: "Available" },
                  { value: false, label: "Not Available" },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="availableAt"
              label="Available At"
              rules={[{ required: true, message: "Please input car available at" }]}
            >
              <DatePicker
                onChange={onDateChange}
                placeholder="Pilih Tanggal"
                format={"YYYY-MM-DD"}
                style={{ width: "100%", height: "auto" }}
              />
            </Form.Item>

            <Form.Item label="Type" name="type" rules={[{ required: true, message: "Please input car type!" }]}>
              <Select placeholder="--Select Car Type--" options={carType} />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input car description!" },
                { max: 150, message: "Description maximum length is 150 character" },
              ]}
            >
              <TextArea rows={5} />
            </Form.Item>
          </div>
        </Flex>
        <Form.Item label="Options" name="options">
          <Checkbox.Group style={{ width: "100%" }}>
            <Row gutter={[4, 12]}>
              {carOptions.map((option, i) => (
                <Col span={4} key={i}>
                  <Checkbox value={option}>{option}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="Specs" name="specs">
          <Checkbox.Group style={{ width: "100%" }}>
            <Row gutter={[4, 12]}>
              {carSpecs.map((spec, i) => (
                <Col span={6} key={i}>
                  <Checkbox value={spec}>{spec}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="image" label="Image">
          <Input type="file" onChange={(e) => handleImageChange(e)} />
          <Button type="primary" onClick={handleClearImage}>
            Clear image
          </Button>
          {imageUrl && <img src={imageUrl} alt="preview" width={200} />}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default EditCar;
