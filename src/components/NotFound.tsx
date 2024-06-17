import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/admin")}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
