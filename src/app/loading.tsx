import Loading from '@/app/components/reusables/loading/loading';

function LoadingScreen() {
  return (
    <div
    className="flex items-center justify-center"
    style={{ height: '100vh' }}
    >
      <Loading />
    </div>
  );
}

export default LoadingScreen;