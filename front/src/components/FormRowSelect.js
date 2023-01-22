const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label dark form-font'>
          {labelText || name}
        </label>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className='form-select light form-font'
        >
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
  
  export default FormRowSelect