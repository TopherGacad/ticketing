import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

const DepartmentTable = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full max-h-full overflow-y-auto">
        <table className="w-full table-fixed border-collapse text-center border-l-[1px] border-r-[1px] border-b-[1px]"> {/* Added table-fixed */}
          <thead className="bg-[#EFEFEF] w-full sticky top-0">
            <tr className='h-[50px] border-b-[1px] text-[14px]'>
              <th className='h-[50px] w-[10%] '>ID</th>
              <th className='h-[50px] w-[30%]'>Department</th> {/* Set width here */}
              <th className='h-[50px] w-[25%]'>Date Created</th> {/* Set width here */}
              <th className='h-[50px] w-[25%]'>Created By</th> {/* Set width here */}
              <th className='h-[50px] w-[10%]'>Actions</th> {/* Set width here */}
            </tr>
          </thead>

          <tbody className='z-0'>
            {Array.from({ length: 30 }).map((_, index) => (
              <tr key={index} className='text-[#797979] border-b-[1px] text-[14px]'>
                <td>{index + 1}</td>
                {/* Apply width and truncate directly to the td */}
                <td className="truncate overflow-hidden whitespace-nowrap">
                  Management Information System developmental society sadfsdfsfdsdfsdfsdfsdfsdfsdfsdfsdf
                </td>
                <td className="truncate overflow-hidden whitespace-nowrap">Aug 27, 2024</td>
                <td className=" truncate overflow-hidden whitespace-nowrap">cjpanganiban@gmail.com</td>
                <td className="flex items-center justify-center truncate overflow-hidden whitespace-nowrap m-0 py-3"><RiDeleteBin6Fill className='text-[#E03131] text-[22px] cursor-pointer'/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentTable;
