'use client'
import React from 'react';
import '../globals.css';

const Checkbox = ({ name, label }) => (
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" name={name} id={name} value="1" />
      <label className="form-check-label" htmlFor={name}>{label}</label>
    </div>
);

export default function Page() {
    const [prediction, setPrediction] = React.useState<number | null>(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle form submission logic, including prediction retrieval
        // For demonstration purposes, let's set a dummy prediction
        setPrediction(Math.random() * 1000);
    };

    return (
        <div className="container formcenter" >
            <form onSubmit={handleSubmit} className="formContainer">
                <h1 className='form-fontcolor'>Art Valuation</h1>
                <div className="form-control">
                <div className="mb-3">
                    <label className="form-label">Year of Creation:</label>
                    <input type="number" name="yearCreation" className="form-control" placeholder="Year of Creation" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Period:</label>
                    <input type="text" name="period" className="form-control" placeholder="Period" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Movement:</label>
                    <input type="text" name="movement" className="form-control" placeholder="Movement" />
                </div>
                </div>

                {/* Checkboxes */}
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="is_signed" id="is_signed" value="1" />
                        <label className="form-check-label" htmlFor="is_signed">Is Signed</label>
                    </div>
                    {/* Add more checkboxes similarly */}
                    {/* Dated */} 
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="dated" id="dated" value="1" />
                        <label className="form-check-label" htmlFor="dated">Dated</label>
                    </div>

                    {/* Right */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="right" id="right" value="1" />
                        <label className="form-check-label" htmlFor="right">Right</label>
                    </div>

                    {/* Left */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="left" id="left" value="1" />
                        <label className="form-check-label" htmlFor="left">Right</label>
                    </div>

                    {/* Excellent Condition */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="excellent" id="excellent" value="1" />
                        <label className="form-check-label" htmlFor="excellent"> Excellent Condition</label>
                    </div>

                    {/* Direct from Publisher */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="direct_from_publisher" id="direct_from_publisher" value="1" />
                        <label className="form-check-label" htmlFor="direct_from_publisher">Direct from Publisher</label>
                    </div>

                    {/* Frame Abrasion */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="frame_abrasion" id="frame_abrasion" value="1" />
                        <label className="form-check-label" htmlFor="frame_abrasion"> Frame Abrasion</label>
                    </div>

                    {/* Original Condition */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="original_condition" id="original_condition" value="1" />
                        <label className="form-check-label" htmlFor="original_condition"> Original Condition</label>
                    </div>
                    

                    {/* Very Good */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="very_good" id="very_good" value="1" />
                        <label className="form-check-label" htmlFor="very_good"> Original Condition</label>
                    </div>

                    {/* Not Examined */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="not_examined" id="not_examined" value="1" />
                        <label className="form-check-label" htmlFor="not_examined"> Not Examined</label>
                    </div>

                    {/* Tears */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="tears" id="tears" value="1" />
                        <label className="form-check-label" htmlFor="tears"> Tears</label>
                    </div>

                    {/* Occasional Marks */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="occasional_marks" id="occasional_marks" value="1" />
                        <label className="form-check-label" htmlFor="occasional_marks"> Occasional Marks</label>
                    </div>

                    {/* Oxidation */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="oxidation" id="oxidation" value="1" />
                        <label className="form-check-label" htmlFor="oxidation"> Oxidation</label>
                    </div>

                    {/* Scratches */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="scratches" id="scratches" value="1" />
                        <label className="form-check-label" htmlFor="scratches"> Scratches</label>
                    </div>

                    </div>

                <button type="submit" className="btn btn-primary">Predict Price</button>
            </form>

            {/* Prediction display */}
            {prediction && (
                <div className="mt-4">
                    <h3>Predicted Price: {Math.floor((prediction - 1000) / 1000) * 1000 / 100}-{Math.ceil((prediction + 1000) / 1000) * 1000 / 100}k</h3>
                </div>
            )}
        </div>
    );
}

