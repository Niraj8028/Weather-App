import React,{useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { API_KEY } from './Api'
import { API_OPTIONS } from './Api'

function Searchbar({onSearchChange}) {

    const [search, setSearch] = useState(null)

    const loadOptions=(inputValue)=>{
        return(
            fetch(`${API_KEY}/cities?minPopulation=1000000&namePrefix=${inputValue}`, API_OPTIONS)
	    .then(response => response.json())
	    .then(response => {
            return {
                options:response.data.map((city)=>{
                    return{
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name},${city.countryCode}`
                    }
                })
            }
        })
	    .catch(err => console.error(err))
        )
    }

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
    loadOptions={loadOptions}
    />

    
  )
}

export default Searchbar
