import { Avatar, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { useContext } from "react";
import { FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { currentUser, setCurrentUser }: any = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(currentUser);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    navigate("/login-admin");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>Profile</p>,
      icon: <FaRegCircleUser />,
    },
    {
      key: "2",
      danger: true,
      label: <p onClick={handleLogout}>Logout</p>,
    },
  ];

  return (
    <Space size="small">
      <Avatar size="default" icon={<FaRegUser />} />
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {currentUser ? currentUser.username : "Admin"}
            <GoChevronDown />
          </Space>
        </a>
      </Dropdown>
    </Space>
  );
};

export default UserProfile;
