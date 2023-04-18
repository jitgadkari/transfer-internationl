import React from 'react'

export default function Region(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };
  return (
    <div className='Region-filter'>
      <div className='Region-filter_control'>
        <label>Filter By Region</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='Asia Pacific'>Asia Pacific</option>
          <option value='North America'>North America</option>
          <option value='Europe'>Europe</option>
        </select>
      </div>
    </div>
  )
}
