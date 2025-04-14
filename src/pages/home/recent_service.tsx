import { recentServiceData } from "./mock";

export default function RecentServices() {
    return (
        <section className="flex flex-col items-start gap-4 p-4">
            <h1 className="text-[18px] text-[#262626] font-semibold">Recents</h1>
            <div className="flex flex-col items-start justify-center w-full">
                {recentServiceData.map(({ date, payment, price, star, title }, key) => (
                    <div key={key} className="flex w-full items-center justify-between border-b-[1px] border-[#BEBEBE] pb-4">
                        <div className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2199 10.53C17.4961 10.53 17.7199 10.3062 17.7199 10.03C17.7199 9.7539 17.4961 9.53004 17.2199 9.53004V10.53ZM13.4199 9.53004C13.1438 9.53004 12.9199 9.7539 12.9199 10.03C12.9199 10.3062 13.1438 10.53 13.4199 10.53V9.53004ZM11.5299 10.53C11.8061 10.53 12.0299 10.3062 12.0299 10.03C12.0299 9.7539 11.8061 9.53004 11.5299 9.53004V10.53ZM10.5799 9.53004C10.3038 9.53004 10.0799 9.7539 10.0799 10.03C10.0799 10.3062 10.3038 10.53 10.5799 10.53V9.53004ZM17.2199 13.02C17.4961 13.02 17.7199 12.7962 17.7199 12.52C17.7199 12.2439 17.4961 12.02 17.2199 12.02V13.02ZM13.4199 12.02C13.1438 12.02 12.9199 12.2439 12.9199 12.52C12.9199 12.7962 13.1438 13.02 13.4199 13.02V12.02ZM17.2199 15.53C17.4961 15.53 17.7199 15.3062 17.7199 15.03C17.7199 14.7539 17.4961 14.53 17.2199 14.53V15.53ZM13.4199 14.53C13.1438 14.53 12.9199 14.7539 12.9199 15.03C12.9199 15.3062 13.1438 15.53 13.4199 15.53V14.53ZM7.61994 6.22004L7.26639 5.86649L7.25462 5.87826L7.24365 5.89079L7.61994 6.22004ZM19.9999 2.54004H20.4999V2.04004H19.9999V2.54004ZM11.7999 2.79004C11.7999 2.5139 11.5761 2.29004 11.2999 2.29004C11.0238 2.29004 10.7999 2.5139 10.7999 2.79004H11.7999ZM11.2999 6.53004V7.03004C11.5761 7.03004 11.7999 6.80618 11.7999 6.53004H11.2999ZM7.51994 6.03004C7.2438 6.03004 7.01994 6.2539 7.01994 6.53004C7.01994 6.80618 7.2438 7.03004 7.51994 7.03004V6.03004ZM9.46063 17.0156C9.64594 16.8109 9.63021 16.4947 9.42549 16.3094C9.22077 16.124 8.90458 16.1398 8.71926 16.3445L9.46063 17.0156ZM7.17994 18.79L6.82805 19.1452C6.92503 19.2413 7.05708 19.2936 7.19354 19.2899C7.33 19.2861 7.45901 19.2268 7.55063 19.1256L7.17994 18.79ZM6.46183 17.3748C6.26565 17.1805 5.94908 17.182 5.75473 17.3781C5.56039 17.5743 5.56188 17.8909 5.75805 18.0852L6.46183 17.3748ZM17.2199 9.53004H13.4199V10.53H17.2199V9.53004ZM11.5299 9.53004H10.5799V10.53H11.5299V9.53004ZM17.2199 12.02H13.4199V13.02H17.2199V12.02ZM17.2199 14.53H13.4199V15.53H17.2199V14.53ZM8.00994 14.03V6.49004H7.00994V14.03H8.00994ZM8.00994 6.49004C8.00994 6.50861 8.00587 6.52631 8.00023 6.53985C7.99509 6.55219 7.9912 6.55504 7.99623 6.54929L7.24365 5.89079C7.11127 6.04208 7.00994 6.24493 7.00994 6.49004H8.00994ZM7.97349 6.57359L11.5435 3.00359L10.8364 2.29649L7.26639 5.86649L7.97349 6.57359ZM11.5435 3.00359C11.5283 3.01876 11.5135 3.02732 11.5015 3.03216C11.4896 3.03699 11.4759 3.04004 11.4599 3.04004V2.04004C11.2328 2.04004 11.004 2.1289 10.8364 2.29649L11.5435 3.00359ZM11.4599 3.04004H19.9999V2.04004H11.4599V3.04004ZM19.4999 2.54004V19.14H20.4999V2.54004H19.4999ZM19.4999 19.14C19.4999 19.6516 19.0861 20.06 18.5799 20.06V21.06C19.6338 21.06 20.4999 20.2085 20.4999 19.14H19.4999ZM18.5799 20.06H10.2399V21.06H18.5799V20.06ZM10.7999 2.79004V6.53004H11.7999V2.79004H10.7999ZM11.2999 6.03004H7.51994V7.03004H11.2999V6.03004ZM7.72994 14.43H7.73994V13.43H7.72994V14.43ZM7.73994 14.43C9.55696 14.43 11.0299 15.903 11.0299 17.72H12.0299C12.0299 15.3507 10.1092 13.43 7.73994 13.43V14.43ZM11.0299 17.72V17.73H12.0299V17.72H11.0299ZM11.0299 17.73C11.0299 19.5471 9.55696 21.02 7.73994 21.02V22.02C10.1092 22.02 12.0299 20.0993 12.0299 17.73H11.0299ZM7.73994 21.02H7.72994V22.02H7.73994V21.02ZM7.72994 21.02C5.91292 21.02 4.43994 19.5471 4.43994 17.73H3.43994C3.43994 20.0993 5.36064 22.02 7.72994 22.02V21.02ZM4.43994 17.73V17.72H3.43994V17.73H4.43994ZM4.43994 17.72C4.43994 15.903 5.91292 14.43 7.72994 14.43V13.43C5.36064 13.43 3.43994 15.3507 3.43994 17.72H4.43994ZM8.71926 16.3445L6.80926 18.4545L7.55063 19.1256L9.46063 17.0156L8.71926 16.3445ZM7.53183 18.4348L6.46183 17.3748L5.75805 18.0852L6.82805 19.1452L7.53183 18.4348Z" fill="#0D0D0D" />
                            </svg>
                            <div className="flex flex-col  gap-1">
                                <p className="font-semibold">{title}</p>
                                <p className="text-sm">{payment}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <p className="font-semibold text-[#262626] text-lg">{price}</p>
                                <div className="flex items-center gap-1">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.43039 7.51574C5.17675 7.33181 4.83385 7.33181 4.58021 7.51574L2.44626 9.06319L3.24289 6.52827C3.33038 6.24989 3.24299 5.94526 3.0195 5.75601L0.973785 4.02371H3.47772C3.7891 4.02371 4.06399 3.82494 4.16371 3.53221L4.99247 1.0996L5.77402 3.52107L6.24985 3.3675L5.77402 3.52107C5.87032 3.81944 6.14797 4.02371 6.4637 4.02371H9.01338L6.9278 5.75095C6.69678 5.94227 6.60775 6.25558 6.70185 6.53924L7.5311 9.03908L5.43039 7.51574ZM8.22275 9.54064L8.22226 9.54028L8.22275 9.54064Z" fill="#7E7E7E" stroke="#7E7E7E" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-xs text-[#7E7E7E]">{star}</span>
                                </div>
                                <p className="text-xs text-[#7E7E7E]">{date}</p>
                            </div>
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75 3.5L16.25 12L7.75 20.5" stroke="#E60000" strokeMiterlimit="10" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                ))}




            </div>
        </section>
    )
}