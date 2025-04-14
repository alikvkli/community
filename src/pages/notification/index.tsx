import PublicLayout from "@/layouts/PublicLayout"
import providerImage from "@/images/provider.png"
import profileImage1 from "@/images/profile_1.png"
import profileImage2 from "@/images/profile_2.jpg"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { setIsCheckOut } from "@/features/app"

export default function NotificationPage() {
    const { isScheduleRequest, acceptAppointment, isCustomer } = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();

    return (
        <PublicLayout>
            <section className="flex flex-col">

                {isScheduleRequest && acceptAppointment && isCustomer && (
                    <div className="bg-vf-red/10">
                        <div className="flex items-start gap-3 p-4">
                            <div className="flex items-center">
                                <span className="w-2.5 h-2.5 bg-vf-red rounded-full mr-1" />
                                <img src={providerImage} className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div className="flex-1 flex items-start justify-between">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm">
                                        The service you received from Super Clean Service has been completed. <span className="font-semibold">Please confirm the payment.</span>
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <button type="button" onClick={() => dispatch(setIsCheckOut(true))} className="text-white flex items-center px-4 py-1.5 text-sm rounded-md bg-vf-red">Confirm</button>
                                        <button className="text-black border-[1px] border-black flex items-center px-4 py-1.5 text-sm rounded-md">Decline</button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <p className="text-sm text-[#7E7E7E]">2m</p>
                                    <button type="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 12C6.5 12.8281 5.82812 13.5 5 13.5C4.17188 13.5 3.5 12.8281 3.5 12C3.5 11.1719 4.17188 10.5 5 10.5C5.82812 10.5 6.5 11.1719 6.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.5 12C13.5 12.8281 12.8281 13.5 12 13.5C11.1719 13.5 10.5 12.8281 10.5 12C10.5 11.1719 11.1719 10.5 12 10.5C12.8281 10.5 13.5 11.1719 13.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20.5 12C20.5 12.8281 19.8281 13.5 19 13.5C18.1719 13.5 17.5 12.8281 17.5 12C17.5 11.1719 18.1719 10.5 19 10.5C19.8281 10.5 20.5 11.1719 20.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {isCustomer && (
                    <div className="bg-vf-red/10">
                        <div className="flex items-start gap-3 p-4">
                            <div className="flex items-center">
                                <span className="w-2.5 h-2.5 bg-vf-red rounded-full mr-1" />
                                <img src={providerImage} className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div className="flex-1 flex items-start justify-between">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm"><span className="font-semibold">Super Clean Service</span> has confirmed your appointment.</p>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.16675 1.10742C5.16675 0.831279 4.94289 0.607422 4.66675 0.607422C4.39061 0.607422 4.16675 0.831279 4.16675 1.10742H5.16675ZM4.16675 3.60742C4.16675 3.88357 4.39061 4.10742 4.66675 4.10742C4.94289 4.10742 5.16675 3.88357 5.16675 3.60742H4.16675ZM11.8334 1.10742C11.8334 0.831279 11.6096 0.607422 11.3334 0.607422C11.0573 0.607422 10.8334 0.831279 10.8334 1.10742H11.8334ZM10.8334 3.60742C10.8334 3.88357 11.0573 4.10742 11.3334 4.10742C11.6096 4.10742 11.8334 3.88357 11.8334 3.60742H10.8334ZM0.916748 15.2741H0.416748H0.916748ZM2.58341 2.77409V2.27409V2.77409ZM15.0834 2.77409H15.5834V2.27409H15.0834V2.77409ZM15.0834 5.80323C15.3596 5.80323 15.5834 5.57938 15.5834 5.30323C15.5834 5.02709 15.3596 4.80323 15.0834 4.80323V5.80323ZM0.916748 4.80323C0.640606 4.80323 0.416748 5.02709 0.416748 5.30323C0.416748 5.57938 0.640606 5.80323 0.916748 5.80323V4.80323ZM4.16675 1.10742V3.60742H5.16675V1.10742H4.16675ZM10.8334 1.10742V3.60742H11.8334V1.10742H10.8334ZM14.5834 15.2741C14.5834 15.5835 14.4605 15.8803 14.2417 16.099L14.9488 16.8062C15.3551 16.3998 15.5834 15.8487 15.5834 15.2741H14.5834ZM14.2417 16.099C14.0229 16.3178 13.7262 16.4408 13.4167 16.4408V17.4408C13.9914 17.4408 14.5425 17.2125 14.9488 16.8062L14.2417 16.099ZM13.4167 16.4408H2.58341V17.4408H13.4167V16.4408ZM2.58341 16.4408C2.274 16.4408 1.97725 16.3178 1.75846 16.099L1.05135 16.8062C1.45768 17.2125 2.00878 17.4408 2.58341 17.4408V16.4408ZM1.75846 16.099C1.53966 15.8803 1.41675 15.5835 1.41675 15.2741H0.416748C0.416748 15.8487 0.645021 16.3998 1.05135 16.8062L1.75846 16.099ZM1.41675 15.2741V4.44076H0.416748V15.2741H1.41675ZM1.41675 4.44076C1.41675 4.13134 1.53966 3.83459 1.75846 3.6158L1.05135 2.90869C0.645021 3.31502 0.416748 3.86612 0.416748 4.44076H1.41675ZM1.75846 3.6158C1.97725 3.39701 2.274 3.27409 2.58341 3.27409V2.27409C2.00878 2.27409 1.45768 2.50236 1.05135 2.90869L1.75846 3.6158ZM2.58341 3.27409H15.0834V2.27409H2.58341V3.27409ZM14.5834 2.77409V15.2741H15.5834V2.77409H14.5834ZM15.0834 4.80323H0.916748V5.80323H15.0834V4.80323ZM3.41675 8.29168H4.73237V7.29168H3.41675V8.29168ZM4.73237 8.29168C4.68635 8.29168 4.64904 8.25437 4.64904 8.20834H5.64904C5.64904 7.70208 5.23863 7.29168 4.73237 7.29168V8.29168ZM4.64904 8.20834V9.52397H5.64904V8.20834H4.64904ZM4.64904 9.52397C4.64904 9.47794 4.68635 9.44063 4.73237 9.44063V10.4406C5.23863 10.4406 5.64904 10.0302 5.64904 9.52397H4.64904ZM4.73237 9.44063H3.41675V10.4406H4.73237V9.44063ZM3.41675 9.44063C3.46277 9.44063 3.50008 9.47794 3.50008 9.52397H2.50008C2.50008 10.0302 2.91049 10.4406 3.41675 10.4406V9.44063ZM3.50008 9.52397V8.20834H2.50008V9.52397H3.50008ZM3.50008 8.20834C3.50008 8.25437 3.46277 8.29168 3.41675 8.29168V7.29168C2.91049 7.29168 2.50008 7.70208 2.50008 8.20834H3.50008ZM7.31675 8.29168H8.63237V7.29168H7.31675V8.29168ZM8.63237 8.29168C8.58635 8.29168 8.54904 8.25437 8.54904 8.20834H9.54904C9.54904 7.70208 9.13863 7.29168 8.63237 7.29168V8.29168ZM8.54904 8.20834V9.52397H9.54904V8.20834H8.54904ZM8.54904 9.52397C8.54904 9.47794 8.58635 9.44063 8.63237 9.44063V10.4406C9.13863 10.4406 9.54904 10.0302 9.54904 9.52397H8.54904ZM8.63237 9.44063H7.31675V10.4406H8.63237V9.44063ZM7.31675 9.44063C7.36277 9.44063 7.40008 9.47794 7.40008 9.52397H6.40008C6.40008 10.0302 6.81049 10.4406 7.31675 10.4406V9.44063ZM7.40008 9.52397V8.20834H6.40008V9.52397H7.40008ZM7.40008 8.20834C7.40008 8.25437 7.36277 8.29168 7.31675 8.29168V7.29168C6.81049 7.29168 6.40008 7.70208 6.40008 8.20834H7.40008ZM11.2678 8.2865H12.5834V7.2865H11.2678V8.2865ZM12.5834 8.2865C12.5374 8.2865 12.5001 8.24919 12.5001 8.20317H13.5001C13.5001 7.69691 13.0897 7.2865 12.5834 7.2865V8.2865ZM12.5001 8.20317V9.5188H13.5001V8.20317H12.5001ZM12.5001 9.5188C12.5001 9.47278 12.5374 9.43547 12.5834 9.43547V10.4355C13.0897 10.4355 13.5001 10.0251 13.5001 9.5188H12.5001ZM12.5834 9.43547H11.2678V10.4355H12.5834V9.43547ZM11.2678 9.43547C11.3138 9.43547 11.3511 9.47278 11.3511 9.5188H10.3511C10.3511 10.0251 10.7615 10.4355 11.2678 10.4355V9.43547ZM11.3511 9.5188V8.20317H10.3511V9.5188H11.3511ZM11.3511 8.20317C11.3511 8.24919 11.3138 8.2865 11.2678 8.2865V7.2865C10.7615 7.2865 10.3511 7.69691 10.3511 8.20317H11.3511ZM3.41675 12.8095H4.73237V11.8095H3.41675V12.8095ZM4.73237 12.8095C4.68635 12.8095 4.64904 12.7722 4.64904 12.7261H5.64904C5.64904 12.2199 5.23863 11.8095 4.73237 11.8095V12.8095ZM4.64904 12.7261V14.0418H5.64904V12.7261H4.64904ZM4.64904 14.0418C4.64904 13.9957 4.68635 13.9584 4.73237 13.9584V14.9584C5.23863 14.9584 5.64904 14.548 5.64904 14.0418H4.64904ZM4.73237 13.9584H3.41675V14.9584H4.73237V13.9584ZM3.41675 13.9584C3.46277 13.9584 3.50008 13.9957 3.50008 14.0418H2.50008C2.50008 14.548 2.91049 14.9584 3.41675 14.9584V13.9584ZM3.50008 14.0418V12.7261H2.50008V14.0418H3.50008ZM3.50008 12.7261C3.50008 12.7722 3.46277 12.8095 3.41675 12.8095V11.8095C2.91049 11.8095 2.50008 12.2199 2.50008 12.7261H3.50008ZM7.31675 12.8095H8.63237V11.8095H7.31675V12.8095ZM8.63237 12.8095C8.58635 12.8095 8.54904 12.7722 8.54904 12.7261H9.54904C9.54904 12.2199 9.13863 11.8095 8.63237 11.8095V12.8095ZM8.54904 12.7261V14.0418H9.54904V12.7261H8.54904ZM8.54904 14.0418C8.54904 13.9957 8.58635 13.9584 8.63237 13.9584V14.9584C9.13863 14.9584 9.54904 14.548 9.54904 14.0418H8.54904ZM8.63237 13.9584H7.31675V14.9584H8.63237V13.9584ZM7.31675 13.9584C7.36277 13.9584 7.40008 13.9957 7.40008 14.0418H6.40008C6.40008 14.548 6.81049 14.9584 7.31675 14.9584V13.9584ZM7.40008 14.0418V12.7261H6.40008V14.0418H7.40008ZM7.40008 12.7261C7.40008 12.7722 7.36277 12.8095 7.31675 12.8095V11.8095C6.81049 11.8095 6.40008 12.2199 6.40008 12.7261H7.40008ZM11.2678 12.8041H12.5834V11.8041H11.2678V12.8041ZM12.5834 12.8041C12.5374 12.8041 12.5001 12.7668 12.5001 12.7208H13.5001C13.5001 12.2145 13.0897 11.8041 12.5834 11.8041V12.8041ZM12.5001 12.7208V14.0364H13.5001V12.7208H12.5001ZM12.5001 14.0364C12.5001 13.9904 12.5374 13.9531 12.5834 13.9531V14.9531C13.0897 14.9531 13.5001 14.5427 13.5001 14.0364H12.5001ZM12.5834 13.9531H11.2678V14.9531H12.5834V13.9531ZM11.2678 13.9531C11.3138 13.9531 11.3511 13.9904 11.3511 14.0364H10.3511C10.3511 14.5427 10.7615 14.9531 11.2678 14.9531V13.9531ZM11.3511 14.0364V12.7208H10.3511V14.0364H11.3511ZM11.3511 12.7208C11.3511 12.7668 11.3138 12.8041 11.2678 12.8041V11.8041C10.7615 11.8041 10.3511 12.2145 10.3511 12.7208H11.3511Z" fill="#0D0D0D" />
                                        </svg>
                                        <p className="text-sm">07 April 2025, Monday mornings</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <p className="text-sm text-[#7E7E7E]">2m</p>
                                    <button type="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 12C6.5 12.8281 5.82812 13.5 5 13.5C4.17188 13.5 3.5 12.8281 3.5 12C3.5 11.1719 4.17188 10.5 5 10.5C5.82812 10.5 6.5 11.1719 6.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.5 12C13.5 12.8281 12.8281 13.5 12 13.5C11.1719 13.5 10.5 12.8281 10.5 12C10.5 11.1719 11.1719 10.5 12 10.5C12.8281 10.5 13.5 11.1719 13.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20.5 12C20.5 12.8281 19.8281 13.5 19 13.5C18.1719 13.5 17.5 12.8281 17.5 12C17.5 11.1719 18.1719 10.5 19 10.5C19.8281 10.5 20.5 11.1719 20.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex items-start gap-3 pt-4 pb-4 pl-4">
                    <div className="flex items-center">
                        <img src={profileImage1} className="w-12 h-12 rounded-full object-cover" />
                    </div>
                    <div className="flex-1 flex items-start gap-3 justify-between border-b border-[#BEBEBE] pb-4 pr-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">
                                <span className="font-semibold">Patrick</span> added a comment on <span className="font-semibold">House cleaning - Deep cleaning</span>
                            </p>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="bg-vf-red/20 w-1 h-10" />
                                {`“I am very satisfied with the cleaning. Thank you.”`}
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-sm text-[#7E7E7E]">8h</p>
                            <button type="button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 12C6.5 12.8281 5.82812 13.5 5 13.5C4.17188 13.5 3.5 12.8281 3.5 12C3.5 11.1719 4.17188 10.5 5 10.5C5.82812 10.5 6.5 11.1719 6.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5 12C13.5 12.8281 12.8281 13.5 12 13.5C11.1719 13.5 10.5 12.8281 10.5 12C10.5 11.1719 11.1719 10.5 12 10.5C12.8281 10.5 13.5 11.1719 13.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.5 12C20.5 12.8281 19.8281 13.5 19 13.5C18.1719 13.5 17.5 12.8281 17.5 12C17.5 11.1719 18.1719 10.5 19 10.5C19.8281 10.5 20.5 11.1719 20.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-3 pt-4 pb-4 pl-4">
                    <div className="flex items-center">
                        <img src={profileImage2} className="w-12 h-12 rounded-full object-cover" />
                    </div>
                    <div className="flex-1 flex items-start gap-3 justify-between border-b border-[#BEBEBE] pb-4 pr-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm ">
                                <span className="font-semibold">Samantha</span> has uploaded her new work to her portfolio.
                            </p>
                            <div className="flex  items-center gap-2 ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.58594 14.873L7.5293 8.30078L13.6758 14.4473L15.9121 12.2129L20.5 16.8008" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.5625 7C18.5625 7.86328 17.8633 8.5625 17 8.5625C16.1367 8.5625 15.4375 7.86328 15.4375 7C15.4375 6.13672 16.1367 5.4375 17 5.4375C17.8633 5.4375 18.5625 6.13672 18.5625 7Z" stroke="#E60000" strokeMiterlimit="10" strokeLinecap="round" />
                                    <path d="M5.5 3.5H20.5V18.5C20.5 19.6055 19.6055 20.5 18.5 20.5H5.5C4.39453 20.5 3.5 19.6055 3.5 18.5V5.5C3.5 4.39453 4.39453 3.5 5.5 3.5Z" stroke="#0D0D0D" strokeLinecap="round" />
                                </svg>
                                <p className="text-sm">Standart cleaning.jpeg <span className="text-[#7E7E7E]">2.2 MB</span></p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-sm text-[#7E7E7E]">14h</p>
                            <button type="button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 12C6.5 12.8281 5.82812 13.5 5 13.5C4.17188 13.5 3.5 12.8281 3.5 12C3.5 11.1719 4.17188 10.5 5 10.5C5.82812 10.5 6.5 11.1719 6.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5 12C13.5 12.8281 12.8281 13.5 12 13.5C11.1719 13.5 10.5 12.8281 10.5 12C10.5 11.1719 11.1719 10.5 12 10.5C12.8281 10.5 13.5 11.1719 13.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.5 12C20.5 12.8281 19.8281 13.5 19 13.5C18.1719 13.5 17.5 12.8281 17.5 12C17.5 11.1719 18.1719 10.5 19 10.5C19.8281 10.5 20.5 11.1719 20.5 12Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </PublicLayout>
    )
}