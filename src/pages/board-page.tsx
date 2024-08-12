import {
  BulbOutlined,
  CloseOutlined,
  CommentOutlined,
  DeleteFilled,
  DownloadOutlined,
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
  Popover,
  Typography,
} from 'antd';
import { useState } from 'react';

const { Content } = Layout;
const { Text } = Typography;
const { TextArea, Search } = Input;

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
        width={680}
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
                      <Button size="small" icon={<DownloadOutlined />}>
                        Download
                      </Button>
                      <Button size="small" danger icon={<DeleteFilled />}>
                        Delete
                      </Button>
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
                    <Button danger type="text" size="small">
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
            <p className="font-medium text-gray-500 text-sm mb-3">
              <UserOutlined /> Actions
            </p>
            <div className="flex flex-col space-y-3 mb-5">
              <Popover
                content={
                  <>
                    <p className="text-xs text-gray-500 mb-3">
                      Search Unsplash for cover photo
                    </p>
                    <Search
                      enterButton
                      placeholder="Keywords..."
                      className="mb-5"
                    />
                    <div className="grid grid-cols-4 gap-x-2 gap-y-3">
                      <div className="bg-gray-200 rounded h-[50px]"></div>
                      <div className="bg-gray-200 rounded h-[50px]"></div>
                      <div className="bg-gray-200 rounded h-[50px]"></div>
                      <div className="bg-gray-200 rounded h-[50px]"></div>
                      <div className="bg-gray-200 rounded h-[50px]"></div>
                      <div className="bg-gray-200 rounded h-[50px]"></div>
                    </div>
                  </>
                }
                placement="bottomLeft"
                trigger={'click'}
                title="Photo Search"
              >
                <Button icon={<FileImageOutlined />}>Cover</Button>
              </Popover>
              <Popover
                title="Label"
                content={
                  <>
                    <p className="text-xs text-gray-500 mb-3">
                      Enter a label name and color
                    </p>
                    <Input placeholder="Enter label name" className="mb-4" />
                    <div className="grid grid-cols-4 gap-x-2 gap-y-3 mb-4">
                      <div className="bg-green-400 rounded h-[27px]"></div>
                      <div className="bg-yellow-400 rounded h-[27px]"></div>
                      <div className="bg-orange-400 rounded h-[27px]"></div>
                      <div className="bg-red-400 rounded h-[27px]"></div>
                      <div className="bg-blue-400 rounded h-[27px]"></div>
                      <div className="bg-sky-400 rounded h-[27px]"></div>
                      <div className="bg-emerald-400 rounded h-[27px]"></div>
                      <div className="bg-gray-400 rounded h-[27px]"></div>
                    </div>
                    <p className="text-gray-500 text-xs font-medium mb-2">
                      Available
                    </p>
                    <Flex className="space-x-2 mb-5">
                      <p className="bg-sky-200 text-sky-600 px-2 py-0.5 rounded-full text-xs">
                        Technical
                      </p>
                      <p className="bg-emerald-200 text-emerald-600 px-2 py-0.5 rounded-full text-xs">
                        Design
                      </p>
                    </Flex>
                    <Button type="primary" className="block mx-auto">
                      Add
                    </Button>
                  </>
                }
                placement="bottomLeft"
                trigger={'click'}
              >
                <Button icon={<BulbOutlined />}>Labels</Button>
              </Popover>
            </div>
            <p className="font-medium text-gray-500 text-sm mb-3">
              <UsergroupAddOutlined /> Members
            </p>
            <ul className="space-y-4 mb-5">
              <li className="flex items-center space-x-2">
                <Avatar className="flex-shrink-0">JD</Avatar>
                <p className="font-semibold text-sm">Johnny Depp</p>
              </li>
              <li className="flex items-center space-x-2">
                <Avatar className="flex-shrink-0">HC</Avatar>
                <p className="font-semibold text-sm">Henry Cavill</p>
              </li>
            </ul>
            <Popover
              content={
                <>
                  <p className="text-xs text-gray-500 mb-3">
                    Assign members to this card
                  </p>
                  <Search
                    placeholder="Search member"
                    enterButton
                    className="mb-2.5"
                  />
                  <ul className="mb-5 py-3">
                    <li className="flex items-center space-x-2">
                      <Avatar>KR</Avatar>
                      <p className="text-xs font-medium">Keanu Reeves</p>
                    </li>
                  </ul>
                  <Button type="primary" className="mx-auto block">
                    Invite
                  </Button>
                </>
              }
              trigger={'click'}
              placement="bottomLeft"
              title="Members"
            >
              <Button
                type="primary"
                ghost
                icon={<PlusOutlined />}
                iconPosition="end"
                size="small"
                className="text-xs"
              >
                Assign a member
              </Button>
            </Popover>
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
