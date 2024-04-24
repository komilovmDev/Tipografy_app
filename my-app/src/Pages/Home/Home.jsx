import React, { useState } from 'react';
import './home.css';

export default function Home() {
    // Input qiymatlarini saqlash uchun holatlar
    const [inputValue1, setInputValue1] = useState(50);
    const [inputValue2, setInputValue2] = useState(50);
    const [totalPrice, setTotalPrice] = useState(0);

    // Range qiymatini o'zgartirish funksiyasi
    const handleRangeChange1 = (e) => {
        setInputValue1(e.target.value); // Birinchi input qiymatini yangilash
        calculateTotalPrice(e.target.value, inputValue2);
    };

    const handleRangeChange2 = (e) => {
        setInputValue2(e.target.value); // Ikkinchi input qiymatini yangilash
        calculateTotalPrice(inputValue1, e.target.value);
    };

    // Total price ni hisoblash funksiyasi
    const calculateTotalPrice = (value1, value2) => {
        const selectedOptionValue = document.querySelector('select').value;
        const total = parseInt(selectedOptionValue) * (parseInt(value1) + parseInt(value2));
        setTotalPrice(total);
    };

    return (
        <div className="home">
            <div className="allOptn">
                <div className="options">
                    <div className="optionsTitle">
                        <p>Oq Qog'oz</p>
                    </div>
                    <div className="optionMain">
                        <select onChange={() => calculateTotalPrice(inputValue1, inputValue2)} name="" id="">
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
                <div className="options">
                    <div className="optionsTitle">
                        <p>Qora Qog'oz</p>
                    </div>
                    <div className="optionMain">
                        <select onChange={() => calculateTotalPrice(inputValue1, inputValue2)} name="" id="">
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
                <div className="options">
                    <div className="optionsTitle">
                        <p>Qora Qog'oz</p>
                    </div>
                    <div className="optionMain">
                        <select onChange={() => calculateTotalPrice(inputValue1, inputValue2)} name="" id="">
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
            </div>
            <aside>
                <p>Mahsulotlar Marxi</p>
                <p>Narx: {totalPrice} so'm</p>
                <div className="asideBtns">
                    <button>Submit</button>
                    <button>Rest</button>
                </div>
            </aside>
        </div>
    );
}
