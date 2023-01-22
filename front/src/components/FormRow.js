const FormRow = ({ type, name, value, handleChange, labelText,min,max,placeholder }) => {
    return (
      <div className='form-row'>

        <label htmlFor={name} className='form-label'>
        <p className="label">{labelText || name}</p>  
        </label>
        <input
        placeholder={placeholder}
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input form-font'
          min={Number(min)}
          max={Number(max)}
        />
      </div>
    )
  }
  
  export default FormRow
  