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
import { Link } from "react-router-dom";
import { carOptions, carSpecs, carType } from "../../constant";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddCar = () => {
  const [form] = Form.useForm();
  const [files, setFiles] = useState(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [availableAt, setAvailableAt] = useState<any>("");
  const { TextArea } = Input;
  const token = localStorage.getItem("token");

  const onFinish = async (values: any) => {
    console.log({ ...values, availableAt });

    const formData = new FormData();

    for (const [key, value] of Object.entries({ ...values, availableAt, image: files })) {
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
      const response = await axios.post("https://powerful-grata-riyandidjohari-02bd0c8c.koyeb.app/api/v1/cars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.data;
      if (data.status === true) {
        await Swal.fire("Success", "Create new car success", "success");
        form.resetFields();
        setFiles(null);
        setImageUrl(null);
      } else {
        await Swal.fire("Error", "Failed to create car", "error");
      }
    } catch (error) {
      await Swal.fire("Error", "Failed to create car", "error");
    }
  };

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date)
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
        form.setFieldsValue({ image: result });
        setImageUrl(result);
      });
      setFiles(file);
    }
  };
  const handleClearImage = () => {
    form.setFieldsValue({ image: "" });
    setImageUrl(null);
    setFiles(null);
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
            title: <Link to="/admin/add-car">Add New Car</Link>,
          },
        ]}
      />

      <Flex align="center" justify="space-between">
        <h2 className="font-bold text-xl">Add New Car</h2>
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
                rules={[
                  { required: true, message: "Please input rent per day!" },
                  { min: 5, message: "Rent per day must be at least 5 character" },
                ]}
                className="flex-1"
              >
                <Input placeholder="200000" type="number" min={5} />
              </Form.Item>
              <Form.Item
                label="Capacity"
                name="capacity"
                rules={[
                  { required: true, message: "Please input car capacity!" },
                  { max: 2, message: "Capacity maximum length is 2 character" },
                ]}
                className="flex-1"
              >
                <Input placeholder="2" type="number" maxLength={2} />
              </Form.Item>
            </Flex>
            <Flex className="w-full" gap={16}>
              <Form.Item
                label="Year"
                name="year"
                rules={[
                  { required: true, message: "Please input car year!" },
                  { max: 4, message: "Year maximum length is 4 character" },
                  { min: 4, message: "Year minimum length is 4 character" },
                ]}
                className="flex-1"
              >
                <Input placeholder="2022" type="number" min={4} />
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

export default AddCar;
