import { useState } from 'react';
import s from './SearchField.module.css';
import { toast } from 'react-toastify';

function SearchField(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQueryChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            //Setting searchQuery state '' in case query got spaces
            setSearchQuery('');

            return toast.info("Input your search query");
        }

        props.onSubmit(searchQuery);
        
        setSearchQuery('');
    }

    return <form className={s.form} onSubmit={handleSubmit}>
        <input
            className={s.input}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder="Search movie..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
        />
        
        <button type="submit" className={s.button}>
            <i className="fa fa-search"></i>
        </button>
    </form>
}

export default SearchField;