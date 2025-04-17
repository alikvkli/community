import { useState } from "react";
import { featuredServiceData } from "./mock";
import { useAppDispatch } from "@/hooks";
import { setSystemNotification } from "@/features/app";

export default function FeaturedServices() {
    const dispatch = useAppDispatch();
    const [favoriteOne, setFavoriteOne] = useState(true);
    const [favoriteTwo, setFavoriteTwo] = useState(false);
    return (
        <section className="flex flex-col items-center gap-4 p-4">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-[18px] text-[#262626] font-semibold">Featured services</h1>
                <button className="text-vf-red underline flex items-center gap-2" onClick={() => dispatch(setSystemNotification(true))}>
                    All
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.16675 2.33301L10.8334 7.99967L5.16675 13.6663" stroke="#E60000" strokeMiterlimit="10" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-start gap-2 w-full h-full">
                {featuredServiceData.map((service) => (
                    <div key={service.id} className="w-full flex items-start justify-between shadow-md p-4 rounded-xl bg-white border border-[#ebebeb]">
                        <div className="flex items-center gap-4">
                            <img className="w-[98px] h-[80px] rounded-2xl" src={service.image} />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">{service.title}</p>
                                <p>{service.description}</p>
                            </div>
                        </div>
                        <button className="flex items-center justify-center" onClick={() => {
                            if (service.id === 1) {
                                setFavoriteOne(!favoriteOne);
                            } else {
                                setFavoriteTwo(!favoriteTwo);
                            }
                        }}>
                            {service.id === 1 && favoriteOne && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2 3.50046C19.6342 2.96234 18.9594 2.55195 18.2213 2.29702C17.4832 2.04208 16.699 1.94854 15.9217 2.02272C15.1443 2.0969 14.392 2.33707 13.7154 2.727C13.0389 3.11693 12.4539 3.64753 12 4.28296C11.905 4.15046 11.8038 4.02296 11.6988 3.90046C11.1892 3.30463 10.5567 2.82626 9.84456 2.49827C9.13247 2.17027 8.35777 2.00044 7.57378 2.00046C6.17035 1.99375 4.81898 2.53143 3.80378 3.50046C1.46003 5.72546 1.63753 9.83546 3.02253 12.7505C4.17753 15.1755 6.12628 17.5167 8.98253 19.908C9.84887 20.6532 10.7716 21.3302 11.7425 21.933C11.8207 21.9783 11.9097 22.0016 12 22.0005C12.0913 22.0004 12.1808 21.9753 12.2588 21.928C13.229 21.3249 14.1514 20.6479 15.0175 19.903C17.875 17.5117 19.8275 15.1705 20.9813 12.7505C22.3675 9.83546 22.5438 5.72546 20.2 3.50046Z" fill="#E60000" />
                                </svg>
                            )}

                            {service.id === 1 && !favoriteOne && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9991 21.5007C11.0509 20.9103 10.1491 20.2484 9.30162 19.5207C6.99787 17.5919 4.78162 15.2832 3.47287 12.5319C2.24537 9.95318 1.88912 6.00068 4.14537 3.86568C4.7073 3.33143 5.38662 2.93633 6.12884 2.71207C6.87106 2.48781 7.65552 2.44063 8.41926 2.57432C9.18301 2.70801 9.90479 3.01885 10.5267 3.4819C11.1486 3.94495 11.6533 4.54732 12.0004 5.24068M12.0004 21.4994C12.9482 20.909 13.8496 20.2471 14.6966 19.5194C17.0004 17.5907 19.2166 15.2819 20.5266 12.5307C21.7554 9.95318 22.1066 6.00068 19.8566 3.86568C19.2948 3.33143 18.6156 2.93632 17.8735 2.71206C17.1313 2.48779 16.347 2.44061 15.5833 2.57431C14.8196 2.70801 14.0979 3.01886 13.4761 3.48192C12.8544 3.94497 12.3498 4.54734 12.0029 5.24068" stroke="#BEBEBE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                </svg>
                            )}

                            {service.id === 2 && favoriteTwo && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2 3.50046C19.6342 2.96234 18.9594 2.55195 18.2213 2.29702C17.4832 2.04208 16.699 1.94854 15.9217 2.02272C15.1443 2.0969 14.392 2.33707 13.7154 2.727C13.0389 3.11693 12.4539 3.64753 12 4.28296C11.905 4.15046 11.8038 4.02296 11.6988 3.90046C11.1892 3.30463 10.5567 2.82626 9.84456 2.49827C9.13247 2.17027 8.35777 2.00044 7.57378 2.00046C6.17035 1.99375 4.81898 2.53143 3.80378 3.50046C1.46003 5.72546 1.63753 9.83546 3.02253 12.7505C4.17753 15.1755 6.12628 17.5167 8.98253 19.908C9.84887 20.6532 10.7716 21.3302 11.7425 21.933C11.8207 21.9783 11.9097 22.0016 12 22.0005C12.0913 22.0004 12.1808 21.9753 12.2588 21.928C13.229 21.3249 14.1514 20.6479 15.0175 19.903C17.875 17.5117 19.8275 15.1705 20.9813 12.7505C22.3675 9.83546 22.5438 5.72546 20.2 3.50046Z" fill="#E60000" />
                                </svg>
                            )}

                            {service.id === 2 && !favoriteTwo && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9991 21.5007C11.0509 20.9103 10.1491 20.2484 9.30162 19.5207C6.99787 17.5919 4.78162 15.2832 3.47287 12.5319C2.24537 9.95318 1.88912 6.00068 4.14537 3.86568C4.7073 3.33143 5.38662 2.93633 6.12884 2.71207C6.87106 2.48781 7.65552 2.44063 8.41926 2.57432C9.18301 2.70801 9.90479 3.01885 10.5267 3.4819C11.1486 3.94495 11.6533 4.54732 12.0004 5.24068M12.0004 21.4994C12.9482 20.909 13.8496 20.2471 14.6966 19.5194C17.0004 17.5907 19.2166 15.2819 20.5266 12.5307C21.7554 9.95318 22.1066 6.00068 19.8566 3.86568C19.2948 3.33143 18.6156 2.93632 17.8735 2.71206C17.1313 2.48779 16.347 2.44061 15.5833 2.57431C14.8196 2.70801 14.0979 3.01886 13.4761 3.48192C12.8544 3.94497 12.3498 4.54734 12.0029 5.24068" stroke="#BEBEBE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                </svg>
                            )}

                        </button>
                    </div>
                ))}
            </div>
        </section >
    )
}