import { useState } from "react";
import BottomSheet from "../BottomSheet";
import classNames from "classnames";
import { Checkbox, Field, Label } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setProviderModal, setProviderProfileDone } from "@/features/app";

export default function ProviderProfile() {
    const dispatch = useAppDispatch();
    const { isProviderModal } = useAppSelector(state => state.app);
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const [imageSrc, setImageSrc] = useState('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
        }
    };

    const handleStep = () => {
        if (step === 2) {
            dispatch(setProviderModal(false))
            dispatch(setProviderProfileDone(true))
            navigate("/account")
            return;
        }
        setStep((prev) => prev + 1);
    }

    const [selectedService, setSelectedService] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState('');
    const [selectedPlan, setSelectedPlan] = useState('')

    return (
        <BottomSheet isOpen={isProviderModal} showNotch={false} onClose={() => dispatch(setProviderModal(false))}>
            <div className="flex items-center justify-between p-4 mb-2.5 ">
                <button type="button" onClick={() => setStep((prev) => prev - 1)} className={classNames({ 'hidden': step === 0 })}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 20.5L7.75 12L16.25 3.5" stroke="#0D0D0D" strokeMiterlimit="10" strokeLinecap="round" />
                    </svg>
                </button>
                <h2 className="font-semibold text-md">{step === 0 ? 'Please fill in your company details' : step === 1 ? 'Please fill in your service details' : 'Please select pricing and plan options'}</h2>
                <button type="button" onClick={() => dispatch(setProviderModal(false))} >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 18.5L18.5 5.5M18.5 18.5L5.5 5.5" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center justify-between gap-2 px-4">
                <div className={classNames('h-[6px] w-[120px]', { 'bg-vf-red': step >= 0 })} />
                <div className={classNames('h-[6px] w-[120px] bg-[#BEBEBE] transition-all', { 'bg-vf-red': step >= 1 })} />
                <div className={classNames('h-[6px] w-[120px] bg-[#BEBEBE] transition-all', { 'bg-vf-red': step >= 2 })} />
            </div>

            {step === 0 && (
                <div className="flex flex-col mb-[73px] px-4 pb-4">
                    <div className="flex items-center justify-center my-6">
                        <label htmlFor="file">
                            {imageSrc ? (
                                <div className="relative">
                                    <img src={imageSrc} alt="Uploaded" className="w-[81px] h-[80px] rounded-full object-cover" />
                                    <span className="absolute bottom-2 right-2 rounded-full w-4 h-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" fill="#E60000" />
                                            <path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" stroke="white" stroke-width="2" />
                                            <path d="M14.1309 7.66913L14.4863 7.31749C14.3927 7.22289 14.2653 7.1695 14.1322 7.16914C13.9991 7.16878 13.8714 7.22148 13.7773 7.31558L14.1309 7.66913ZM7.04088 14.7591L6.68732 14.4056C6.62323 14.4697 6.57776 14.55 6.55579 14.6379L7.04088 14.7591ZM6.31421 17.6675L5.82912 17.5463C5.78655 17.7167 5.8365 17.8969 5.9607 18.0211C6.08491 18.1452 6.26516 18.1951 6.43554 18.1525L6.31421 17.6675ZM9.22254 16.94L9.34388 17.425C9.4322 17.4029 9.51282 17.3571 9.57703 17.2926L9.22254 16.94ZM13.7773 7.31393C13.5821 7.50919 13.5821 7.82577 13.7773 8.02103C13.9726 8.2163 14.2892 8.2163 14.4844 8.02103L13.7773 7.31393ZM15.1967 6.60165L15.5503 6.9552L15.5519 6.95352L15.1967 6.60165ZM16.4992 6.60165L16.8549 6.25025L16.8544 6.24978L16.4992 6.60165ZM17.9992 8.11998L18.3534 8.47294L18.7036 8.12152L18.3549 7.76858L17.9992 8.11998ZM16.6372 9.49166L14.4863 7.31749L13.7754 8.02078L15.9263 10.1949L16.6372 9.49166ZM13.7773 7.31558L6.68732 14.4056L7.39443 15.1127L14.4844 8.02269L13.7773 7.31558ZM6.55579 14.6379L5.82912 17.5463L6.7993 17.7887L7.52596 14.8803L6.55579 14.6379ZM6.43554 18.1525L9.34388 17.425L9.10121 16.4549L6.19288 17.1824L6.43554 18.1525ZM9.57703 17.2926L16.6362 10.1959L15.9272 9.49069L8.86805 16.5874L9.57703 17.2926ZM14.4844 8.02103L15.5503 6.9552L14.8432 6.24809L13.7773 7.31393L14.4844 8.02103ZM15.5519 6.95352C15.5907 6.91441 15.6368 6.88336 15.6876 6.86217L15.3027 5.93921C15.13 6.01124 14.9732 6.1168 14.8415 6.24978L15.5519 6.95352ZM15.6876 6.86217C15.7384 6.84099 15.7929 6.83008 15.848 6.83008V5.83008C15.6608 5.83008 15.4755 5.86717 15.3027 5.93921L15.6876 6.86217ZM15.848 6.83008C15.903 6.83008 15.9575 6.84099 16.0083 6.86217L16.3932 5.93921C16.2205 5.86717 16.0351 5.83008 15.848 5.83008V6.83008ZM16.0083 6.86217C16.0591 6.88336 16.1053 6.91441 16.144 6.95352L16.8544 6.24978C16.7227 6.1168 16.566 6.01124 16.3932 5.93921L16.0083 6.86217ZM16.1435 6.95305L17.6435 8.47138L18.3549 7.76858L16.8549 6.25025L16.1435 6.95305ZM17.6451 7.76702L15.9276 9.49035L16.6359 10.1963L18.3534 8.47294L17.6451 7.76702ZM6.9423 14.8627L9.12397 17.0444L9.83108 16.3373L7.64941 14.1556L6.9423 14.8627Z" fill="white" />
                                        </svg>
                                    </span>

                                </div>
                            ) : (
                                <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="80" height="80" rx="40" fill="#F2F2F2" />
                                    <path d="M52.2168 30.8945V30.0612C52.2168 29.6192 52.0412 29.1952 51.7286 28.8827C51.4161 28.5701 50.9921 28.3945 50.5501 28.3945H46.3834C45.9414 28.3945 45.5175 28.5701 45.2049 28.8827C44.8924 29.1952 44.7168 29.6192 44.7168 30.0612V30.8945H28.4918C27.2762 30.8945 26.1104 31.3774 25.2509 32.237C24.3913 33.0965 23.9084 34.2623 23.9084 35.4779V47.9779C23.9084 49.1934 24.3913 50.3592 25.2509 51.2188C26.1104 52.0783 27.2762 52.5612 28.4918 52.5612H52.6355C53.8511 52.5612 55.0169 52.0783 55.8764 51.2188C56.736 50.3592 57.2189 49.1934 57.2189 47.9779V30.8945H52.2168Z" fill="#BEBEBE" />
                                    <path d="M31.3854 35.8893H28.0792C27.8582 35.8893 27.6462 35.8015 27.4899 35.6452C27.3336 35.489 27.2458 35.277 27.2458 35.056C27.2458 34.835 27.3336 34.623 27.4899 34.4667C27.6462 34.3105 27.8582 34.2227 28.0792 34.2227H31.3854C31.6064 34.2227 31.8184 34.3105 31.9747 34.4667C32.131 34.623 32.2188 34.835 32.2188 35.056C32.2188 35.277 32.131 35.489 31.9747 35.6452C31.8184 35.8015 31.6064 35.8893 31.3854 35.8893Z" fill="#F2F2F2" />
                                    <path d="M40.5 47.5247C43.7332 47.5247 46.3542 44.9037 46.3542 41.6705C46.3542 38.4374 43.7332 35.8164 40.5 35.8164C37.2668 35.8164 34.6458 38.4374 34.6458 41.6705C34.6458 44.9037 37.2668 47.5247 40.5 47.5247Z" fill="#F2F2F2" />
                                    <rect x="58" y="57" width="22" height="22" rx="11" fill="#E60000" />
                                    <rect x="58" y="57" width="22" height="22" rx="11" stroke="white" strokeWidth="2" />
                                    <path d="M75.1459 67.9993H62.8542M69.0001 61.8535V74.1452" stroke="white" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>
                            )}
                            <input className="opacity-0 hidden" accept="image/*" onChange={handleImageChange} id="file" type="file" />
                        </label>
                    </div>

                    <div className="flex flex-col items-start">
                        <h2 className="font-semibold">Company information</h2>
                        <div className="border border-[#7E7E7E] rounded-md p-4 w-full mt-4">
                            <div className="flex items-center gap-1 border-b border-[#ebebebe] pb-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.875 15.625C1.59886 15.625 1.375 15.8489 1.375 16.125C1.375 16.4011 1.59886 16.625 1.875 16.625V15.625ZM16.125 16.625C16.4011 16.625 16.625 16.4011 16.625 16.125C16.625 15.8489 16.4011 15.625 16.125 15.625V16.625ZM4.81845 16.125C4.81845 16.4011 5.04231 16.625 5.31845 16.625C5.59459 16.625 5.81845 16.4011 5.81845 16.125H4.81845ZM5.81845 13.125C5.81845 12.8489 5.59459 12.625 5.31845 12.625C5.04231 12.625 4.81845 12.8489 4.81845 13.125H5.81845ZM6.375 1.875V1.375V1.875ZM13.125 1.875H13.625V1.375H13.125V1.875ZM4.125 6.375V6.875V6.375ZM7.875 6.375H8.375V5.875H7.875V6.375ZM11.625 9.375V9.875V9.375ZM15.375 9.375H15.875V8.875H15.375V9.375ZM1.875 16.625H16.125V15.625H1.875V16.625ZM5.81845 16.125V13.125H4.81845V16.125H5.81845ZM5.375 6.09375V3.375H4.375V6.09375H5.375ZM5.375 3.375C5.375 3.10978 5.48036 2.85543 5.66789 2.66789L4.96079 1.96079C4.58571 2.33586 4.375 2.84457 4.375 3.375H5.375ZM5.66789 2.66789C5.85543 2.48036 6.10978 2.375 6.375 2.375V1.375C5.84457 1.375 5.33586 1.58571 4.96079 1.96079L5.66789 2.66789ZM6.375 2.375H13.125V1.375H6.375V2.375ZM12.625 1.875V9.32812H13.625V1.875H12.625ZM3.125 16.125V7.875H2.125V16.125H3.125ZM3.125 7.875C3.125 7.60978 3.23036 7.35543 3.41789 7.16789L2.71079 6.46079C2.33571 6.83586 2.125 7.34457 2.125 7.875H3.125ZM3.41789 7.16789C3.60543 6.98036 3.85978 6.875 4.125 6.875V5.875C3.59457 5.875 3.08586 6.08571 2.71079 6.46079L3.41789 7.16789ZM4.125 6.875H7.875V5.875H4.125V6.875ZM7.375 6.375V16.125H8.375V6.375H7.375ZM10.625 16.125V10.875H9.625V16.125H10.625ZM10.625 10.875C10.625 10.6098 10.7304 10.3554 10.9179 10.1679L10.2108 9.46079C9.83571 9.83586 9.625 10.3446 9.625 10.875H10.625ZM10.9179 10.1679C11.1054 9.98036 11.3598 9.875 11.625 9.875V8.875C11.0946 8.875 10.5859 9.08571 10.2108 9.46079L10.9179 10.1679ZM11.625 9.875H15.375V8.875H11.625V9.875ZM14.875 9.375V16.125H15.875V9.375H14.875Z" fill="#0D0D0D" />
                                </svg>

                                <input type="text" className="outline-none pl-1" placeholder="Company name" />
                            </div>

                            <div className="flex items-center gap-1 border-b border-[#ebebebe] pb-4 mt-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.125 4.125H16.625V3.625H16.125V4.125ZM10.1426 6.63379C9.86644 6.63379 9.64258 6.85765 9.64258 7.13379C9.64258 7.40993 9.86644 7.63379 10.1426 7.63379V6.63379ZM14.25 7.63379C14.5261 7.63379 14.75 7.40993 14.75 7.13379C14.75 6.85765 14.5261 6.63379 14.25 6.63379V7.63379ZM10.1426 8.14258C9.86644 8.14258 9.64258 8.36644 9.64258 8.64258C9.64258 8.91872 9.86644 9.14258 10.1426 9.14258V8.14258ZM14.25 9.14258C14.5261 9.14258 14.75 8.91872 14.75 8.64258C14.75 8.36644 14.5261 8.14258 14.25 8.14258V9.14258ZM10.1426 9.66016C9.86644 9.66016 9.64258 9.88401 9.64258 10.1602C9.64258 10.4363 9.86644 10.6602 10.1426 10.6602V9.66016ZM14.25 10.6602C14.5261 10.6602 14.75 10.4363 14.75 10.1602C14.75 9.88401 14.5261 9.66016 14.25 9.66016V10.6602ZM1.82549 13.3486C1.76779 13.6187 1.93992 13.8844 2.20997 13.9421C2.48001 13.9998 2.74571 13.8277 2.80341 13.5576L1.82549 13.3486ZM8.85352 13.4531L8.36439 13.5568C8.36717 13.57 8.37049 13.583 8.37432 13.5959L8.85352 13.4531ZM8.41807 13.8852C8.42371 14.1613 8.65209 14.3805 8.92817 14.3749C9.20426 14.3693 9.4235 14.1409 9.41786 13.8648L8.41807 13.8852ZM7.49121 6.40723H7.99121V5.90723H7.49121V6.40723ZM15.625 12.375C15.625 12.928 15.178 13.375 14.625 13.375V14.375C15.7302 14.375 16.625 13.4802 16.625 12.375H15.625ZM14.625 13.375H3.375V14.375H14.625V13.375ZM3.375 13.375C2.82204 13.375 2.375 12.928 2.375 12.375H1.375C1.375 13.4802 2.26976 14.375 3.375 14.375V13.375ZM2.375 12.375V5.625H1.375V12.375H2.375ZM2.375 5.625C2.375 5.07204 2.82204 4.625 3.375 4.625V3.625C2.26976 3.625 1.375 4.51976 1.375 5.625H2.375ZM3.375 4.625H16.125V3.625H3.375V4.625ZM15.625 4.125V12.375H16.625V4.125H15.625ZM10.1426 7.63379H14.25V6.63379H10.1426V7.63379ZM10.1426 9.14258H14.25V8.14258H10.1426V9.14258ZM10.1426 10.6602H14.25V9.66016H10.1426V10.6602ZM2.80341 13.5576C3.14371 11.9652 4.31 10.9033 5.58398 10.9033V9.90332C3.71149 9.90332 2.2352 11.4313 1.82549 13.3486L2.80341 13.5576ZM5.58398 10.9033C6.86117 10.9033 8.02698 11.9654 8.36439 13.5568L9.34264 13.3494C8.93591 11.4311 7.45914 9.90332 5.58398 9.90332V10.9033ZM8.37432 13.5959C8.40156 13.6873 8.41599 13.7831 8.41807 13.8852L9.41786 13.8648C9.41409 13.6798 9.3875 13.4943 9.33271 13.3104L8.37432 13.5959ZM6.99121 8.31152C6.99121 9.08764 6.36203 9.71875 5.58398 9.71875V10.7188C6.91531 10.7188 7.99121 9.63892 7.99121 8.31152H6.99121ZM5.58398 9.71875C4.80937 9.71875 4.17969 9.08814 4.17969 8.31152H3.17969C3.17969 9.63842 4.25508 10.7188 5.58398 10.7188V9.71875ZM4.17969 8.31152C4.17969 7.53591 4.80837 6.90723 5.58398 6.90723V5.90723C4.25608 5.90723 3.17969 6.98362 3.17969 8.31152H4.17969ZM5.58398 6.90723H7.49121V5.90723H5.58398V6.90723ZM6.99121 6.40723V8.31152H7.99121V6.40723H6.99121Z" fill="#0D0D0D" />
                                </svg>


                                <input type="text" className="outline-none pl-1" placeholder="Tax identification number" />
                            </div>

                            <div className="flex items-center gap-1 border-b border-[#ebebebe] pb-4 mt-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.095 12.9067C16.0985 12.9341 16.0985 12.9619 16.095 12.9892C16.0907 13.2437 16.0503 13.4962 15.975 13.7392C15.8378 14.2217 15.5921 14.6665 15.2567 15.0395C14.9214 15.4126 14.5052 15.7041 14.04 15.8918C11.79 16.5668 9.39751 15.8918 7.29001 14.8193C5.55117 13.9468 4.1372 12.5407 3.25501 10.8067C2.19001 8.71425 1.50001 6.30675 2.17501 4.05675C2.36948 3.59303 2.66713 3.17977 3.04531 2.84836C3.4235 2.51696 3.87227 2.27616 4.35751 2.14425L5.10751 1.94925C5.16617 1.93412 5.22835 1.94103 5.28226 1.96868C5.33616 1.99632 5.37806 2.04278 5.40001 2.09925L6.00001 3.80175L6.88501 6.27675V6.34425C6.89971 6.40429 6.89449 6.46749 6.87014 6.52431C6.84579 6.58113 6.80363 6.62849 6.75001 6.65925C6.46104 6.876 6.13955 7.0456 5.79751 7.16175C5.38749 7.28875 4.9651 7.37172 4.53751 7.40925C4.49702 7.41319 4.4579 7.42598 4.4229 7.44671C4.38791 7.46745 4.3579 7.49563 4.33501 7.52925C4.31658 7.56523 4.30697 7.60507 4.30697 7.6455C4.30697 7.68592 4.31658 7.72577 4.33501 7.76175C4.77251 9.17451 5.54434 10.4609 6.58501 11.5117C7.63786 12.5499 8.92357 13.3213 10.335 13.7617C10.371 13.7802 10.4108 13.7898 10.4513 13.7898C10.4917 13.7898 10.5315 13.7802 10.5675 13.7617C10.6002 13.7397 10.6279 13.7108 10.6486 13.6772C10.6693 13.6436 10.6825 13.6059 10.6875 13.5667C10.7243 13.1415 10.8073 12.7215 10.935 12.3142C11.0463 11.9724 11.2163 11.6526 11.4375 11.3692C11.4694 11.3115 11.5213 11.2673 11.5835 11.2452C11.6457 11.2231 11.7138 11.2245 11.775 11.2492H11.8425L14.325 12.1342C14.9175 12.3442 15.42 12.5542 16.0125 12.7642C16.0425 12.7492 16.08 12.8542 16.095 12.9067Z" stroke="#0D0D0D" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>

                                <input type="text" className="outline-none pl-1" placeholder="Phone number" />
                            </div>


                            <div className="flex items-center gap-1 border-b border-[#ebebebe] pb-4 mt-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0975 5.19466L9.94122 10.5075C9.81073 10.6438 9.654 10.7522 9.48048 10.8263C9.30695 10.9004 9.12022 10.9386 8.93153 10.9386C8.74284 10.9386 8.55611 10.9004 8.38258 10.8263C8.20906 10.7522 8.05233 10.6438 7.92184 10.5075L3.09747 5.39341M4.12402 4.875C3.7262 4.875 3.34467 5.03304 3.06336 5.31434C2.78206 5.59564 2.62402 5.97718 2.62402 6.375V12C2.62402 12.3978 2.78206 12.7794 3.06336 13.0607C3.34467 13.342 3.7262 13.5 4.12402 13.5H13.874C14.2718 13.5 14.6534 13.342 14.9347 13.0607C15.216 12.7794 15.374 12.3978 15.374 12V4.875H4.12402Z" stroke="#0D0D0D" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>


                                <input type="text" className="outline-none pl-1" placeholder="E-mail address" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start mt-4">
                        <h2 className="font-semibold">Vodafone Pay account details </h2>
                        <div className="border border-[#7E7E7E] rounded-md p-4 w-full mt-4">
                            <div className="flex items-center gap-1 border-b border-[#ebebebe] pb-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.00806 15.7509C3.00806 16.027 3.23191 16.2509 3.50806 16.2509C3.7842 16.2509 4.00806 16.027 4.00806 15.7509H3.00806ZM13.9918 15.7509C13.9918 16.027 14.2157 16.2509 14.4918 16.2509C14.7679 16.2509 14.9918 16.027 14.9918 15.7509H13.9918ZM12.1002 5.74484H11.6002H12.1002ZM8.99992 2.64453V2.14453V2.64453ZM12.1002 2.64453H12.6002V2.14453H12.1002V2.64453ZM4.00806 15.7509C4.00806 12.29 6.32552 9.64805 8.99993 9.64805V8.64805C5.60872 8.64805 3.00806 11.918 3.00806 15.7509H4.00806ZM8.99993 9.64805C11.6743 9.64805 13.9918 12.29 13.9918 15.7509H14.9918C14.9918 11.918 12.3911 8.64805 8.99993 8.64805V9.64805ZM11.6002 5.74484C11.6002 6.25914 11.4477 6.76188 11.162 7.1895L11.9935 7.74507C12.3891 7.153 12.6002 6.45692 12.6002 5.74484H11.6002ZM11.162 7.1895C10.8763 7.61712 10.4702 7.95041 9.99502 8.14722L10.3777 9.0711C11.0356 8.7986 11.5979 8.33714 11.9935 7.74507L11.162 7.1895ZM9.99502 8.14722C9.51987 8.34403 8.99703 8.39552 8.49262 8.29519L8.29753 9.27598C8.99592 9.4149 9.71983 9.3436 10.3777 9.0711L9.99502 8.14722ZM8.49262 8.29519C7.98821 8.19486 7.52488 7.9472 7.16122 7.58354L6.45411 8.29065C6.95763 8.79416 7.59914 9.13706 8.29753 9.27598L8.49262 8.29519ZM7.16122 7.58354C6.79756 7.21988 6.5499 6.75655 6.44957 6.25214L5.46878 6.44723C5.6077 7.14562 5.9506 7.78714 6.45411 8.29065L7.16122 7.58354ZM6.44957 6.25214C6.34924 5.74773 6.40073 5.22489 6.59754 4.74975L5.67366 4.36706C5.40116 5.02493 5.32986 5.74884 5.46878 6.44723L6.44957 6.25214ZM6.59754 4.74975C6.79435 4.2746 7.12764 3.86849 7.55526 3.58276L6.99969 2.75129C6.40762 3.1469 5.94616 3.70919 5.67366 4.36706L6.59754 4.74975ZM7.55526 3.58276C7.98288 3.29704 8.48563 3.14453 8.99992 3.14453V2.14453C8.28784 2.14453 7.59176 2.35569 6.99969 2.75129L7.55526 3.58276ZM8.99992 3.14453H12.1002V2.14453H8.99992V3.14453ZM11.6002 2.64453V5.74484H12.6002V2.64453H11.6002Z" fill="#0D0D0D" />
                                </svg>


                                <input type="text" className="outline-none pl-1" placeholder="Name & Surname" />
                            </div>

                            <div className="flex items-center gap-1 border-b border-[#ebebebe] pb-4 mt-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.875 7.12547H16.125M3.375 4.13672H16.125V12.4055C16.125 12.8033 15.967 13.1848 15.6857 13.4661C15.4044 13.7474 15.0228 13.9055 14.625 13.9055H3.375C2.97718 13.9055 2.59564 13.7474 2.31434 13.4661C2.03304 13.1848 1.875 12.8033 1.875 12.4055V5.63672C1.875 5.23889 2.03304 4.85736 2.31434 4.57606C2.59564 4.29475 2.97718 4.13672 3.375 4.13672Z" stroke="#0D0D0D" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>



                                <input type="text" className="outline-none pl-1" placeholder="IBAN" />
                            </div>


                        </div>
                    </div>
                </div>
            )}

            {step === 1 && (
                <div className="flex flex-col mb-[73px] px-4 pb-4 mt-4">
                    <div className="flex flex-col">
                        <h2 className="font-semibold mb-4">Types of services</h2>
                        <div className="grid grid-cols-3 gap-3 w-full">
                            <button type="button" onClick={() => setSelectedService('Cleaning')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                '!border-[#008A00]': selectedService && selectedService === 'Cleaning',
                                'border-[#BEBEBE]': !selectedService,
                            })}>
                                Cleaning
                            </button>
                            <button type="button" onClick={() => setSelectedService('Catering')} className={classNames('w-full border flex-none   rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedService && selectedService === 'Catering',
                                'border-[#BEBEBE]': !selectedService,
                            })}>
                                Catering
                            </button>

                            <button type="button" onClick={() => setSelectedService('Repair')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedService && selectedService === 'Repair',
                                'border-[#BEBEBE]': !selectedService,
                            })}>
                                Repair
                            </button>

                            <button type="button" onClick={() => setSelectedService('Assembly')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedService && selectedService === 'Assembly',
                                'border-[#BEBEBE]': !selectedService,
                            })}>
                                Assembly
                            </button>


                            <button type="button" onClick={() => setSelectedService('Electrical')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedService && selectedService === 'Electrical',
                                'border-[#BEBEBE]': !selectedService,
                            })}>
                                Electrical
                            </button>


                            <button type="button" onClick={() => setSelectedService('Dressmaker')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedService && selectedService === 'Dressmaker',
                                'border-[#BEBEBE]': !selectedService,
                            })}>
                                Dressmaker
                            </button>

                            <button type="button" onClick={() => setSelectedService('Technical S.')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedService && selectedService === 'Technical S.',
                                'border-[#BEBEBE]': !selectedService,
                            })}>
                                Technical S.
                            </button>
                        </div>

                        <h2 className="font-semibold my-4">Number of employees</h2>
                        <div className="grid grid-cols-4 gap-3 w-full">
                            <button type="button" onClick={() => setSelectedEmployee('1-10')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                '!border-[#008A00]': selectedEmployee && selectedEmployee === '1-10',
                                'border-[#BEBEBE]': !selectedEmployee,
                            })}>
                                1-10
                            </button>
                            <button type="button" onClick={() => setSelectedEmployee('10-50')} className={classNames('w-full border flex-none   rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedEmployee && selectedEmployee === '10-50',
                                'border-[#BEBEBE]': !selectedEmployee,
                            })}>
                                10-50
                            </button>

                            <button type="button" onClick={() => setSelectedEmployee('50-100')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedEmployee && selectedEmployee === '50-100',
                                'border-[#BEBEBE]': !selectedEmployee,
                            })}>
                                50-100
                            </button>

                            <button type="button" onClick={() => setSelectedEmployee('100 +')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedEmployee && selectedEmployee === '100 +',
                                'border-[#BEBEBE]': !selectedEmployee,
                            })}>
                                100 +
                            </button>
                        </div>

                        <h2 className="font-semibold my-4">Which days of the week do you work?</h2>
                        <div className="grid grid-cols-3 gap-3 w-full">
                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">All day</Label>
                            </Field>

                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">Wednesday</Label>
                            </Field>


                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">Saturday</Label>
                            </Field>

                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">Monday</Label>
                            </Field>

                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">Thursday</Label>
                            </Field>

                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">Sunday</Label>
                            </Field>

                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">Tuesday</Label>
                            </Field>

                            <Field className="flex items-center gap-2">
                                <Checkbox className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <Label className="text-[#0D0D0D]">Friday</Label>
                            </Field>
                        </div>

                        <h2 className="font-semibold my-4">Do you have equipment and cleaning supplies?</h2>
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <button type="button" onClick={() => setSelectedEquipment('Yes')} className={classNames('w-full border flex-none  rounded-lg flex items-center justify-center px-4 py-2', {
                                '!border-[#008A00]': selectedEquipment && selectedEquipment === 'Yes',
                                'border-[#BEBEBE]': !selectedEquipment,
                            })}>
                                Yes
                            </button>
                            <button type="button" onClick={() => setSelectedEquipment('No')} className={classNames('w-full border flex-none   rounded-lg flex items-center justify-center px-4 py-2', {
                                'border-[#008A00]': selectedEquipment && selectedEquipment === 'No',
                                'border-[#BEBEBE]': !selectedEquipment,
                            })}>
                                No
                            </button>
                        </div>
                    </div>


                </div>
            )}

            {step === 2 && (
                <div className="flex flex-col mb-[73px] px-4 pb-4">
                    <div className={classNames('border rounded-lg shadow-md p-4 flex items-start justify-between mt-6', {
                        'border-[#ebebeb] ': selectedPlan !== 'free',
                        'border-[#008A00]': selectedPlan === 'free'
                    })}
                        onClick={() => setSelectedPlan(selectedPlan === 'free' ? '' : 'free')}>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold">Free</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Justo commodo.</p>
                            <button type="button" className="flex items-center gap-1 text-vf-red">
                                See benefits
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6668 5.16602L8.00016 10.8327L2.3335 5.16602" stroke="#E60000" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>

                            </button>
                        </div>

                        <Checkbox checked={selectedPlan === 'free'} onChange={(value) => { value ? setSelectedPlan('free') : setSelectedPlan('') }} className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Checkbox>

                    </div>

                    <div className={classNames('border rounded-lg shadow-md p-4 flex items-start justify-between mt-4', {
                        'border-[#ebebeb] ': selectedPlan !== 'basic',
                        'border-[#008A00]': selectedPlan === 'basic'
                    })}
                        onClick={() => setSelectedPlan(selectedPlan === 'basic' ? '' : 'basic')}>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold">Basic</h2>
                            <p><span className="text-[32px] font-semibold">10€</span> month</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Justo commodo.</p>
                            <button type="button" className="flex items-center gap-1 text-vf-red">
                                See benefits
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6668 5.16602L8.00016 10.8327L2.3335 5.16602" stroke="#E60000" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>

                            </button>
                        </div>

                        <Checkbox checked={selectedPlan === 'basic'} onChange={(value) => { value ? setSelectedPlan('basic') : setSelectedPlan('') }} className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Checkbox>

                    </div>

                    <div className={classNames('border rounded-lg shadow-md p-4 flex items-start justify-between mt-4', {
                        'border-[#ebebeb] ': selectedPlan !== 'Premium',
                        'border-[#008A00]': selectedPlan === 'Premium'
                    })}
                        onClick={() => setSelectedPlan(selectedPlan === 'Premium' ? '' : 'Premium')}>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold">Premium</h2>
                            <p><span className="text-[32px] font-semibold">20€</span> month</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Justo commodo.</p>
                            <button type="button" className="flex items-center gap-1 text-vf-red">
                                See benefits
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6668 5.16602L8.00016 10.8327L2.3335 5.16602" stroke="#E60000" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>

                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-[#FECB00] text-sm px-4 py-1.5 rounded-full">Recommended</div>
                            <Checkbox checked={selectedPlan === 'Premium'} onChange={(value) => { value ? setSelectedPlan('Premium') : setSelectedPlan('') }} className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Checkbox>
                        </div>

                    </div>


                    <div className={classNames('border rounded-lg shadow-md p-4 flex items-start justify-between mt-4', {
                        'border-[#ebebeb] ': selectedPlan !== 'Enterprise',
                        'border-[#008A00]': selectedPlan === 'Enterprise'
                    })}
                        onClick={() => setSelectedPlan(selectedPlan === 'Enterprise' ? '' : 'Enterprise')}>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold">Enterprise</h2>
                            <p><span className="text-[32px] font-semibold">50€</span> month</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Justo commodo.</p>
                            <button type="button" className="flex items-center gap-1 text-vf-red">
                                See benefits
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6668 5.16602L8.00016 10.8327L2.3335 5.16602" stroke="#E60000" stroke-miterlimit="10" strokeMiterlimit="round" />
                                </svg>

                            </button>
                        </div>

                        <Checkbox checked={selectedPlan === 'Enterprise'} onChange={(value) => { value ? setSelectedPlan('Enterprise') : setSelectedPlan('') }} className="group flex items-center justify-center  size-6 rounded border bg-white data-[checked]:bg-[#00697C]">
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L4.15789 8L1 4.76923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Checkbox>

                    </div>
                </div>
            )}
            <div className="p-4 fixed bottom-0 left-0 w-full bg-white border-t border-[#E5E5E5]">
                <button onClick={handleStep} className="bg-vf-red  rounded-md text-white w-full flex items-center justify-center p-2">
                    {step < 2 ? 'Next' : 'Create your profile'}
                </button>
            </div>

        </BottomSheet>
    )
}