import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Search} from "../../libraries/SearchView";
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from "@mui/material/IconButton";
import {InputBase} from "@mui/material";
import {IContact} from "../../configurations/Contact";
import {useSearchLikelyContactsMutation} from "../../services/ContactsAPI";
import {IContactsWithSearchName} from "../SideContent/SideContent";

interface ISearchName {
    setterSearchContacts: (contactsData: IContactsWithSearchName) => void
}

function SearchBar(props: ISearchName) {
    const [searchInputText, setSearchInputText] = React.useState<string>('');
    const [searchLikelyContacts,] = useSearchLikelyContactsMutation();

    const search = async () => {
        await searchLikelyContacts(searchInputText)
            .unwrap()
            .then((contacts: IContact[]) => {
                props.setterSearchContacts({contacts: contacts, searchName: searchInputText})
            });
    }

    const handleCancelSearch = () => {
        setSearchInputText('');
        props.setterSearchContacts({contacts: [], searchName: ''})
    }

    return (
        <div>
            <Search sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div style={{marginTop: "auto", marginBottom: 4, marginRight: "10px", marginLeft: "5px"}}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    value={searchInputText}
                    onChange={(e) => {
                        setSearchInputText(e.target.value);
                    }}/>
                <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
                    <IconButton sx={{color: "black"}}>
                        <CancelIcon onClick={() => handleCancelSearch()} />
                    </IconButton>
                    <Button sx={{maxWidth: 80, height: "100%", marginRight: 0.1, marginBottom: 0.2, marginTop: "auto"}}
                            variant="contained" onClick={() => search()}>Искать</Button>
                </div>
            </Search>
        </div>
    );
}

export default SearchBar;
