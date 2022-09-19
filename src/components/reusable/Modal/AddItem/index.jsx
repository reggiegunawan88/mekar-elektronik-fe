import React, { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import useModalAddItem from './hooks/useModalAddItem';

const ModalAddItem = ({ closeModal }) => {
  const { addItem } = useModalAddItem();
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-full p-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="w-full max-w-3xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
              Tambah Barang Baru
            </Dialog.Title>
            <div className="grid grid-cols-2 space-x-5 mt-5">
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-row justify-between items-center gap-x-3">
                  <span>Kode Barang</span>
                  <input type="text" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Nama Barang</span>
                  <input type="text" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Stok</span>
                  <input type="number" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Satuan</span>
                  <input type="text" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Jenis Barang</span>
                  <input type="text" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Merk Barang</span>
                  <input type="text" className="input-item" />
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Harga Pokok</span>
                  <input type="number" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Harga Markup 1</span>
                  <input type="number" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Harga Markup 2</span>
                  <input type="number" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Harga Markup 3</span>
                  <input type="number" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Harga Markup 4</span>
                  <input type="number" className="input-item" />
                </div>
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <span>Harga Markup 5</span>
                  <input type="number" className="input-item" />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-x-3 justify-end mt-5">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={addItem}
              >
                Tambah
              </button>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-error-3 bg-white border border-transparent rounded-md"
                onClick={closeModal}
              >
                Batal
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
};

export default ModalAddItem;
