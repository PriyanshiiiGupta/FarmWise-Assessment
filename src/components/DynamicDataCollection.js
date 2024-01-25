// components/DynamicDisplayScreen.js

import React, { useState } from 'react';

const DynamicDisplayScreen = () => {
    const [formData, setFormData] = useState({
        department: '',
        mobile: '',
        dob: '',
        pincode: '',
    });

    const [fieldDataList, setFieldDataList] = useState([]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Perform actions with form data (submit logic)
        console.log("Form Data:", formData);
    };

    

    return (
        <div>
            <h2>Dynamic Display Screen</h2>
            <form>
                <label>
                    Department:
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Mobile:
                    <input
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    DOB:
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Pincode:
                    <input

                        type="number"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DynamicDisplayScreen;
