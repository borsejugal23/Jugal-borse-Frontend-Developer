import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataGrid } from "../Redux/ProductListReducer/action";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import SingleData from "./SingleData";
export const SearchForm = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const { isLoading, isError, data_Grid } = useSelector(
    (store) => store.productReducer
  );
  const [searchForm, setSearchForm] = useState({
    type: "",
    status: "",
    original_launch: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchFormValue = (e) => {
    const { name, value } = e.target;
    setSearchForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchFormSubmit = () => {
    dispatch(FetchDataGrid({ ...searchForm, page: currentPage }));
  };
  useEffect(() => {
    dispatch(FetchDataGrid({ ...searchForm, page: currentPage }));
  }, [currentPage]);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  console.log(isLoading, isError, data_Grid);

  return (
    <div>
      <br />
      <p className="text-center md:text-left">
        <strong className="text-2xl mt-2.5 md:pl-36">Capsules</strong>
      </p>

      <div className="flex flex-col items-center justify-center p-8 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <input
          className="w-full md:w-1/5 p-2 border border-black rounded-md placeholder-gray-500"
          type="text"
          placeholder="Type"
          name="type"
          value={searchForm.type}
          onChange={handleSearchFormValue}
        />
        <input
          className="w-full md:w-1/5 p-2 border border-black rounded-md placeholder-gray-500"
          type="text"
          placeholder="Original launch"
          name="original_launch"
          value={searchForm.original_launch}
          onChange={handleSearchFormValue}
        />
        <select
          className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 p-2 border border-black rounded-md"
          name="status"
          value={searchForm.status}
          onChange={handleSearchFormValue}
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
          <option value="destroyed">Destroyed</option>
        </select>

        <button
          className="w-full md:w-1/5 p-2 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={handleSearchFormSubmit}
        >
          Search
        </button>
        {/* <button className="border-2 h-9 w-7 bg-black text-white rounded-md hover:bg-gray-800"> <FiRefreshCw className="size-5 text-neutral-100"/></button> */}
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen mt-[-10%] ">
          <Spinner
            thickness="3px"
            speed="0.600s"
            emptyColor="gray.200"
            color="black.500"
            size="xl"
          />
        </div>
      ) : isError ? (
        <p className="text-center text-red-500">Page not found</p>
      ) : data_Grid.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 p-8">
          {data_Grid?.map((item) => (
            <SingleData key={item.capsule_serial} data={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="https://students.masaischool.com/static/media/assignment-article.306c336bf8778468914b433407306985.svg"
            alt="Data not found"
            className="w-1/4 md:w-1/3 lg:w-1/6"
          />
          <h1 className="text-xl md:text-xl lg:text-2xl">Data not found</h1>
        </div>
      )}
      <br />
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 border border-blue-600 rounded-md hover:bg-gray-200 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* Display page numbers */}
        <span className="px-4 py-2 font-semibold">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 border  border-blue-600 rounded-md hover:bg-gray-200 ${
            data_Grid.length === 0 ||
            data_Grid.length < 10 ||
            (data_Grid.length < 10 && currentPage !== 1)
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={
            data_Grid.length === 0 ||
            data_Grid.length < 10 ||
            (data_Grid.length < 10 && currentPage !== 1)
          }
        >
          Next
        </button>
      </div>
      <br />
     
    </div>
  );
};
