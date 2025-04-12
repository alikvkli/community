import { Link } from "react-router-dom";
import { categoryListData } from "./mock";

export default function CategoryList() {
    return (
        <section className="flex flex-col items-center gap-4 p-4">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-[18px] text-[#262626] font-semibold">Categories</h1>
                <button className="text-vf-red underline flex items-center gap-2">
                    All
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.16675 2.33301L10.8334 7.99967L5.16675 13.6663" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div className="flex items-start gap-2 overflow-x-auto w-full">
                {categoryListData.map(({ id, image, name, slug }, key) => (
                    <Link to={`/category/${slug}`} key={`${key}${id}`} className="flex flex-col items-center gap-3">
                        <img src={image} className="w-[70px] h-[70px] rounded-[16px] p-[2px] object-cover border-[2px] bg-gradient-to-r from-[#820000] to-[#E60000] " />
                        <p className="text-[#0D0D0D]">{name}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}