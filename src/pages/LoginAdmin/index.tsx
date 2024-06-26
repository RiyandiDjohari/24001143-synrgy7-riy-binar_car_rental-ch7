import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner_login.svg";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Swal from "sweetalert2";

const LoginAdmin = () => {
  const { setCurrentUser }: any = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const { email, password } = values;
      const response = await axios.post("https://powerful-grata-riyandidjohari-02bd0c8c.koyeb.app/api/v1/auth/login", { email, password });
      const data = await response.data;
      const token = data.token;

      if (data.status == true && data.data.role == "user") {
        await Swal.fire("Forbidden", "Only Admin", "error");
        return;
      } else {
        setCurrentUser({...data.data, token});
        await Swal.fire("Success", "Login Success", "success");
        localStorage.setItem("token", token);
        navigate("/admin/");
      }

    } catch (err) {
      await Swal.fire("Error", "Something Went Wrong", "error");
    }
  };

  return (
    <div className="overflow-hidden h-screen flex">
      {/* Image on left side */}
      <div className="hidden lg:block">
        <img src={banner} alt="preview" className="max-w-full h-full object-cover" />
      </div>
      {/* Form Login on right side */}
      <div className="bg-white flex justify-center h-full w-full lg:w-[700px] xl:w-[482px]">
        <div className="flex-1 mx-14 my-auto flex flex-col items-start max-w-96">
          <div className="bg-[#CFD4ED] w-[100px] h-[34px] mb-8"></div>
          <h4 className="font-bold text-2xl mb-8">Welcome Admin BCR</h4>
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
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
