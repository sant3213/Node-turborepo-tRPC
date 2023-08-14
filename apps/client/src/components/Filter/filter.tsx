import '../../styles/filter.css';

const Filter = () => {
    return (
        <div className='filter-container'>
            <div className="price-filter">
                <input type="text" />
            </div>
            <div className="brand-filter">
                <input type="text" />
            </div>
            <div className="line-filter">
                <input type="text" />
            </div>
            <div className="model-filter">
                <input type="text" />
            </div>
            <div className="year-filter">
                <input type="text" />
            </div>
            <div className="location-filter">
                <input type="text" />
            </div>
            <div className="km-filter">
                <input type="text" />
            </div>
            <div className="type-filter">
                <input type="text" />
            </div>
        </div>
    )
}

export default Filter;