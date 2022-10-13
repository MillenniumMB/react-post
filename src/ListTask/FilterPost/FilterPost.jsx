import MyInput from "../../Component/MyInput/MyInput";
import MySelect from "../../Component/MySelect/MySelect";
import css from "./FilterPost.module.css"



const FilterPost = ( {filter, setFilter}) => {
    return (
        <div>
            <div className = {css.filterInput}>
                <MyInput
                    value={filter.search}
                    placeholder={'Поиск'}
                    onChange={e => setFilter({...filter, search: e.target.value})}
                />
            </div>
            <div className={css.positionSelect}>
                <MySelect
                    value={filter.selectedSort}
                    onChange={e => setFilter({...filter, selectedSort: e.target.value})}
                    nameSelect={{value: 'sort', name: "Сортировка"}}
                    option={[{value: 'title', name: "Название поста"}, {value: 'body', name: "Пост"}]}/>
            </div>
        </div>

    )

};

export default FilterPost