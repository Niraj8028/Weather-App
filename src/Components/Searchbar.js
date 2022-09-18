import React,{useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

function Searchbar({onSearchChange}) {

    const [search, setSearch] = useState(null)

    const handleChange=(searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData)
    }

  return (
    <AsyncPaginate
    placeholder={"search the city"}
    debounceTimeout={600}
    value={search}
    onChange={handleChange}
    />

    
  )
}

export default Searchbar
