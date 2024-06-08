import React, { useState } from 'react'
import InputFilterSearch from '../SearchInput';
import { SearchAssociation } from '../../pages/ListOfAssociations/style';

const FilterSearch = () => {
    const [search, setSearch] = useState<string>('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

  return (
    <>
     <SearchAssociation>
            <InputFilterSearch
                value={search}
                onChange={handleSearchChange}
                placeholder="Pesquisar..." />
    </SearchAssociation>
    </>
  )
}

export default FilterSearch 