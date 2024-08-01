export default function Pagination() {
  return (
    <div className="flex items-center justify-between w-10/12 pt-6">
      <div className="flex space-x-4">
        <div className=" py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] px-14">
          <span className="text-[#48556C] text-sm">Previous</span>
        </div>
        <div className="px-14 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED]">
          <span className="text-[#48556C] text-sm">Next</span>
        </div>{' '}
      </div>

      <p className="text-sm">Page 0 of 0</p>
    </div>
  )
}
