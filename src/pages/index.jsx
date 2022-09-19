import Login from '@/components/Login';
import Default from '@/layout/Default';
import Image from 'next/image';

const Index = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <span className="text-2xl">Toko Mekar Elektronik</span>
          <Image alt="logo" src="/assets/logo.png" width={300} height={300} layout="fixed" objectFit="contain" />
        </div>
        <Login />
      </div>
    </div>
  );
};

Index.getLayout = page => {
  return <Default>{page}</Default>;
};

export default Index;
