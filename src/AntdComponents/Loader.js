import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "./AntdComponents.css"
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 48,
    }}
    spin
  />
);
const Loader = () => <Spin indicator={antIcon} />;
export default Loader;
