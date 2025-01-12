import { Alert, Space } from 'antd';
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
const NetWorkAlert = () => (
  <Space
    direction="vertical"
    style={{
      width: '50%',
    }}
  >
    <Alert
      message="You are offline"
      type="warning"
      closable
      onClose={onClose}
    />
  </Space>
);

export default NetWorkAlert;