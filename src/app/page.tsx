import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from '@/components/TopMenu';
import MiddleSection from '@/components/MiddleSection';
import BottomMenu from '@/components/BottomMenu';

export default function Home() {
  return (
    <main>
      <TopMenu />
      <MiddleSection />
      <BottomMenu />
    </main>
  );
}
