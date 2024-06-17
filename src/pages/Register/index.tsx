import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/banner_login_user.svg";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const { name, username, email, password } = values;
      const payload = { name, username, email, password };
      const response = await axios.post("http://localhost:8000/api/v1/auth/register", payload);
      const data = await response.data;

      if (data.status == true) {
        await Swal.fire("Registered", "Successfully Register User", "success");
        navigate("/login");
      }
      
    } catch (err: any) {
      if (err.response.data.message === "Email already registered") {
        await Swal.fire("Error", "Email Already Registered", "error");
        } else if (err.response.data.message === "Username already registered") {
        await Swal.fire("Error", "Username Already Registered", "error");
      }
    }
  };

  return (
    <div className="overflow-hidden h-screen flex">
      {/* Form Login on left side */}
      <div className="bg-white flex justify-center h-full w-full lg:w-1/2">
        <div className="flex-1 mx-14 my-auto flex flex-col items-start max-w-96">
          <div className="bg-[#CFD4ED] w-[100px] h-[34px] mb-8"></div>
          <h4 className="font-bold text-2xl mb-8">Sign Up</h4>
          <Form name="normal_login" layout="vertical" className="form-login" onFinish={onFinish}>
            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your name!" }]}>
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input placeholder="johndoe" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please Input valid email" },
              ]}
            >
              <Input placeholder="johndoe@mail.com" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full py-2 font-bold mt-4">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <p className="m-auto">
            Already have an account?{" "}
            <Link to={"/login"} className="underline text-primary">
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      {/* Image on right side */}
      <div className="hidden lg:block bg-primary h-full lg:w-1/2">
        <div className="mt-[112px] ml-[115px] text-[48px] h-full">
          <h2 className="text-white font-rubik mb-12">Binar Rental Car</h2>
          <img src={banner} alt="preview" className="max-w-full h-full object-cover object-left" />
        </div>
      </div>
    </div>
  );
};

export default Register;
