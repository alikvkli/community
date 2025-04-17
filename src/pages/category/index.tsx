import BottomSheet from "@/components/BottomSheet";
import RadioInput from "@/components/RadioInput";
import PublicLayout from "@/layouts/PublicLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryData } from "./mock";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setProfileIsFavorite, setSystemNotification } from "@/features/app";
import classNames from "classnames";

const ToggleInput = ({ name }: { name: string }) => {
    const dispatch = useAppDispatch();
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        if (isChecked) {
            dispatch(setSystemNotification(true));
        }
    }, [isChecked])
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
    const dispatch = useAppDispatch();
    const { profileIsFavorite } = useAppSelector(state => state.app);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Increasing by price");

    const handleSelected = (value: string) => {
        setSelected(value);
        dispatch(setSystemNotification(true));
    }

    return (
        <PublicLayout>
            <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="p-4">
                    <div className="flex items-center justify-between border-b-[1px] border-[#d9d9d9] pb-2">
                        <h2 className="font-semibold text-md">Sorting</h2>
                        <button type="button" onClick={() => setIsOpen(false)} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 18.5L18.5 5.5M18.5 18.5L5.5 5.5" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 mt-4">
                        <RadioInput value="Increasing by price" id="val_1" selected={selected === "Increasing by price"} setSelected={() => handleSelected("Increasing by price")} />
                        <RadioInput value="Decreasing by price" id="val_2" selected={selected === "Decreasing by price"} setSelected={() => handleSelected("Decreasing by price")} />
                        <RadioInput value="Increasing by distance" id="val_3" selected={selected === "Increasing by distance"} setSelected={() => handleSelected("Increasing by distance")} />
                        <RadioInput value="Decreasing by distance" id="val_4" selected={selected === "Decreasing by distance"} setSelected={() => handleSelected("Decreasing by distance")} />
                        <RadioInput value="Increasing by score" id="val_5" selected={selected === "Increasing by score"} setSelected={() => handleSelected("Increasing by score")} />
                        <RadioInput value="Decreasing by score" id="val_6" selected={selected === "Decreasing by score"} setSelected={() => handleSelected("Decreasing by score")} />
                    </div>
                </div>

            </BottomSheet>

            <div className="flex items-center flex-none w-full overflow-x-auto  p-4 pb-5">
                <button onClick={() => setIsOpen(true)} className="flex items-center justify-center px-3 py-[4px] gap-1 border-[0.5px] border-[#0D0D0D] rounded-3xl">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3.64388V13.6439M5 13.6439L7.71167 10.7655M5 13.6439L2.3125 10.7897M11 12.3105V2.31055M8.28918 5.18888L11.0009 2.31055L13.6884 5.16471" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Sorting</span>
                </button>
                <div className="h-[33px] flex-none w-[1px] bg-[#d9d9d9] ml-4"></div>
                <ToggleInput name="Standard" />
                <ToggleInput name="Deep" />
                <ToggleInput name="Vacation rental" />
            </div>

            <section className="p-4 flex flex-col gap-4">
                {categoryData.map(({ image, comment, description, price, star }, key) => (
                    <div className={classNames('shadow-lg rounded-xl border border-[#ebebeb] bg-white flex', {
                        'opacity-50': key !== 0
                    })} key={key}>
                        <div onClick={() => navigate("/profile/zerin")} className="w-[120px] h-[136px]  rounded-l-2xl">
                            <img
                                className="w-full h-full object-cover rounded-l-2xl"
                                src={image} />
                        </div>
                        <div className="flex flex-col px-3 py-4">

                            <div className="flex items-center justify-between">
                                <p onClick={() => navigate("/profile/ali")} className="flex items-center">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.45776 9.09984C6.18841 8.90452 5.82431 8.90452 5.55496 9.09984L2.74948 11.1343L3.79607 7.80394C3.88902 7.50816 3.79615 7.18453 3.55877 6.98352L0.895704 4.72846H4.17327C4.50386 4.72846 4.79585 4.51741 4.9018 4.20641L5.99353 1.00189L7.02399 4.19457C7.1263 4.51157 7.42122 4.72846 7.75644 4.72846H11.0936L8.37714 6.97816C8.13177 7.18137 8.03716 7.51421 8.13713 7.8156L8.6117 7.65817L8.13713 7.8156L9.23 11.1102L6.45776 9.09984ZM2.18614 11.5428C2.18624 11.5427 2.18635 11.5426 2.18646 11.5425L2.18614 11.5428ZM9.45432 11.7864C9.45428 11.7862 9.45424 11.7861 9.4542 11.786L9.45432 11.7864Z" fill="#0D0D0D" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="ml-1 text-[14px]">{star}</span>
                                    <span className="ml-1 text-[#7E7E7E] text-[14px]">({comment})</span>
                                </p>
                                <button onClick={() => {
                                    if (key === 0) {
                                        dispatch(setProfileIsFavorite(!profileIsFavorite))
                                    }
                                }}>
                                    {profileIsFavorite && key === 0 ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.1998 3.50046C19.6339 2.96234 18.9592 2.55195 18.2211 2.29702C17.483 2.04208 16.6988 1.94854 15.9214 2.02272C15.1441 2.0969 14.3917 2.33707 13.7152 2.727C13.0386 3.11693 12.4536 3.64753 11.9998 4.28296C11.9048 4.15046 11.8035 4.02296 11.6985 3.90046C11.189 3.30463 10.5564 2.82626 9.84432 2.49827C9.13223 2.17027 8.35753 2.00044 7.57353 2.00046C6.1701 1.99375 4.81873 2.53143 3.80353 3.50046C1.45978 5.72546 1.63728 9.83546 3.02228 12.7505C4.17728 15.1755 6.12603 17.5167 8.98228 19.908C9.84863 20.6532 10.7714 21.3302 11.7423 21.933C11.8204 21.9783 11.9094 22.0016 11.9998 22.0005C12.091 22.0004 12.1805 21.9753 12.2585 21.928C13.2288 21.3249 14.1511 20.6479 15.0173 19.903C17.8748 17.5117 19.8273 15.1705 20.981 12.7505C22.3673 9.83546 22.5435 5.72546 20.1998 3.50046Z" fill="#E60000" />
                                        </svg>

                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_66_54249)">
                                                <path d="M11.9991 21.5007C11.0509 20.9103 10.1491 20.2484 9.30162 19.5207C6.99787 17.5919 4.78162 15.2832 3.47287 12.5319C2.24537 9.95318 1.88912 6.00068 4.14537 3.86568C4.7073 3.33143 5.38662 2.93633 6.12884 2.71207C6.87106 2.48781 7.65552 2.44063 8.41926 2.57432C9.18301 2.70801 9.90479 3.01885 10.5267 3.4819C11.1486 3.94495 11.6533 4.54732 12.0004 5.24068M12.0004 21.4994C12.9482 20.909 13.8496 20.2471 14.6966 19.5194C17.0004 17.5907 19.2166 15.2819 20.5266 12.5307C21.7554 9.95318 22.1066 6.00068 19.8566 3.86568C19.2948 3.33143 18.6156 2.93632 17.8735 2.71206C17.1313 2.48779 16.347 2.44061 15.5833 2.57431C14.8196 2.70801 14.0979 3.01886 13.4761 3.48192C12.8544 3.94497 12.3498 4.54734 12.0029 5.24068" stroke="#BEBEBE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_66_54249">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <p className="mt-2">{description}</p>
                            <div className="flex items-center justify-end"><span className="text-[#7E7E7E] text-[14px]">from</span><span className="ml-1 text-[#0D0D0D] text-[16px] font-semibold">{price}</span></div>

                        </div>
                    </div>
                ))}
            </section>
        </PublicLayout>
    )
}