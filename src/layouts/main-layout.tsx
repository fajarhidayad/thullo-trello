import { Layout } from 'antd';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

const { Content, Footer } = Layout;

export default function MainLayout() {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Content
          style={{
            minHeight: 'calc(100vh - 64px - 69px)',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      <Footer className="text-center text-sm text-gray-600">
        Thullo Trello &copy; {new Date().getFullYear()} Created by Fajar Hidayad
      </Footer>
    </Layout>
  );
}
