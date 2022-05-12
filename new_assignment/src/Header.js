import React from 'react';
import './Header.css';
import {useState} from 'react';



function Header({setSearch, search}) {
    const [typing, setTyping] = useState("hi");

    return (
    <div className='header'>
        
            <img 
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD///8EBAQKCgr39/f7+/v4+PjT09PIyMgrKyv09PSCgoLx8fGQkJDu7u4nJyelpaWwsLDn5+cdHR3Dw8MiIiKVlZXg4OATExO2tra9vb2GhoY+Pj5cXFyqqqpsbGwYGBh4eHgvLy9ISEhQUFA5OTnX19ednZ1lZWVxcXFYWFhPT080NDRDQ0PnExDgAAAJyElEQVR4nO2cCXuiMBCGQQEtHnghKl5o69Ft///f21yEcNtMbJs++XatBWOYl8k5CbU6f13WX5ch1F+GUH8ZQv1lCPWXIdRfhlB/GUL9ZQj1lyHUX4ZQfxlC/WUI9Zch1F+GUH8ZQv1lCPWXIdRfhlB/GUL9ZQj1lyHUX4ZQfxlC/WUI9Zch1F+GUH8ZQv1lCPWXIdRf6giDZN+/RFFvs9zVJTmP1r0IJZnGb8ou2ypFhKtRZAta7MpZn9eOkGI8+fimAqTmIntX5MMH0S2f4txjHwi3IVBy7TaBCVEGSd5ypl4oZL6uSmFfoRd/0ECoNpXWI4/x+vg2rk5gX7rwy7cJThhVWk80oine61P4J/D12wQmbAC07Rjn3wBo286HCoomQQjxd3uCtb1rcjvE05lQDA+W9SGkGG9G99t9uRBa1bEqkiYrAZpklsb85JvQrrxYGXD/nSc5ZK7vwyxoFYzwH7dzkju/jVIn9vg9GOb7yAH/6gBkQqtghNwTt+Inpe7hUkzxMUzLMsiEVoEID6n57+WMCohROUXoc/8/c3ADyjt1YZLPhj4CfxEB/fzV6PvntzgRQpha2E+zSda9/mTLPj1lfC4qxTRFuOz3NrziLfkdeqIghGkjcqL53FgfsCh8jNRjp6aMOGbXHfJb9DxBCCOBqCM0jjOaaTcjZA1R1nmypnf5DcUUQsisPZCDz4wndRkHGtIrTYUkd5LihR39AzE0C0C4ZebRI3FwY9Mxd1rNWLk9iSnYUIYNB57ZJQIIb6xMkoNANN/ekHO79HBJLnQVErj2K0myoIfPnEYBCFnFo135LUcYkXOpk5mL+rkkdN6xpwdTGESj4IS00t1z5tMy+JYe0t4gV46Z21h7u4ZBNApAmIg+zE+R6Llz3of5mfKAXJo1PnsoRoMAhKyaDWk+uUgGtZgP6mjfEOcIabSNldwlDKJRAMJ04jcnR7lx6AfJmXf5rPcQbwIbiI/FYvwcQfpDVyyDohMnNGc+82A9+kAg/CRn0nK8rb6AEkEIezl3nDki7Suyhob3d9k47kCvzaqhDzCiVRDCETOXxdRCWqn8dLK/yAjTUMWd9vCXLb3uKn9LniMI4ZwZGKU5nQbXEQ8h7jJAF/V+7EKvo+tgm153w2LEpfmzSoHmh2kfXm7sUba+Lao08kSTyKTg4ecIRPia2j8qfxblY/hOOYTPnRyXv61QsPgBr2qTQlYvPMLmpSU1F+noCC3rDGRCq2Dx0hX3U/QpfpJ17tOsi8iV5dWC+/jdeqqAMSBhONpP24tglC1TzMQBt8cjHK/C+OC5cSh4VH8iVDf3spmuF1kEGJ3BgxvxxLi/nq57YiPUa70EUOD7V71uxvQPN5nH6pUnqlIYVbngJWRSa73P6manfvXm2SF9S8kKaVLnnjlPVLfEOGnIWJVU1PKgV2V9ro+8DytSRM8MQHGpacdul6L1+7nwMb7I0imkmA3S6PhzpeoS233WZHq9ylHKYZG1oeN17ZaUKhvnb6832cGrwpsY7uLrfrJMzvVJtvflZDIZHb64tk0mMbITEADharSetGTQsc6H5iTos9F60JyGtlOyEUd5whMuc1HL5qZBe3uJxzxN3X7A+hrZSIc8IevqSbS3qsVAp4J+a5OZ0AaovlbuoMNXWcIOD3/O7jXZdPlYYFO34WJH2mDXqwnrd7I4Al3hkrNUVlknOKuYHlpbcR2GbnQrKqF9jO+6VRNMomyo4MnaqYIQqZ/fbfh+FYfbtH+Y3lZCiiDZsOLnuv7QS4Kq3VGhMNyTnkUqIsSuuKwnozhe7hdR5T43xDLrT5dxPLqu+2QwTpM57hD7sGIb37snTFyk5yDqCGXlOZ7vDrovpQuMcsmklzbUEjpOjfsahHyIWppVyYeF0br0ApxaQt8vjj5b4GxcD52hM+qKlRRZFRZnXNKB/58kdHyfIDrl3mLnFRNLz0PUEbq4QmFC1/eI3Q610mNFF59AMA5P7ZL0DjrhY8LO8WhZ+GXhKugVy/u80ZjvIHR95BJM6BGrHfzTIVyOg5FddAadY17GZxGtx97dvbUKVscAvzq4CjrMv1zS3aE6QmI9th8TudR05EXChx2CidEvPsElqR3CyxJ/opE86hJXK2t1jIh3/VzQXD6oqooQFU100930vqN3WhzxGXLWZQfUIz4uupjSRe8eZt/HSTIYoP+xbyNAfC/E/OVDcqoIsS/sxShG/4jQW7wkRzE9Ss+iFyqEHi7B+DsuLteIxstuA3bpEEHm8l8DRtBqCLHJAwsPvbr4Byps3SNO1e2Qo/TVRa+OdXCJh9IS6pH/vo0KsUd+952hV2iU5dfBFZbSyAq6odWdz1Geq+MxPM7nXSu0gnknXB2tcL6yQvR50EWtYs/1PFxWvbTS5ghR6+QiJ9rueMw55dfBlbU0jrNAQ+UjIgxxngHyV7cbWCvEHAaccI4Jj9bUJWXQ8YeoQtrUb4gUNTyk/tEWyPaHQx6ie/15QnTHrRAXxZD2XPMQCf26CkPSBWDwY9i15gFqMyOPdpG0xUR1EQ1sfEyM66WLvetjnwo+DH8B4RcGx/Vhct7e0jfeJQJ2LyodtQ37D6lpHaNGgDXGn589PSTACpUmhICtfZoQAraFaUJ4//OEDSsFf4RQenaoC6H87FAXQsCQRhdC+WGpLoSAxxXUEroPqfjY+gMCPK6gknD24ALYufHZ4UoBdqCqJDw+/N0vxY2xABuLFBJ+YXRct7+mVkNpM1USXh7PbFFF0ShpM5WW0of/YEnw9fWbz/Zca6SS0E9OLw/odJCYAh9+BeEzVbcMrhHhZsl0rfx4+uMRYaiEnQzbqkL881F9oIQwXacy659fmQGqMO4shxvlw4m/k9BKSimk50+/lNDaFrfcSj+z8FsJcf5uSwrdCQuVUXpL+C8mzD89vahKoTlhJ9czRn+QMH8R6edM5QlL2/Mhqn5AryNWxqOkneA9wirkNsTSeGWUDXvLE/5rsvmLampG0soou3QB2KtfPQmo0axpybTlIVJaH2SXnyDPW9wfjZn177C/j0gqo+wGU3lCvD//tHwA8gJYOGLavh/i738agem0LG3pzsmVn52rEZCQfH1b3reeFVDAmooaKXru6W1SAenavnwASZnUPdl1npSiD8/8wzoPS+kDgOf9OPOfPYO3MCqkkhDn9TpNd01eFd8+WT3BiN30EvWXgJV3tfoVt/mpMoT6yxDqL0Oovwyh/jKE+ssQ6i9DqL8Mof4yhPrLEOovQ6i/DKH+MoT6yxDqL0Oovwyh/jKE+ssQ6i9DqL8Mof4yhPrLEOovQ6i/DKH+MoT6yxDqL0Oovwyh/jKEf0Hdv67/QSd4/YoawfoAAAAASUVORK5CYII='
            alt='Logo'
            className='header__logo'
            />
    
        
        <div 
            className='header__search'>
            <input 
            className='header__searchInput'
            type="search"
            onChange ={ (event) => { 
                
                setTyping(event.target.value)
                setSearch(typing)}} />
            
        </div>
        
        <div className='header__nav'>
            <div className='header__option'>
            <span className='header__optionLine1'>
                hello guest
            </span>
            <span className='header__optionLine2'>
                Sign In
            </span>

            </div>
                <div className='header__option'>
                <span className='header__optionLine1'>
                    Your
                </span>
                <span className='header__optionLine2'>
                    Watch Later 
                </span>

            </div>
                <div className='header__option'>
                    <span className='header__optionLine1'>
                        Your
                    </span>
                    <span className='header__optionLine2'>
                        Favs
                    </span>

            </div>
            
                    <div className='header__cart'>
                    <span className='header__optionLine1'>
                        Your
                    </span>
                        <span className='cart__name'>Membership</span>
                    </div>
                    
                
        </div>

    </div>)
}

export default Header;