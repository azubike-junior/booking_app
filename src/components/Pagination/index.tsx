import { useEffect, useState } from "react";

const Pagination = ({
  pageChangeHandler,
  totalRows,
  rowsPerPage,
  currentPage,
  slicePageNo,
  setSlicePageNo,
}: any) => {
  // Calculating max number of pages
  const noOfPages = Math.ceil(totalRows / rowsPerPage);

  // const { pathname } = useLocation()
// 
  // Creating an array with length equal to no.of pages
  // const pagesArr = [...new Array(noOfPages)];

  // Navigation arrows enable/disable state
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  // const [searchParams, setSearchParams] = useSearchParams()

  // These variables give the first and last record/row number
  // with respect to the current page
  const [pageFirstRecord, setPageFirstRecord] = useState(1);
  const [pageLastRecord, setPageLastRecord] = useState(rowsPerPage);

  // Onclick handlers for the butons
  const onNextPage = () => {
    pageChangeHandler(currentPage + 1);
    setSlicePageNo(slicePageNo + 1);
  };
  const onPrevPage = () => {
    pageChangeHandler(currentPage - 1);
    setSlicePageNo(slicePageNo - 1);
  };


  // useEffect(() => {
  //   if(currentPage){
  //     setSearchParams({"page": currentPage})
  //   }
  // }, [currentPage])
  // Disable previous and next buttons in the first and last page
  // respectively
  // useEffect(() => {
  //   if(pathname === "/wallets/transactions"){
  //     setCanGoBack(currentPage > 0)
  //     setCanGoNext(currentPage < noOfPages);
  //   } else {
  //     setCanGoNext(currentPage < noOfPages);
  //     setCanGoBack(currentPage > 1);
  //   }
   
  // }, [noOfPages, currentPage]);

  // useEffect(() => {
  //   if(pathname === "/wallets/transactions"){
  //     const num = (currentPage + 0) * rowsPerPage;
  //     setPageFirstRecord(num + 1)
  //   } else {
  //     const skipFactor = (currentPage - 1) * rowsPerPage;
  //     // Some APIs require skip for pagination. If needed, use that instead
  //     setPageFirstRecord(skipFactor + 1);
  //   }
 
  // }, [currentPage, rowsPerPage]);

  useEffect(() => {
    const count = pageFirstRecord + rowsPerPage;
    setPageLastRecord(count > totalRows ? totalRows : count - 1);
  }, [pageFirstRecord, rowsPerPage, totalRows]);

  return (
    <>
      <div className="flex pt-10 space-x-10 justify-center items-center">
        <div className="space-x-4">
          <button
            className="cursor-pointer bg-[#10375C] px-2 py-1 text-white rounded-lg"
            onClick={onPrevPage}
            disabled={!canGoBack}
          >
            Previous Page
          </button>
          <button
            className="cursor-pointer bg-[#10375C] px-2 py-1 text-white rounded-lg"
            onClick={onNextPage}
            disabled={!canGoNext}
          >
            Next Page
          </button>
        </div>
        <div>
          <span className="font-bold">
            Showing {pageFirstRecord} - {pageLastRecord} of {totalRows}
          </span>
        </div>
      </div>
    </>
  );
};

export default Pagination;
