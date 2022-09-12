import Default from '@/layout/Default';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-blue">
      <div className="flex flex-col gap-y-5 text-center">
        <span className="text-3xl">Menu Utama</span>
        <div className="grid grid-cols-2 gap-2">
          <button className="btn-dashboard">
            <span>Daftar Barang</span>
          </button>
          <button className="btn-dashboard">
            <span>Pembelian</span>
          </button>
          <button className="btn-dashboard">
            <span>Penjualan</span>
          </button>
          <button className="btn-dashboard">
            <span>Rekap</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = page => {
  return <Default>{page}</Default>;
};

export default Dashboard;
