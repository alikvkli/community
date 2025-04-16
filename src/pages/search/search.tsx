// src/pages/Search.tsx

import PublicLayout from "@/layouts/PublicLayout";
import { categoryListData, interestedServiceData, youMayAlsoLikeData } from "@/pages/home/mock";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSearchText } from "@/features/app";

const useQuery = () => new URLSearchParams(useLocation().search);

const Search = () => {
    const query = useQuery().get("query") || "";
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState<"categories" | "interests">("categories");
    const { searchText } = useAppSelector(state => state.app);

    useEffect(() => {
        dispatch(setSearchText(query))
    }, [query]);

    const filteredCategoryList = categoryListData.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const filteredInterestList = interestedServiceData.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        if (searchText.length === 0) {
            setSelectedTab("categories");
        }
    }, [searchText])

    return (
        <PublicLayout>
            <div className="w-full max-w-5xl mx-auto px-4 py-6">
                <div className="flex w-full h-16 mb-4">
                    <div
                        className="w-1/2 flex items-center justify-center cursor-pointer relative"
                        onClick={() => setSelectedTab("categories")}
                    >
                        <span className="text-lg font-semibold text-black">Categories</span>
                        {selectedTab === "categories" && (
                            <div className="absolute bottom-1 left-0 w-full h-[2px] bg-vf-red rounded-full" />
                        )}
                    </div>
                    <div
                        className="w-1/2 flex items-center justify-center cursor-pointer relative"
                        onClick={() => setSelectedTab("interests")}
                    >
                        <span className="text-lg font-semibold text-black">Interests</span>
                        {selectedTab === "interests" && (
                            <div className="absolute bottom-1 left-0 w-full h-[2px] bg-vf-red rounded-full" />
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-6">
                    {selectedTab === "categories" && (
                        <>
                            {filteredCategoryList.length > 0 && (
                                <div className="col-span-4 w-full text-left text-lg font-semibold text-[#0D0D0D] mb-2">
                                    Your Categories
                                </div>
                            )}

                            {filteredCategoryList.length === 0 && (
                                <div className="col-span-4 w-full text-left text-lg text-[#0D0D0D] mb-2">
                                    No Categories Found
                                </div>
                            )}
                            {filteredCategoryList.map((item) => (
                                <div
                                    key={`category-${item.id}`}
                                    className="bg-white rounded-xl flex flex-col items-center hover:scale-105 transition"
                                    onClick={() => navigate(`/category/${item.name}`)}
                                >
                                    <button type="button" className="flex flex-col items-center gap-3 cursor-not-allowed p-[1px]">
                                        <div
                                            className={clsx(
                                                "p-[2px] rounded-[20px]",
                                                selectedTab === "categories" && "bg-gradient-to-r from-[#820000] to-[#E60000]"
                                            )}
                                        >
                                            <div className="bg-white p-[2px] rounded-[16px]">
                                                <img
                                                    src={item.image}
                                                    className="w-[60px] h-[60px] rounded-[14px] object-cover"
                                                    alt={item.name}
                                                />
                                            </div>
                                        </div>
                                    </button>
                                    <span className="text-center font-medium">{item.name}</span>
                                </div>
                            ))}
                        </>
                    )}

                    {selectedTab === "interests" && (
                        <>
                            {filteredInterestList.length > 0 && (
                                <div className="col-span-4 w-full text-left text-lg font-semibold text-[#0D0D0D] mb-2">
                                    Your Interests
                                </div>
                            )}
                            {filteredInterestList.length === 0 && (
                                <div className="col-span-4 w-full text-left text-lg text-[#0D0D0D] mb-2">
                                    No Interests Found
                                </div>
                            )}
                            {filteredInterestList.map((item) => (
                                <div
                                    key={`interest-${item.id}`}
                                    className="bg-white rounded-xl flex flex-col items-center hover:scale-105 transition"
                                >
                                    <button type="button" className="flex flex-col items-center gap-3 cursor-not-allowed p-[1px]">
                                        <div>
                                            <div className="bg-white p-[2px] rounded-[16px]">
                                                <img
                                                    src={item.image}
                                                    className="w-[60px] h-[60px] rounded-[14px] object-cover"
                                                    alt={item.name}
                                                />
                                            </div>
                                        </div>
                                    </button>
                                    <span className="text-center font-medium">{item.name}</span>
                                </div>
                            ))}
                        </>
                    )}

                    {selectedTab === "interests" && (
                        <div className="col-span-4 w-full text-left text-lg font-semibold text-[#0D0D0D] mb-2">
                            You may also like
                        </div>
                    )}

                    {selectedTab === "interests" && youMayAlsoLikeData.map((item) => (
                        <div
                            key={`you-may-also-like-${item.id}`}
                            className="bg-white rounded-xl flex flex-col items-center hover:scale-105 transition"
                        >
                            <button type="button" className="flex flex-col items-center gap-3 cursor-not-allowed p-[1px]">
                                <div>
                                    <div className="bg-white p-[2px] rounded-[16px]">
                                        <img
                                            src={item.image}
                                            className="w-[60px] h-[60px] rounded-[14px] object-cover"
                                            alt={item.name}
                                        />
                                    </div>
                                </div>
                            </button>
                            <span className="text-center font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
};

export default Search;
