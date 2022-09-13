import React from 'react';

const TableItems = () => {
  return (
    <div className="flex">
      <table className="w-full text-left rounded-lg border border-collapse">
        <thead className="text-xs text-gray-500 bg-gray-100 border-separate text-center">
          <tr>
            <th className="py-3 px-4 font-normal">Kode Barang</th>
            <th className="py-3 px-4 font-normal">Barcode</th>
            <th className="py-3 px-4 font-normal">Nama Barang</th>
            <th className="py-3 px-4 font-normal">Stok</th>
            <th className="py-3 px-4 font-normal">Satuan</th>
            <th className="py-3 px-4 font-normal">Jenis Barang</th>
            <th className="py-3 px-4 font-normal">Merk Barang</th>
            <th className="py-3 px-4 font-normal">Harga Pokok</th>
            <th className="py-3 px-4 font-normal">Harga Markup 1</th>
            <th className="py-3 px-4 font-normal">Harga Markup 2</th>
            <th className="py-3 px-4 font-normal">Harga Markup 3</th>
            <th className="py-3 px-4 font-normal">Harga Markup 4</th>
            <th className="py-3 px-4 font-normal">Harga Markup 5</th>
            <th className="py-3 px-4 font-normal">ACTION</th>
          </tr>
        </thead>
        <tbody className="items-center p-6 text-xs text-gray-900 text-center">
          {[Array[3]].map((row, idx) => (
            <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50' : ''}>
              <td className="p-4">001</td>
              <td className="p-4">1234567890</td>
              <td className="p-4">Kabel 1.5m</td>
              <td className="p-4">10</td>
              <td className="p-4">pcs</td>
              <td className="p-4">KAB</td>
              <td className="p-4">ROYCO</td>
              <td className="p-4">Rp 12,500</td>
              <td className="p-4">Rp 13,700</td>
              <td className="p-4">Rp 14,500</td>
              <td className="p-4">Rp 15,000</td>
              <td className="p-4">Rp 15,500</td>
              <td className="p-4">Rp 16,700</td>
              {/* action btn */}
              <td className="p-4">
                <div className="flex flex-row gap-x-2">
                  <button className="text-white bg-blue-500 p-2 rounded cursor-pointer">EDIT</button>
                  <button className="text-white bg-red-400 p-2 rounded cursor-pointer">HAPUS</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItems;
