import { Button, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/banner_login_user.svg";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Swal from "sweetalert2";

const LoginUser = () => {
  const { setCurrentUser }: any = useContext(AuthContext);

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const { email, password } = values;
      const response = await axios.post("https://powerful-grata-riyandidjohari-02bd0c8c.koyeb.app/api/v1/auth/login", { email, password });
      const data = await response.data;
      const token = data.token;

      if (data.status !== true) {
        await Swal.fire("Error", "Email or Password Incorrect", "error");
      }
      await Swal.fire("Success", "Login Success", "success");
      setCurrentUser({ ...data.data, token });
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.log(err);
      await Swal.fire("Error", "Email or Password Incorrect", "error");
    }
  };
  return (
    <div className="overflow-hidden h-screen flex">
      {/* Form Login on left side */}
      <div className="bg-white flex justify-center h-full w-full lg:w-1/2">
        <div className="flex-1 mx-14 my-auto flex flex-col items-start max-w-96">
          <div className="bg-[#CFD4ED] w-[100px] h-[34px] mb-8"></div>
          <h4 className="font-bold text-2xl mb-8">Welcome Back!</h4>
          <Form name="normal_login" layout="vertical" className="form-login" onFinish={onFinish}>
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
              rules={[{ required: true, message: "Please input your Password!" }]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full py-2 font-bold mt-4">
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <p className="m-auto">
            Don't have an account?{" "}
            <Link to={"/register"} className="underline text-primary">
              Sign up for free
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

export default LoginUser;
