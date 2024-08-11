import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-sky-50">
      <h1 className="text-center text-5xl font-bold text-blue-600 mb-5">
        Thullo Trello
      </h1>
      <Button type="primary" size="large" onClick={() => navigate('/boards')}>
        Dashboard
      </Button>
    </main>
  );
}
