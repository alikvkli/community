import BottomSheet from "@/components/BottomSheet";
import RadioInput from "@/components/RadioInput";
import PublicLayout from "@/layouts/PublicLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToggleInput = ({ name }: { name: string }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label className="cursor-pointer ml-4 flex-none ">
            {/* Gizli checkbox */}
            <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />

            <div className={`flex items-center transition-all justify-center px-3 py-[4px] gap-1 border-[0.5px] ${isChecked ? ' border-vf-red' : 'border-[#0D0D0D]'} rounded-3xl ${isChecked ? 'bg-vf-red' : 'bg-white'} ${isChecked ? 'text-white' : 'text-[#0D0D0D]'}`}>
                {name}
            </div>
        </label>
    )
}


export default function CategoryPage() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Increasing by price");

    return (
        <PublicLayout>
            <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex items-center justify-between border-b-[1px] border-[#d9d9d9] py-2">
                    <h2 className="font-semibold text-md">Sorting</h2>
                    <button type="button" onClick={() => setIsOpen(false)} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 18.5L18.5 5.5M18.5 18.5L5.5 5.5" stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-4 mt-4">
                    <RadioInput value="Increasing by price" id="val_1" selected={selected === "Increasing by price"} setSelected={() => setSelected("Increasing by price")} />
                    <RadioInput value="Decreasing by price" id="val_2" selected={selected === "Decreasing by price"} setSelected={() => setSelected("Decreasing by price")} />
                    <RadioInput value="Increasing by distance" id="val_3" selected={selected === "Increasing by distance"} setSelected={() => setSelected("Increasing by distance")} />
                    <RadioInput value="Decreasing by distance" id="val_4" selected={selected === "Decreasing by distance"} setSelected={() => setSelected("Decreasing by distance")} />
                    <RadioInput value="Increasing by score" id="val_5" selected={selected === "Increasing by score"} setSelected={() => setSelected("Increasing by score")} />
                    <RadioInput value="Decreasing by score" id="val_6" selected={selected === "Decreasing by score"} setSelected={() => setSelected("Decreasing by score")} />
                </div>
            </BottomSheet>

            <div className="flex items-center flex-none w-full overflow-x-auto  p-4">
                <button onClick={() => setIsOpen(true)} className="flex items-center justify-center px-3 py-[4px] gap-1 border-[0.5px] border-[#0D0D0D] rounded-3xl">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3.64388V13.6439M5 13.6439L7.71167 10.7655M5 13.6439L2.3125 10.7897M11 12.3105V2.31055M8.28918 5.18888L11.0009 2.31055L13.6884 5.16471" stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Sorting</span>
                </button>
                <div className="h-[33px] flex-none w-[1px] bg-[#d9d9d9] ml-4"></div>
                <ToggleInput name="Standard" />
                <ToggleInput name="Deep" />
                <ToggleInput name="Vacation rental" />
            </div>

            <section className="p-4 flex flex-col gap-4">
                <div className="shadow-lg rounded-2xl bg-white flex">
                    <div onClick={() => navigate("/profile/ali")} className="w-[120px] h-[136px]  rounded-l-2xl">
                        <img
                            className="w-full h-full object-cover rounded-l-2xl"
                            src="https://s3-alpha-sig.figma.com/img/69ea/9c29/31dcdb8a8cfdb2280a0c3f732d40b22d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XW9Ay-8hZStn~k62SKfqM6SVwPyLe9m0wOpwMAL-sHjfCWErJLPxCPS8gd3Rx-ONKQdoidjQwSo9~3GhkmUAYHlwpOZ9UKwO4wH6qulwzBYTvT7zKHjLuthNDuUIuseWu3jGgAQgeha9BS1aAIvVQGaK10Chcs25J7-DOnIFMwrxCtf9j7cOwQ~o-29nFpzgOPudfowcYzqMVS0qXE5Fh80VwjyVoPpVwPbhOpDdZWTuCa~SXnhDFUwky7CCb8AC6t2xWJT7WTfZHvby04UojS6X7Ml3nbfnva9FJ9E0wa5jWl9cQgwc9KeZS2OsNP~hZ7GxBbBkeTp3SbjnXsbPzA__" />
                    </div>
                    <div className="flex flex-col px-3 py-4">

                        <div className="flex items-center justify-between">
                            <p onClick={() => navigate("/profile/ali")} className="flex items-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.45776 9.09984C6.18841 8.90452 5.82431 8.90452 5.55496 9.09984L2.74948 11.1343L3.79607 7.80394C3.88902 7.50816 3.79615 7.18453 3.55877 6.98352L0.895704 4.72846H4.17327C4.50386 4.72846 4.79585 4.51741 4.9018 4.20641L5.99353 1.00189L7.02399 4.19457C7.1263 4.51157 7.42122 4.72846 7.75644 4.72846H11.0936L8.37714 6.97816C8.13177 7.18137 8.03716 7.51421 8.13713 7.8156L8.6117 7.65817L8.13713 7.8156L9.23 11.1102L6.45776 9.09984ZM2.18614 11.5428C2.18624 11.5427 2.18635 11.5426 2.18646 11.5425L2.18614 11.5428ZM9.45432 11.7864C9.45428 11.7862 9.45424 11.7861 9.4542 11.786L9.45432 11.7864Z" fill="#0D0D0D" stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="ml-1 text-[14px]">4.9</span>
                                <span className="ml-1 text-[#7E7E7E] text-[14px]">(1749)</span>
                            </p>
                            <button onClick={() => alert('favoriye eklendi')}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9991 21.5007C11.0509 20.9103 10.1491 20.2484 9.30162 19.5207C6.99787 17.5919 4.78162 15.2832 3.47287 12.5319C2.24537 9.95318 1.88912 6.00068 4.14537 3.86568C4.7073 3.33143 5.38662 2.93633 6.12884 2.71207C6.87106 2.48781 7.65552 2.44063 8.41926 2.57432C9.18301 2.70801 9.90479 3.01885 10.5267 3.4819C11.1486 3.94495 11.6533 4.54732 12.0004 5.24068M12.0004 21.4994C12.9482 20.909 13.8496 20.2471 14.6966 19.5194C17.0004 17.5907 19.2166 15.2819 20.5266 12.5307C21.7554 9.95318 22.1066 6.00068 19.8566 3.86568C19.2948 3.33143 18.6156 2.93632 17.8735 2.71206C17.1313 2.48779 16.347 2.44061 15.5833 2.57431C14.8196 2.70801 14.0979 3.01886 13.4761 3.48192C12.8544 3.94497 12.3498 4.54734 12.0029 5.24068" stroke="#BEBEBE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                </svg>

                            </button>
                        </div>
                        <p className="mt-2">Professional cleaning services, spotless results.</p>
                        <div className="flex items-center justify-end"><span className="text-[#7E7E7E] text-[14px]">from</span><span className="ml-1 text-[#0D0D0D] text-[16px] font-semibold">489€</span></div>

                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}