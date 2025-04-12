import { useAppSelector } from "@/hooks";
import { interestedServiceData } from "./mock";

export default function InterestedServices() {
    const { login, isCustomer } = useAppSelector(state => state.app)
    return (
        <section className="flex flex-col items-center gap-4 p-4">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-[18px] text-[#262626] font-semibold">{login && !isCustomer ? 'Which expertise are you providing?' : 'Which services are you interested in?'}</h1>
                <button className="text-vf-red underline flex items-center gap-2">
                    All
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.16675 2.33301L10.8334 7.99967L5.16675 13.6663" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div className="flex items-start gap-2 overflow-x-auto w-full h-full">
                {interestedServiceData.map((service) => (
                    <div key={service.id} className="flex flex-col h-fit items-center shadow-md p-4 rounded-xl bg-white mb-4">
                        <img src={service.image} />
                        <p>{service.name}</p>
                        <button className="bg-vf-red rounded-full flex items-center justify-center w-8 h-8">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1459 10.0003H3.85425M10.0001 3.85449V16.1462" stroke="white" stroke-miterlimit="10" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}