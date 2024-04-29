import React, { useState } from 'react';
import './home.css';

export default function Home() {
    // Input qiymatlarini saqlash uchun holatlar
    const [inputValue1, setInputValue1] = useState(50);
    const [inputValue2, setInputValue2] = useState(50);
    const [inputValue3, setInputValue3] = useState(50);
    const [inputValue4, setInputValue4] = useState(50);
    const [totalPrice, setTotalPrice] = useState(0);
    const [oqQogozPrice, setOqQogozPrice] = useState(0);
    const [qoraQogozPrice, setQoraQogozPrice] = useState(0);
    const [kokQogozPrice, setKokQogozPrice] = useState(0);
    const [selectedOptionValue1, setSelectedOptionValue1] = useState(2800); // Default qiymatlar
    const [selectedOptionValue2, setSelectedOptionValue2] = useState(2800);
    const [selectedOptionValue3, setSelectedOptionValue3] = useState(2800);

    // Range qiymatini o'zgartirish funksiyalari
    const handleRangeChange1 = (e) => {
        const value = e.target.value;
        setInputValue1(value);
        calculateTotalPrice();
    };

    const handleRangeChange2 = (e) => {
        const value = e.target.value;
        setInputValue2(value);
        calculateTotalPrice();
    };

    const handleRangeChange3 = (e) => {
        const value = e.target.value;
        setInputValue3(value);
        calculateTotalPrice();
    };

    const handleRangeChange4 = (e) => {
        const value = e.target.value;
        setInputValue4(value);
        calculateTotalPrice();
    };

    // Select o'zgartirish funksiyalari
    const handleSelectChange1 = (e) => {
        const value = parseInt(e.target.value);
        setSelectedOptionValue1(value);
        calculateTotalPrice();
    };

    const handleSelectChange2 = (e) => {
        const value = parseInt(e.target.value);
        setSelectedOptionValue2(value);
        calculateTotalPrice();
    };

    const handleSelectChange3 = (e) => {
        const value = parseInt(e.target.value);
        setSelectedOptionValue3(value);
        calculateTotalPrice();
    };

    // Total price ni hisoblash funksiyasi
    const calculateTotalPrice = () => {
        const oqQogozPrice = selectedOptionValue1 * parseInt(inputValue1);
        const qoraQogozPrice = selectedOptionValue2 * parseInt(inputValue2);
        const kokQogozPrice = selectedOptionValue3 * (parseInt(inputValue3) + parseInt(inputValue4));

        setOqQogozPrice(oqQogozPrice);
        setQoraQogozPrice(qoraQogozPrice);
        setKokQogozPrice(kokQogozPrice);
        setTotalPrice(kokQogozPrice);
    };

    return (
        <div className="home">
            <div className="allOptn">
                <div className="options">
                    <div className="optionsTitle">
                        <p>Oq Qog'oz</p>
                    </div>
                    <div className="optionMain">
                        <select onChange={handleSelectChange1} value={selectedOptionValue1}>
                            <option value="2800">2800</option>
                            <option value="3800">3800</option>
                            <option value="4800">4800</option>
                            <option value="5800">5800</option>
                        </select>
                        <div className="optionValueChanges">
                            <div className="optionValueChange">
                                <input
                                    aria-valuemax={100}
                                    min={0}
                                    max={100}
                                    type="range"
                                    value={inputValue1}
                                    onChange={handleRangeChange1}
                                />
                                <input
                                    type="text"
                                    value={inputValue1}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add similar sections for 'Qora Qog\'oz' and 'Ko'k Qog'oz' */}

                {/* Qora Qog'oz section */}
                <div className="options">
                    <div className="optionsTitle">
                        <p>Qora Qog'oz</p>
                    </div>
                    <div className="optionMain">
                        <select onChange={handleSelectChange2} value={selectedOptionValue2}>
                            <option value="2800">2800</option>
                            <option value="3800">3800</option>
                            <option value="4800">4800</option>
                            <option value="5800">5800</option>
                        </select>
                        <div className="optionValueChanges">
                            <div className="optionValueChange">
                                <input
                                    aria-valuemax={100}
                                    min={0}
                                    max={100}
                                    type="range"
                                    value={inputValue2}
                                    onChange={handleRangeChange2}
                                />
                                <input
                                    type="text"
                                    value={inputValue2}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ko'k Qog'oz section */}
                <div className="options">
                    <div className="optionsTitle">
                        <p>Ko'k Qog'oz</p>
                    </div>
                    <div className="optionMain">
                        <select onChange={handleSelectChange3} value={selectedOptionValue3}>
                            <option value="2800">2800</option>
                            <option value="3800">3800</option>
                            <option value="4800">4800</option>
                            <option value="5800">5800</option>
                        </select>
                        <div className="optionValueChanges">
                            <div className="optionValueChange">
                                <input
                                    aria-valuemax={100}
                                    min={0}
                                    max={100}
                                    type="range"
                                    value={inputValue3}
                                    onChange={handleRangeChange3}
                                />
                                <input
                                    type="text"
                                    value={inputValue3}
                                    readOnly
                                />
                            </div>
                            <div className="optionValueChange">
                                <input
                                    aria-valuemax={100}
                                    min={0}
                                    max={100}
                                    type="range"
                                    value={inputValue4}
                                    onChange={handleRangeChange4}
                                />
                                <input
                                    type="text"
                                    value={inputValue4}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside>
                <p>Mahsulotlar Marxi</p>
                <p>Oq Qog'oz Narxi: {oqQogozPrice} so'm</p>
                <p>Qora Qog'oz Narxi: {qoraQogozPrice} so'm</p>
                <p>Ko'k Qog'oz Narxi: {kokQogozPrice} so'm</p>
                <p>Umumiy Narx: {totalPrice} so'm</p>
                <div className="asideBtns">
                    <button>Submit</button>
                    <button>Rest</button>
                </div>
            </aside>
        </div>
    );
}
