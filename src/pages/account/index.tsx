import PublicLayout from "@/layouts/PublicLayout";
import customerImage from "@/images/customer.png";
import providerImage from "@/images/provider.png";
import premiumImage from "@/images/premium.png";
import { useAppSelector } from "@/hooks";
import { customerSettings, providerSettings } from "./mock";

export default function Account() {
    const { isCustomer } = useAppSelector(state => state.app)
    return (
        <PublicLayout>
            <section className="flex items-center justify-center w-full mt-6">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="relative">
                        <img src={isCustomer ? customerImage : providerImage} className="w-20 h-20 rounded-full" />
                        <button className="absolute bottom-0 right-0 bg-vf-red rounded-full p-1 border-2 border-white">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1309 3.66913L10.4863 3.31749C10.3927 3.22289 10.2653 3.1695 10.1322 3.16914C9.99915 3.16878 9.87142 3.22148 9.77732 3.31558L10.1309 3.66913ZM3.04088 10.7591L2.68732 10.4056C2.62323 10.4697 2.57776 10.55 2.55579 10.6379L3.04088 10.7591ZM2.31421 13.6675L1.82912 13.5463C1.78655 13.7167 1.8365 13.8969 1.9607 14.0211C2.08491 14.1452 2.26516 14.1951 2.43554 14.1525L2.31421 13.6675ZM5.22254 12.94L5.34388 13.425C5.4322 13.4029 5.51282 13.3571 5.57703 13.2926L5.22254 12.94ZM9.77733 3.31393C9.58207 3.50919 9.58207 3.82577 9.77733 4.02103C9.97259 4.2163 10.2892 4.2163 10.4844 4.02103L9.77733 3.31393ZM11.1967 2.60165L11.5503 2.9552L11.5519 2.95352L11.1967 2.60165ZM12.4992 2.60165L12.8549 2.25025L12.8544 2.24978L12.4992 2.60165ZM13.9992 4.11998L14.3534 4.47294L14.7036 4.12152L14.3549 3.76858L13.9992 4.11998ZM12.6372 5.49166L10.4863 3.31749L9.77542 4.02078L11.9263 6.19494L12.6372 5.49166ZM9.77732 3.31558L2.68732 10.4056L3.39443 11.1127L10.4844 4.02269L9.77732 3.31558ZM2.55579 10.6379L1.82912 13.5463L2.7993 13.7887L3.52596 10.8803L2.55579 10.6379ZM2.43554 14.1525L5.34388 13.425L5.10121 12.4549L2.19288 13.1824L2.43554 14.1525ZM5.57703 13.2926L12.6362 6.19592L11.9272 5.49069L4.86805 12.5874L5.57703 13.2926ZM10.4844 4.02103L11.5503 2.9552L10.8432 2.24809L9.77733 3.31393L10.4844 4.02103ZM11.5519 2.95352C11.5907 2.91441 11.6368 2.88336 11.6876 2.86217L11.3027 1.93921C11.13 2.01124 10.9732 2.1168 10.8415 2.24978L11.5519 2.95352ZM11.6876 2.86217C11.7384 2.84099 11.7929 2.83008 11.848 2.83008V1.83008C11.6608 1.83008 11.4755 1.86717 11.3027 1.93921L11.6876 2.86217ZM11.848 2.83008C11.903 2.83008 11.9575 2.84099 12.0083 2.86217L12.3932 1.93921C12.2205 1.86717 12.0351 1.83008 11.848 1.83008V2.83008ZM12.0083 2.86217C12.0591 2.88336 12.1053 2.91441 12.144 2.95352L12.8544 2.24978C12.7227 2.1168 12.566 2.01124 12.3932 1.93921L12.0083 2.86217ZM12.1435 2.95305L13.6435 4.47138L14.3549 3.76858L12.8549 2.25025L12.1435 2.95305ZM13.6451 3.76702L11.9276 5.49035L12.6359 6.19626L14.3534 4.47294L13.6451 3.76702ZM2.9423 10.8627L5.12397 13.0444L5.83108 12.3373L3.64941 10.1556L2.9423 10.8627Z" fill="white" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center flex-col">
                        {isCustomer ? (
                            <>
                                <p className="font-semibold text-xl">John Smith</p>
                                <p className="text-sm">Doctor</p>
                            </>
                        ) : (
                            <>
                                <p className="font-semibold text-xl">Super Clean Service</p>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex items-center gap-[5.5px]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.74854 6.67523L6.07604 5.96023L7.93937 1.99023L9.95687 5.8844L14.3085 6.43023L11.2285 9.5519L12.0535 13.8594L8.1327 11.8944L4.29187 14.0102L4.94854 9.6744L1.74854 6.67523Z" fill="#00697C" stroke="#00697C" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.74854 6.67523L6.07604 5.96023L7.93937 1.99023L9.95687 5.8844L14.3085 6.43023L11.2285 9.5519L12.0535 13.8594L8.1327 11.8944L4.29187 14.0102L4.94854 9.6744L1.74854 6.67523Z" fill="#00697C" stroke="#00697C" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.74854 6.67523L6.07604 5.96023L7.93937 1.99023L9.95687 5.8844L14.3085 6.43023L11.2285 9.5519L12.0535 13.8594L8.1327 11.8944L4.29187 14.0102L4.94854 9.6744L1.74854 6.67523Z" fill="#00697C" stroke="#00697C" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.74854 6.67523L6.07604 5.96023L7.93937 1.99023L9.95687 5.8844L14.3085 6.43023L11.2285 9.5519L12.0535 13.8594L8.1327 11.8944L4.29187 14.0102L4.94854 9.6744L1.74854 6.67523Z" fill="#00697C" stroke="#00697C" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.74854 6.67523L6.07604 5.96023L7.93937 1.99023L9.95687 5.8844L14.3085 6.43023L11.2285 9.5519L12.0535 13.8594L8.1327 11.8944L4.29187 14.0102L4.94854 9.6744L1.74854 6.67523Z" fill="url(#paint0_linear_317_9225)" stroke="#00697C" stroke-linecap="round" stroke-linejoin="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_317_9225" x1="2.00024" y1="8.00024" x2="8.00024" y2="8.00024" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.9999" stop-color="#00697C" />
                                                    <stop offset="1" stop-color="#00697C" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className="text-sm"><span className="underline">4.5</span> (34)</p>
                                </div>

                            </>
                        )}
                    </div>
                </div>

            </section>
            {!isCustomer && (
                <section className="flex items-center w-full gap-4 p-4 mt-2">
                    <div className="bg-white w-full shadow-lg rounded-2xl p-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.0684 7.47977L12.0834 9.93644C12.0418 10.0398 11.8951 10.0381 11.8568 9.93477L10.9118 7.4631C10.8551 7.31644 10.7401 7.19977 10.5951 7.14144L8.13844 6.15644C8.03511 6.11477 8.03677 5.9681 8.14011 5.92977L10.6118 4.98477C10.7584 4.9281 10.8751 4.8131 10.9334 4.6681L11.9184 2.21144C11.9601 2.1081 12.1068 2.10977 12.1451 2.2131L13.0901 4.68477C13.1468 4.83144 13.2618 4.9481 13.4068 5.00644L15.8634 5.99144C15.9668 6.0331 15.9651 6.17977 15.8618 6.2181L13.3901 7.1631C13.2434 7.21977 13.1268 7.33477 13.0684 7.47977Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.0567 20.4914L20.86 25.9664C20.7683 26.1964 20.4417 26.1931 20.3533 25.9631L18.245 20.4548C18.12 20.1281 17.8633 19.8664 17.5383 19.7364L12.0633 17.5398C11.8333 17.4481 11.8367 17.1214 12.0667 17.0331L17.575 14.9248C17.9017 14.7998 18.1633 14.5431 18.2933 14.2181L20.49 8.74311C20.5817 8.51311 20.9083 8.51644 20.9967 8.74644L23.105 14.2548C23.23 14.5814 23.4867 14.8431 23.8117 14.9731L29.2867 17.1698C29.5167 17.2614 29.5133 17.5881 29.2833 17.6764L23.775 19.7848C23.4483 19.9098 23.1867 20.1664 23.0567 20.4914Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.58166 26.2748L7.40833 29.1998C7.35833 29.3231 7.18499 29.3214 7.13666 29.1981L6.00999 26.2548C5.94333 26.0798 5.80666 25.9414 5.63166 25.8714L2.70666 24.6981C2.58333 24.6481 2.58499 24.4748 2.70833 24.4264L5.65166 23.2998C5.82666 23.2331 5.96499 23.0964 6.03499 22.9214L7.20833 19.9964C7.25833 19.8731 7.43166 19.8748 7.47999 19.9981L8.60666 22.9414C8.67333 23.1164 8.80999 23.2548 8.98499 23.3248L11.91 24.4981C12.0333 24.5481 12.0317 24.7214 11.9083 24.7698L8.96499 25.8964C8.78999 25.9631 8.65166 26.0998 8.58166 26.2748Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="font-semibold mt-3">Basic</p>
                        <p>Lorem ipsum</p>
                    </div>

                    <div className="bg-white w-full shadow-lg rounded-2xl p-4">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.25 3.41211C27.25 2.9979 26.9142 2.66211 26.5 2.66211C26.0858 2.66211 25.75 2.9979 25.75 3.41211H27.25ZM25.75 8.74544C25.75 9.15966 26.0858 9.49544 26.5 9.49544C26.9142 9.49544 27.25 9.15966 27.25 8.74544H25.75ZM23.8333 5.32878C23.4191 5.32878 23.0833 5.66456 23.0833 6.07878C23.0833 6.49299 23.4191 6.82878 23.8333 6.82878V5.32878ZM29.1667 6.82878C29.5809 6.82878 29.9167 6.49299 29.9167 6.07878C29.9167 5.66456 29.5809 5.32878 29.1667 5.32878V6.82878ZM3.44019 28.6872C3.40515 29.0999 3.71132 29.4629 4.12405 29.498C4.53678 29.533 4.89977 29.2268 4.93481 28.8141L3.44019 28.6872ZM23.3673 28.7986C23.4024 29.2113 23.7654 29.5174 24.1781 29.4823C24.5909 29.4472 24.897 29.0842 24.8619 28.6715L23.3673 28.7986ZM19.8073 6.07878H20.5573V5.32878H19.8073V6.07878ZM25.75 3.41211V8.74544H27.25V3.41211H25.75ZM23.8333 6.82878H29.1667V5.32878H23.8333V6.82878ZM4.93481 28.8141C5.4279 23.0066 9.47045 18.6882 14.151 18.6882V17.1882C8.46705 17.1882 3.97835 22.3488 3.44019 28.6872L4.93481 28.8141ZM14.151 18.6882C18.8374 18.6882 22.8743 23.0021 23.3673 28.7986L24.8619 28.6715C24.3236 22.3429 19.8397 17.1882 14.151 17.1882V18.6882ZM19.0573 11.735C19.0573 14.4411 16.8614 16.6413 14.151 16.6413V18.1413C17.6907 18.1413 20.5573 15.2686 20.5573 11.735H19.0573ZM14.151 16.6413C11.445 16.6413 9.24479 14.4454 9.24479 11.735H7.74479C7.74479 15.2747 10.6175 18.1413 14.151 18.1413V16.6413ZM9.24479 11.735C9.24479 9.029 11.4407 6.82878 14.151 6.82878V5.32878C10.6114 5.32878 7.74479 8.20147 7.74479 11.735H9.24479ZM14.151 6.82878H19.8073V5.32878H14.151V6.82878ZM19.0573 6.07878V11.735H20.5573V6.07878H19.0573Z" fill="#0D0D0D" />
                        </svg>
                        <p className="font-semibold mt-3">Refer to friends</p>
                        <p>Lorem ipsum</p>
                    </div>
                </section>
            )}

            {!isCustomer && (
                <button className="p-4">
                    <img src={premiumImage} />
                </button>
            )}

            <section className="flex flex-col p-4">
                <h2 className="font-semibold text-lg mb-4">General</h2>

                {isCustomer ? (
                    <div className="flex flex-col gap-4">
                        {customerSettings.map(({ title, description, icon }, key) => (
                            <div key={key} className="flex items-center justify-between border-b-[1px] border-[#BEBEBE] pb-4">
                                <div className="flex items-start gap-4">
                                    {icon}
                                    <div className="flex flex-col">
                                        <p>{title}</p>
                                        <p className="text-sm">{description}</p>
                                    </div>
                                </div>
                                <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75 3.5L16.25 12L7.75 20.5" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                ) : (
                    <div className="flex flex-col gap-4">
                        {providerSettings.map(({ title, icon }, key) => (
                            <div key={key} className="flex items-center justify-between border-b-[1px] border-[#BEBEBE] pb-4">
                                <div className="flex items-start gap-4">
                                    {icon}
                                    <p>{title}</p>

                                </div>
                                <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75 3.5L16.25 12L7.75 20.5" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}


            </section>
        </PublicLayout>
    );
}