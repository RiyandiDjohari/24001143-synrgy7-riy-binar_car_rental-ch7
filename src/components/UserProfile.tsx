import { Avatar, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

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
            {user.username}
            <GoChevronDown />
          </Space>
        </a>
      </Dropdown>
    </Space>
  );
};

export default UserProfile;
