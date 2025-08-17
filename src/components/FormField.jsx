import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {


    return (
        <div>
            <div className='flex itmes-center gap-3 mb-3' >
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-900"
                >
                    {labelName}
                </label>
                {
                    isSurpriseMe && (
                        <button
                            className='font-semibold text-xs bg-white py-1 px-2 rounded-[5px] text-black'
                            onClick={handleSurpriseMe}
                            type='button'
                        >
                            Surprise me
                        </button>

                    )
                }

            </div>
            <input className='w-full border  bg-white p-1  placeholder-[#b6b9bc] rounded-lg foucs:ring-[#9fbf93] focus:border-[#659a5b]'
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
            >

            </input>

        </div>
    )
}

export default FormField
