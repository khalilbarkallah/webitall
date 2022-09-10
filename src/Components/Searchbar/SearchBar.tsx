import { search } from "../../types/types"
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';


type SearchBarProps = {
    Searchs?: search[],
    OnSearch?: any,


}

export const SearchBar = (props: SearchBarProps) => {
    const { Searchs, OnSearch } = props
    return (



        <div className="search">

            {
                Searchs?.map((search: search) => {
                    return (
                        <div className="mainn">


                            <div className="searchInputs">
                                <input  className ="inputt"type="text" key={search.placeholder} placeholder={search.placeholder} />
                                <div className="searchIcon">
                                    <SearchIcon />
                                </div>
                            </div>
                            <div className=" dataResult">

                                {search.data.map((item: string) => {
                                    <a>{item[1]}</a>

                                })
                                }
                            </div>
                        </div>

                    )
                })
            }





        </div>
    )


}
SearchBar.defaultProps = {


    Searchs: [
        { data: ['E-Commerce', 'website', 'whynot', 'go fac ur self'], placeholder: 'Enter your folder name  ' },
    ]
}
