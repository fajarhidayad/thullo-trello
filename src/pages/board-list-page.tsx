import { PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function BoardListPage() {
  return (
    <div className="mt-14 max-w-7xl mx-auto">
      <Flex justify="space-between" align="center" className="mb-10">
        <Title level={4}>All Boards</Title>
        <Button type="primary">
          <PlusOutlined />
          Add new board
        </Button>
      </Flex>
      <div className="grid grid-cols-4 gap-8">
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </div>
    </div>
  );
}

function BoardCard() {
  return (
    <Link to={'big-project'} className="p-3 rounded-xl bg-white shadow">
      <div className="bg-gray-200 h-32 rounded-xl mb-3"></div>
      <Title className="mb-5" level={5}>
        Title Board
      </Title>
      <Flex>
        <Space>
          <Avatar>AB</Avatar>
          <Avatar>CD</Avatar>
          <Avatar>EF</Avatar>
        </Space>
      </Flex>
    </Link>
  );
}
