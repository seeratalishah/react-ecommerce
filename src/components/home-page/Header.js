import React from 'react';

function Header({ search, setSearch, total }) {

  const getSearchResults = ()=>{
    if(search && total){
      return <p>Explore {total}+ products for "{search}"</p>
    }

    if(total){
      return <p>explore {total}+ products</p>
    }

    return <p>no products found for {search}</p>
  }
  return (
    <header className='header'>
        <div className="container">
         <input type="text" placeholder='search products' value={search} onChange={(e)=>setSearch(e.target.value)} />
         <div className="search-results">
          {
            getSearchResults()
          }
          
         </div>
        </div>
    </header>
  )
}

export default Header;