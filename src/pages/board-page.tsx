import {
  BulbOutlined,
  CloseOutlined,
  CommentOutlined,
  EditFilled,
  EllipsisOutlined,
  FileImageOutlined,
  FileTextFilled,
  LockFilled,
  PaperClipOutlined,
  PlusOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Input,
  Layout,
  Modal,
  Typography,
} from 'antd';
import { useState } from 'react';

const { Content } = Layout;
const { Text } = Typography;
const { TextArea } = Input;

export default function BoardPage() {
  return (
    <div className="mt-14 max-w-7xl container">
      <Flex className="mb-7">
        <Dropdown
          menu={{
            items: [
              { key: 1, label: 'Private' },
              { key: 2, label: 'Public' },
            ],
          }}
          trigger={['click']}
          className="mr-5"
        >
          <Button type="default" icon={<LockFilled />}>
            Private
          </Button>
        </Dropdown>
        <Flex className="mr-5">
          <Avatar>UK</Avatar>
        </Flex>
        <Button type="primary">
          <PlusOutlined />
        </Button>
        <Dropdown
          menu={{
            items: [
              { key: 1, label: 'Private' },
              { key: 2, label: 'Public' },
            ],
          }}
          trigger={['click']}
          className="mr-5"
        >
          <Button
            type="default"
            icon={<EllipsisOutlined />}
            className="ml-auto"
          >
            Show Menu
          </Button>
        </Dropdown>
      </Flex>
      <Layout>
        <Content className="bg-slate-200/80 rounded-xl min-h-[75vh] flex flex-col">
          <div className="flex overflow-x-auto space-x-8 flex-1 px-6 pt-7">
            <CardContainer />
            <CardContainer />
            <div className="flex-shrink-0 w-[243px]">
              <AddAnotherCardButton />
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

function CardContainer() {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <div className="flex-shrink-0 w-[243px]">
      <Flex className="mb-4" align="center" justify="space-between">
        <Text className="font-medium text-sm">Backlog</Text>
        <Dropdown
          trigger={['click']}
          menu={{
            items: [
              { key: 0, label: 'Rename' },
              { key: 1, label: 'Delete this list' },
            ],
          }}
          placement="bottomRight"
        >
          <button>
            <EllipsisOutlined className="text-xl" />
          </button>
        </Dropdown>
      </Flex>
      <ul className="space-y-7">
        <li
          className="bg-white rounded-xl shadow p-3"
          onClick={() => setCardOpen(true)}
        >
          <Text className="font-medium">
            ✋🏿 Add what you'd like to work on below
          </Text>
          <Flex className="mt-3 mb-5">
            <div className="bg-purple-100 text-purple-500 font-medium text-xs rounded-full py-0.5 px-2.5">
              Concept
            </div>
          </Flex>
          <Flex align="center" justify="space-between">
            <Flex align="center" className="space-x-2">
              <Avatar size={28}>K</Avatar>
              <Button
                size="small"
                icon={<PlusOutlined />}
                type="primary"
              ></Button>
            </Flex>
            <Flex className="space-x-2 text-gray-400">
              <span>
                <CommentOutlined /> 0
              </span>
              <span>
                <PaperClipOutlined /> 0
              </span>
            </Flex>
          </Flex>
        </li>
        <AddAnotherCardButton />
      </ul>
      <Modal
        centered
        open={cardOpen}
        width={660}
        onClose={() => setCardOpen(false)}
        onCancel={() => setCardOpen(false)}
        destroyOnClose
        cancelButtonProps={{ className: 'hidden' }}
        okButtonProps={{ className: 'hidden' }}
        closeIcon={<Button icon={<CloseOutlined />} type="primary" />}
      >
        <div className="h-32 rounded-xl bg-gray-300 mb-6"></div>
        <div className="grid grid-cols-4 gap-x-5">
          <section className="col-span-3">
            <h2 className="mb-1.5 text-lg font-medium">
              ✋🏿 Move anything that is actually started here
            </h2>
            <p className="text-xs text-gray-500 mb-5">
              in list <span className="font-bold text-black">In Progress</span>
            </p>

            <Flex align="center">
              <p className="mr-3 font-medium text-xs text-gray-400">
                <FileTextFilled /> Description
              </p>
              <Button icon={<EditFilled />} size="small">
                {' '}
                Edit
              </Button>
            </Flex>
            <article className="text-sm mt-3 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              consectetur doloremque aspernatur dolore, iste dignissimos commodi
              dolores doloribus, inventore et error fuga consequatur veniam
              reiciendis eligendi. Odio nihil ipsa dolorum. Velit totam commodi
              exercitationem distinctio facere numquam cum non debitis, quasi
              eveniet vitae ut voluptate esse fugit hic provident labore dolore.
              Nesciunt quia animi quas, perferendis architecto repudiandae optio
              tempora! Tenetur, consequatur vel.
            </article>
            <Flex align="center" className="mb-3">
              <p className="mr-3 font-medium text-xs text-gray-400">
                <FileTextFilled /> Attachments
              </p>
              <Button icon={<PlusOutlined />} size="small">
                {' '}
                Add
              </Button>
            </Flex>
            <ul className="mb-8">
              <li>
                <Flex>
                  <div className="bg-gray-200 rounded-lg w-20 h-12 mr-3"></div>
                  <div>
                    <p className="font-medium text-xs text-gray-400">
                      Added August 10, 2024
                    </p>
                    <p className="font-medium text-sm mb-1">
                      Reasoning by Ranganath Krishnamani
                    </p>
                    <Flex className="space-x-2">
                      <Button size="small">Download</Button>
                      <Button size="small">Delete</Button>
                    </Flex>
                  </div>
                </Flex>
              </li>
            </ul>

            <div className="bg-white rounded-xl shadow p-3 border mb-6">
              <Flex className="space-x-2">
                <Avatar className="flex-shrink-0">U</Avatar>
                <div className="flex-1 text-right">
                  <TextArea
                    showCount
                    maxLength={255}
                    placeholder="Write a comment..."
                    className="mb-7"
                    style={{ resize: 'none', height: 120 }}
                  />
                  <Button type="primary">Comment</Button>
                </div>
              </Flex>
            </div>
            <ul>
              <li className="last:border-b-0 border-b py-3 pb-5">
                <Flex className="mb-3">
                  <Avatar>U</Avatar>
                  <div className="ml-3 mr-auto">
                    <p className="text-sm font-medium">User</p>
                    <p className="text-xs text-gray-400">24 August at 20:43</p>
                  </div>
                  <Flex>
                    <Button type="text" size="small">
                      Edit
                    </Button>
                    <Button type="text" size="small">
                      Delete
                    </Button>
                  </Flex>
                </Flex>
                <p>
                  Once the ideas is clearly defined, the task can move to #todo
                  stage.{' '}
                </p>
              </li>
            </ul>
          </section>
          <section>
            <p className="font-semibold text-gray-500 text-sm mb-3">
              <UserOutlined /> Actions
            </p>
            <div className="flex flex-col space-y-3">
              <Button icon={<UsergroupAddOutlined />}>Members</Button>
              <Button icon={<BulbOutlined />}>Labels</Button>
              <Button icon={<FileImageOutlined />}>Cover</Button>
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
}

function AddAnotherCardButton() {
  return (
    <li className="cursor-pointer bg-blue-200 text-blue-500 rounded-lg py-2 px-3 flex items-center justify-between text-xs font-medium">
      <p>Add another card</p>
      <PlusOutlined />
    </li>
  );
}
