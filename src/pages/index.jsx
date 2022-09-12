import Default from '@/layout/Default';
import Head from 'next/head';

const Index = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl text-red-500">Toko Mekar Elektronik</h1>
    </div>
  );
};

Index.getLayout = page => {
  return <Default>{page}</Default>;
};

export default Index;
