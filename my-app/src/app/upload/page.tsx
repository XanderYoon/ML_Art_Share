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
            <h1 className="text-6xl font-bold text-white font-inter"> Get a valuation.</h1>
            <h1 className="text-xl font-medium text-white font-inter">
            Our advanced art analysis platform leverages
            <span style={{ color: '#F7CA18', fontWeight: 'bold' }}> state-of-the-art gradient boosting models</span>, trained on a large dataset encompassing 700+ art pieces, to deliver insights about your art piece.
            </h1>
            <div style={{ height: '20px' }}></div>
                <div className="form-control">
                <div className="mb-3">
                    {/* <label className="form-label">Year of Creation:</label> */}
                    <input type="number" name="yearCreation" className="form-control" placeholder="Year of Creation" />
                </div>
                
                <div className="mb-3">
                    {/* <label className="form-label">Period:</label> */}
                    <input type="text" name="period" className="form-control" placeholder="Period" />
                </div>
                <div className="mb-3">
                    {/* <label className="form-label">Movement:</label> */}
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
                        <label className="form-check-label" htmlFor="right">Signed Right</label>
                    </div>

                    {/* Left */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="left" id="left" value="1" />
                        <label className="form-check-label" htmlFor="left">Signed Left</label>
                    </div>

                   

                    {/* Direct from Publisher */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="direct_from_publisher" id="direct_from_publisher" value="1" />
                        <label className="form-check-label" htmlFor="direct_from_publisher">Direct from Publisher</label>
                    </div>

                    {/* Frame Abrasion */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="frame_abrasion" id="frame_abrasion" value="1" />
                        <label className="form-check-label" htmlFor="frame_abrasion">Frame Abrasion</label>
                    </div>

                    {/* Original Condition */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="original_condition" id="original_condition" value="1" />
                        <label className="form-check-label" htmlFor="original_condition">Condition: Original</label>
                    </div>

                     {/* Excellent Condition */}
                     <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="excellent" id="excellent" value="1" />
                        <label className="form-check-label" htmlFor="excellent">Condition: Excellent</label>
                    </div>
                    

                    {/* Very Good */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="very_good" id="very_good" value="1" />
                        <label className="form-check-label" htmlFor="very_good">Condition: Very Good</label>
                    </div>

                    {/* Not Examined */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="not_examined" id="not_examined" value="1" />
                        <label className="form-check-label" htmlFor="not_examined">Not Examined</label>
                    </div>

                    {/* Tears */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="tears" id="tears" value="1" />
                        <label className="form-check-label" htmlFor="tears">Tears</label>
                    </div>

                    {/* Occasional Marks */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="occasional_marks" id="occasional_marks" value="1" />
                        <label className="form-check-label" htmlFor="occasional_marks">Occasional Marks</label>
                    </div>

                    {/* Oxidation */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="oxidation" id="oxidation" value="1" />
                        <label className="form-check-label" htmlFor="oxidation">Oxidation</label>
                    </div>

                    {/* Scratches */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="scratches" id="scratches" value="1" />
                        <label className="form-check-label" htmlFor="scratches">Scratches</label>
                    </div>

                    </div>

                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#0081FB", color: "white", borderRadius: "8px", padding: "10px 20px", fontFamily: "Inter", fontSize: "16px", fontWeight: "bold" }}>Analyze</button>
                </form>
            {/* Prediction display */}
            {prediction && (
                <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                    <div style={{ position: 'absolute', top: '-350px', left: '600px' }}>
                        <div className="rounded-lg bg-white p-4">
                            <div className="text-3xl font-bold text-black font-inter" style={{ textAlign: "center" }}>
                                <div style={{ color: "#111111" }}>Suggested Price Range</div>
                                <div style={{ height: '20px' }}></div>
                                {prediction && <div style={{ color: "#9b59b6 ", fontWeight: "bold" }}>$35,000 - $45,000</div>}
                                <div style={{ height: '20px' }}></div>
                                <div className="text-medium font-medium text-black font-inter" style={{ textAlign: "center" }}>
                                <div>An early <strong>20th-century painting</strong> in <strong>excellent</strong> condition, showcasing <strong>Modern Cubism</strong> and slight <strong>oxidation</strong>, is valued between $35,000 and $45,000, blending historical significance with artistic innovation.</div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
              
              
              
            )}
        </div>
    );
}

