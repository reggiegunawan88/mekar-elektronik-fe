import TableItems from '@/components/TableItems';
import Default from '@/layout/Default';
import React, { useState } from 'react';
import ModalContainer from '@/components/reusable/Modal/ModalContainer';

const ItemList = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-y-3 m-4">
        <span className="text-3xl font-bold">Inventori Barang</span>
        <div className="flex flex-row justify-between items-center">
          {/* search input */}
          <div className="flex flex-row gap-x-2 items-center">
            <span>Kata Kunci :</span>
            <input
              type="text"
              placeholder="Cari barang"
              className="h-7 p-3 border border-dark-3 outline-none rounded"
            />
            <button className="btn-primary">Cari</button>
          </div>
          {/* btn add item */}
          <button className="btn-secondary" onClick={openModal}>
            Tambah Barang
          </button>
        </div>
        {/* table */}
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row justify-between items-center">
            <span className="text-lg">Daftar Barang</span>
            <span>Total barang: 1</span>
          </div>
          <TableItems />
        </div>
      </div>
      <ModalContainer isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

TableItems.getLayout = page => {
  return <Default>{page}</Default>;
};

export default ItemList;
