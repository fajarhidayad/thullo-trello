import {
  CloseOutlined,
  FileImageFilled,
  LockFilled,
  PlusOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Flex, Input, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function BoardListPage() {
  const [newBoardModal, setNewBoardModal] = useState(false);

  return (
    <div className="mt-14 max-w-7xl mx-auto">
      <Flex justify="space-between" align="center" className="mb-10">
        <Title level={4}>All Boards</Title>
        <Button type="primary" onClick={() => setNewBoardModal(true)}>
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
      <Modal
        centered
        open={newBoardModal}
        width={400}
        onClose={() => setNewBoardModal(false)}
        onCancel={() => setNewBoardModal(false)}
        destroyOnClose
        closeIcon={<Button icon={<CloseOutlined />} type="primary" />}
        className="px-6 pt-7"
      >
        <div className="rounded-lg h-20 bg-gray-200 mb-2.5"></div>
        <Input className="shadow mb-5" placeholder="Add board title" />
        <Flex justify="space-between" className="space-x-5 mb-5">
          <Button className="flex-1" icon={<FileImageFilled />}>
            Cover
          </Button>
          <Button className="flex-1" icon={<LockFilled />}>
            Private
          </Button>
        </Flex>
      </Modal>
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
