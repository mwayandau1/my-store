import { useLoaderData, useNavigate, useLocation } from "react-router-dom"

function ComplexPaginationContainer() {
    const {meta} = useLoaderData()
    const {pageCount, page} = meta.pagination;

    const {search, pathname} = useLocation();
    const navigate = useNavigate()
    const handlePageChange = (pageNumber)=>{
      const searchParams = new URLSearchParams(search)
      searchParams.set('page', pageNumber)
      navigate(`${pathname}?${searchParams.toString()}`)

    }
    const addPageBtn = ({pageNumber, activeClass}) =>{
        return <button key={pageNumber}
        className={`btn btn-xs sm:btn-md border-none join-item
        ${activeClass? 'bg-base-300 border-base-300':''}`}
        onClick={()=>handlePageChange(pageNumber)}>
          {pageNumber}
        </button>
    }
    const renderPageButtons = () =>{
        const pageButtons = [];
        // FIRST BUTTON
        pageButtons.push(addPageBtn({pageNumber:1, activeClass:page===1}))
        // DOTS
        if(page > 2)
        {pageButtons.push(<button className="join-item btn btn-xs sm:btn-sm" key='dots-1'>
            ...
        </button>)}

        // ACTIVE
        if(page !== 1 && page !== pageCount){
        pageButtons.push(addPageBtn({pageNumber:page, activeClass:true}))
        }
        if(page <pageCount -1 ){
        pageButtons.push(<button className="join-item btn btn-xs sm:btn-sm" key='dots-12'>
        ...
    </button>)
        }
        // LAST BUTTON
        pageButtons.push(addPageBtn({pageNumber:pageCount, activeClass:page===pageCount}))
        return pageButtons
    }

    if(pageCount <2)return null
    return (
      <div className="mt-16 flex justify-end">
        <div className="join">
          <button className="btn-xs sm:btn-md join-item" onClick={()=>
              { let prevPage = page - 1;
                if(prevPage <1) prevPage === page
                return handlePageChange(prevPage)}}>
            prev
          </button>
          {renderPageButtons()}
          <button className="btn-xs sm:btn-md join-item" onClick={()=>{
            let nextPage = page + 1;
            if(nextPage >pageCount) nextPage === 1
            return handlePageChange(nextPage)}}>
            next
          </button>
        </div>
      </div>
    )
}

export default ComplexPaginationContainer