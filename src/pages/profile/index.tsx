import PublicLayout from "@/layouts/PublicLayout";
import profileAvatar from "@/images/profile.png"
import service2 from "@/images/services/service_2.png"
import { Switch } from "@headlessui/react";

export default function ProfilePage() {
    return (
        <PublicLayout>
            <div className="bg-[#edaabe] px-8 pb-4 rounded-b-2xl">
                <div className="flex gap-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative">
                            <img src={profileAvatar} />
                            <div className="w-9 h-9 bg-[#008A00] flex items-center justify-center rounded-full absolute bottom-3 right-4">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.0823 5.48186C18.3752 5.18897 18.3752 4.7141 18.0823 4.4212C17.7894 4.12831 17.3146 4.12831 17.0217 4.4212L18.0823 5.48186ZM9.16985 13.3337L8.63928 13.8638L9.16961 14.3946L9.70018 13.864L9.16985 13.3337ZM5.97645 9.07638C5.68368 8.78336 5.20881 8.78316 4.91579 9.07592C4.62277 9.36869 4.62256 9.84356 4.91533 10.1366L5.97645 9.07638ZM18.3435 7.70498C18.2336 7.30562 17.8207 7.07098 17.4213 7.1809C17.022 7.29082 16.7873 7.70367 16.8973 8.10304L18.3435 7.70498ZM13.2096 17.2237L13.5136 17.9093L13.5144 17.9089L13.2096 17.2237ZM3.33651 14.2484L3.96887 13.8451L3.96869 13.8449L3.33651 14.2484ZM4.80136 4.04333L4.3085 3.47801L4.30814 3.47832L4.80136 4.04333ZM14.6287 4.54366C14.9446 4.81161 15.4179 4.77275 15.6858 4.45687C15.9537 4.14099 15.9149 3.66771 15.599 3.39977L14.6287 4.54366ZM17.0217 4.4212L8.63952 12.8034L9.70018 13.864L18.0823 5.48186L17.0217 4.4212ZM9.70041 12.8036L5.97645 9.07638L4.91533 10.1366L8.63928 13.8638L9.70041 12.8036ZM16.8973 8.10304C17.8371 11.5175 16.1374 15.1004 12.9047 16.5384L13.5144 17.9089C17.4237 16.1699 19.4805 11.8361 18.3435 7.70498L16.8973 8.10304ZM12.9055 16.5381C9.67001 17.9731 5.87217 16.8297 3.96887 13.8451L2.70415 14.6517C5.00658 18.2621 9.60067 19.6448 13.5136 17.9093L12.9055 16.5381ZM3.96869 13.8449C2.06548 10.8634 2.62816 6.93593 5.29457 4.60834L4.30814 3.47832C1.08262 6.29396 0.401819 11.0449 2.70433 14.652L3.96869 13.8449ZM5.29422 4.60865C7.96096 2.28372 11.9301 2.25453 14.6287 4.54366L15.599 3.39977C12.3341 0.630312 7.53368 0.666219 4.3085 3.47801L5.29422 4.60865Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-semibold text-xl">Marry</p>
                            <p>Company name</p>
                        </div>
                    </div>
                    <div>
                        <div className="border-b border-[#F5638A] py-2">
                            <p className="text-xl font-semibold">17</p>
                            <p>Review</p>
                        </div>
                        <div className="border-b border-[#F5638A] py-2">
                            <p className="text-xl font-semibold">4.90</p>
                            <p>Raiting</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">17</p>
                            <p>Number of services provided</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="p-4">
                <h2 className="font-semibold text-lg pb-4">Categories and services</h2>

                <div className="flex items-center gap-4 overflow-x-auto w-full">
                    <div className="flex items-start gap-4 bg-white shadow-xl rounded-lg p-4 min-w-[320px]">
                        <img className="w-[80px] h-[50px]" src={service2} />
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-lg">Cleaning</h2>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <span className="block rounded-full w-[10px] h-[10px] bg-[#0096AD]"></span>
                                    Standart
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="block rounded-full w-[10px] h-[10px] bg-[#B04A98]"></span>
                                    Deep
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white shadow-xl rounded-lg p-4 min-w-[320px]">
                        <img className="w-[80px] h-[50px]" src={service2} />
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-lg">Cleaning</h2>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <span className="block rounded-full w-[10px] h-[10px] bg-[#0096AD]"></span>
                                    Standart
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="block rounded-full w-[10px] h-[10px] bg-[#B04A98]"></span>
                                    Deep
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-4">
                <h2 className="font-semibold text-lg pb-4">Business hightlights</h2>
                <div className="flex items-center overflow-x-auto gap-3">
                    <div className="flex flex-col justify-center items-center w-[80px]">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.085 32.6729L43.6618 43.2497" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.6616 35.75C31.4606 35.75 36.1616 31.049 36.1616 25.25C36.1616 19.451 31.4606 14.75 25.6616 14.75C19.8626 14.75 15.1616 19.451 15.1616 25.25C15.1616 31.049 19.8626 35.75 25.6616 35.75Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.3906 29.8958C20.5906 29.8958 18.4198 25.4249 18.3406 25.2166C18.2865 25.0708 18.299 24.9083 18.3781 24.7708C18.6906 24.1583 20.8781 20.2041 25.3948 20.2041C30.1948 20.2041 32.3656 24.6833 32.449 24.8833C32.474 24.9624 32.4865 25.0499 32.474 25.1291C32.4656 25.1999 32.4448 25.2708 32.4073 25.3291C32.0865 25.9458 29.899 29.8916 25.3906 29.8916V29.8958Z" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.3907 27.9165C23.7907 27.9081 22.4949 26.6081 22.499 25.0081C22.5032 23.4081 23.8032 22.1123 25.4032 22.1123C27.0032 22.1123 28.3032 23.4081 28.3074 25.0081C28.3074 26.6081 27.0199 27.9123 25.4157 27.9165H25.3907Z" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                            <g clip-path="url(#clip0_78_4931)">
                                <path d="M9.86572 23.8004L7.61572 19.9033L11.5128 17.6533" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.1157 38.0898L20.3657 41.987L24.2628 39.737" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M38.5522 31.487L42.4494 29.237L40.1994 25.3398" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31.9494 11.0504L29.6994 7.15332L25.8022 9.40332" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_78_4931">
                                    <rect width="36" height="36" fill="white" transform="translate(0.411621 18) rotate(-30)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-sm text-center">Attention to detail</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[80px]">
                        <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3659 12.8574H17.1562" stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.0613 19.893L17.7609 21.393L16.4604 19.893L17.094 14.643C17.1102 14.4787 17.1874 14.3262 17.3107 14.2153C17.4339 14.1044 17.5944 14.0429 17.7609 14.043V14.043C17.9273 14.0429 18.0878 14.1044 18.211 14.2153C18.3343 14.3262 18.4115 14.4787 18.4277 14.643L19.0613 19.893Z" stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.90332 21.9761C8.90332 16.1426 12.8696 11.4131 17.7612 11.4131C22.6528 11.4131 26.619 16.1426 26.619 21.9761" stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.7618 5.9605C22.7618 6.94159 22.4685 7.90066 21.919 8.71641C21.3696 9.53216 20.5886 10.168 19.6749 10.5434C18.7611 10.9189 17.7557 11.0171 16.7857 10.8257C15.8157 10.6343 14.9247 10.1618 14.2254 9.4681C13.526 8.77437 13.0498 7.89049 12.8568 6.92825C12.6639 5.966 12.7629 4.96861 13.1414 4.0622C13.5199 3.15579 14.1608 2.38106 14.9831 1.83599C15.8054 1.29093 16.7722 1 17.7613 1H22.7618V5.9605Z" stroke="#0D0D0D" />
                            <path d="M29.0056 30.8521C32.7973 30.8521 35.8711 27.7783 35.8711 23.9866C35.8711 20.1949 32.7973 17.1211 29.0056 17.1211C25.2139 17.1211 22.1401 20.1949 22.1401 23.9866C22.1401 27.7783 25.2139 30.8521 29.0056 30.8521Z" fill="white" stroke="#0D0D0D" stroke-miterlimit="10" />
                            <path d="M23.744 28.4004L20.5401 34.1141C20.524 34.1433 20.5168 34.1754 20.5197 34.2089C20.5226 34.2425 20.5357 34.2731 20.5561 34.2993C20.5765 34.3256 20.6043 34.3446 20.6363 34.3548C20.6684 34.365 20.702 34.365 20.734 34.3562L24.2297 33.3471L25.1922 36.8573C25.2009 36.8893 25.2199 36.9185 25.2447 36.9389C25.2695 36.9608 25.3001 36.9739 25.3336 36.9783H25.3526C25.3818 36.9783 25.4109 36.971 25.4372 36.9564C25.4634 36.9418 25.4838 36.92 25.4984 36.8937L28.8876 30.8519" stroke="#0D0D0D" stroke-linejoin="round" />
                            <path d="M29.2568 30.8441L32.6475 36.8904C32.662 36.9166 32.6825 36.9385 32.7087 36.9531C32.735 36.9677 32.7641 36.9764 32.7933 36.975H32.8123C32.8458 36.9706 32.8764 36.9575 32.9012 36.9356C32.926 36.9137 32.945 36.886 32.9537 36.8539L33.9162 33.3437L37.4118 34.3529C37.4439 34.3616 37.4775 34.3616 37.5095 34.3514C37.5402 34.3412 37.5693 34.3223 37.5898 34.296C37.6102 34.2712 37.6218 34.2391 37.6248 34.207C37.6277 34.175 37.6204 34.1429 37.6043 34.1137L34.3464 28.3037" stroke="#0D0D0D" stroke-linejoin="round" />
                            <path d="M32.4317 23.0856C32.4185 23.0447 32.3923 23.0083 32.3588 22.9835C32.3238 22.9587 32.2815 22.9441 32.2392 22.9441H29.916L29.1971 20.7362C29.184 20.6954 29.1577 20.6604 29.1227 20.6341C29.0877 20.6093 29.0454 20.5947 29.0031 20.5947C28.9608 20.5947 28.9185 20.6079 28.8835 20.6341C28.8485 20.6589 28.8223 20.6954 28.8092 20.7362L28.0902 22.9441H25.7671C25.7233 22.9441 25.681 22.9558 25.646 22.9806C25.611 23.0054 25.5833 23.0404 25.5702 23.0826C25.5556 23.1235 25.5556 23.1687 25.5688 23.2095C25.5819 23.2504 25.6067 23.2868 25.6417 23.3131L27.5215 24.6795L26.8113 26.8889C26.7981 26.9297 26.7981 26.9735 26.8113 27.0143C26.8244 27.0551 26.8506 27.0916 26.8856 27.1164C26.9206 27.1412 26.9629 27.1558 27.0052 27.1558C27.049 27.1558 27.0898 27.1426 27.1248 27.1164L29.0046 25.7514L30.8844 27.1164C30.9208 27.1426 30.966 27.1572 31.0113 27.1558C31.0433 27.1558 31.0754 27.1485 31.1031 27.1339C31.1323 27.1193 31.1571 27.0974 31.176 27.0726C31.195 27.0464 31.2067 27.0158 31.2125 26.9851C31.2169 26.9531 31.2154 26.921 31.2052 26.8904L30.4877 24.681L32.3675 23.3145C32.401 23.2883 32.4258 23.2518 32.4375 23.211C32.4492 23.1701 32.4492 23.1264 32.4346 23.087L32.4317 23.0856V23.0856Z" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-sm text-center">Use of expert equipment</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[80px]">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.2202 18.0752C32.2202 25.9502 25.8452 32.3252 17.9702 32.3252C10.0952 32.3252 3.72021 25.9502 3.72021 18.0752C3.72021 10.2002 10.0952 3.8252 17.9702 3.8252H32.2202V18.0752Z" stroke="#0D0D0D" stroke-width="1.5" stroke-miterlimit="10" />
                            <path d="M27.5104 15.0003C26.0404 10.8153 22.0204 8.08525 17.5954 8.25025C13.1704 8.41525 9.37535 11.4603 8.23535 15.7503" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.28027 15.7502C9.19527 12.2402 12.2703 9.66016 15.9453 9.66016C19.3503 9.66016 22.2603 11.8652 23.3703 15.0002" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.3701 15H27.5101" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.0452 19.9807C16.9952 19.9807 16.1402 19.1407 16.1252 18.1057C16.1102 17.0707 16.9352 16.1857 17.9852 16.1707C19.0202 16.1407 19.8902 16.9657 19.9202 18.0007V18.0457H27.7052" stroke="#E60000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-sm text-center">Fast & Efficient</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[80px]">
                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2454 27.1597L20.4663 24.3755M23.2454 27.1597L26.0245 24.3755M23.2454 27.1597V19.6499C23.2454 17.403 21.4269 15.5787 19.1817 15.5787M23.2454 4L20.4663 6.78423M23.2454 4L26.0245 6.78423M23.2454 4V11.5098C23.2454 13.7567 21.4269 15.5811 19.1817 15.5811L6.72024 15.5787M2.94966 15.5787H1" stroke="#EA1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.3122 8.84027L16.0913 11.6245M13.3122 8.84027L10.5331 11.6245M13.3122 8.84027L13.3122 16.3501C13.3122 18.597 15.1308 20.4213 17.376 20.4213M13.3122 32L16.0913 29.2158M13.3122 32L10.5331 29.2158M13.3122 32L13.3122 24.4902C13.3122 22.2433 15.1308 20.4189 17.376 20.4189L30.2365 20.4213M34.0504 20.4213L36.0001 20.4213" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-sm text-center">Flexible service options</p>
                    </div>
                </div>
            </section>


            <section className="p-4 ">
                <h2 className="font-semibold text-lg pb-4">Portfolio</h2>
                <div className="flex items-center  gap-4 overflow-x-auto">
                    <div className="flex flex-col min-w-[270px] gap-3">
                        <img className="rounded-2xl w-full h-[180px]" src="https://s3-alpha-sig.figma.com/img/ddda/3308/8f33d803daf91a15f27d70a2a56c5a44?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IZVbDqJL0~lm6OTA6YDkNY3xMXRNajuyz5YmzwNKZcezna1lDQD19i~UEcD5sP7ixsYB1BzUBW72QBHl53KizRF3WLci~Ou790FkvrwY9XPPPXQWCX-qzG1K-XbrqnNgSEeEWd3l80GZ6ZCx9p-u3q-rc-lQQ6VX1njOUgebECAYt6uC~Tb1Us3xEVvsn0UbWdvemC3fhmGCovY2F3ZGF-VyhmHIJD-LDjr2Inoi072dLmd6VDn0DqS6LVtztj4VDOzyawMi-POe3aHkCM43aLPT2sUtlr1c18IJ-eheoe9-HM1Vm6Ep3pYAYkChnh-BMt8eB591izqRlPLQb1rhiw__" />
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-lg">Office cleaning</p>
                                    <div className="flex items-center gap-1">
                                        <span className="block rounded-full w-[10px] h-[10px] bg-[#B04A98]"></span>
                                        Deep
                                    </div>
                                </div>
                                <div className="bg-vf-red/10 mb-2 rounded-full px-[6px] py-[2px] flex items-center justify-center gap-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.45776 9.09984C6.18841 8.90452 5.82431 8.90452 5.55496 9.09984L2.74948 11.1343L3.79607 7.80394C3.88902 7.50816 3.79615 7.18453 3.55877 6.98352L0.895704 4.72846H4.17327C4.50386 4.72846 4.79585 4.51741 4.9018 4.20641L5.99353 1.00189L7.02399 4.19457C7.1263 4.51157 7.42122 4.72846 7.75644 4.72846H11.0936L8.37714 6.97816C8.13177 7.18137 8.03716 7.51421 8.13713 7.8156L8.6117 7.65817L8.13713 7.8156L9.23 11.1102L6.45776 9.09984ZM2.18614 11.5428C2.18624 11.5427 2.18635 11.5426 2.18646 11.5425L2.18614 11.5428ZM9.45432 11.7864C9.45428 11.7862 9.45424 11.7861 9.4542 11.786L9.45432 11.7864Z" fill="#E60000" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>4.9</span>
                                </div>
                            </div>
                            <p>Through office cleaning, ensuring every corner is spotless and sanitized for a healthier workspace.</p>
                        </div>
                    </div>

                    <div className="flex flex-col min-w-[270px]  gap-3">
                        <img className="rounded-2xl w-full h-[180px]" src="https://s3-alpha-sig.figma.com/img/2119/855a/ad1c819711f894f1fa6970e4e2331107?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FJgcUqDGct2iDyNf4Wn~14FK0CEV17oOy5y-S5q2FwOhv5OxdA2Kn8GbzNNNnlnmcngb7btA3o1q~dn3Trod4x7MeqMNXZSXA6uicwUD64wxmO3U4JOVKGfX-qrIz63-4bhvlFayXGtffyNkaWqoenISi1nSBPwrnBhh0xXnr63l9P30c5Behaoee9FbTN0jui9UQ2y-2yBBFCCVUEG4ba40oc~Wua~2Pne8jQbzuNfEbhcrC5qzyMiYiGKjnS~7q7djGCi3tdKqYfgBmHpsUKKLq2NhpaXz-rDKKEmTJocNpoWXAHx27YAIUnK7840HDNZfEmngb7vUP1Lx4BlI9A__" />
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-lg">Home cleaning</p>
                                    <div className="flex items-center gap-1">
                                        <span className="block rounded-full w-[10px] h-[10px] bg-[#B04A98]"></span>
                                        Deep
                                    </div>
                                </div>
                                <div className="bg-vf-red/10 mb-2 rounded-full px-[6px] py-[2px] flex items-center justify-center gap-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.45776 9.09984C6.18841 8.90452 5.82431 8.90452 5.55496 9.09984L2.74948 11.1343L3.79607 7.80394C3.88902 7.50816 3.79615 7.18453 3.55877 6.98352L0.895704 4.72846H4.17327C4.50386 4.72846 4.79585 4.51741 4.9018 4.20641L5.99353 1.00189L7.02399 4.19457C7.1263 4.51157 7.42122 4.72846 7.75644 4.72846H11.0936L8.37714 6.97816C8.13177 7.18137 8.03716 7.51421 8.13713 7.8156L8.6117 7.65817L8.13713 7.8156L9.23 11.1102L6.45776 9.09984ZM2.18614 11.5428C2.18624 11.5427 2.18635 11.5426 2.18646 11.5425L2.18614 11.5428ZM9.45432 11.7864C9.45428 11.7862 9.45424 11.7861 9.4542 11.786L9.45432 11.7864Z" fill="#E60000" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>4.9</span>
                                </div>
                            </div>
                            <p>Comprehensive home cleaning, offering deep sanitization to maintain a fresh and clean living .</p>
                        </div>
                    </div>

                    <div className="flex flex-col min-w-[270px]  gap-3">
                        <img className="rounded-2xl w-full h-[180px]" src="https://s3-alpha-sig.figma.com/img/2119/855a/ad1c819711f894f1fa6970e4e2331107?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FJgcUqDGct2iDyNf4Wn~14FK0CEV17oOy5y-S5q2FwOhv5OxdA2Kn8GbzNNNnlnmcngb7btA3o1q~dn3Trod4x7MeqMNXZSXA6uicwUD64wxmO3U4JOVKGfX-qrIz63-4bhvlFayXGtffyNkaWqoenISi1nSBPwrnBhh0xXnr63l9P30c5Behaoee9FbTN0jui9UQ2y-2yBBFCCVUEG4ba40oc~Wua~2Pne8jQbzuNfEbhcrC5qzyMiYiGKjnS~7q7djGCi3tdKqYfgBmHpsUKKLq2NhpaXz-rDKKEmTJocNpoWXAHx27YAIUnK7840HDNZfEmngb7vUP1Lx4BlI9A__" />
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-lg">Home cleaning</p>
                                    <div className="flex items-center gap-1">
                                        <span className="block rounded-full w-[10px] h-[10px] bg-[#B04A98]"></span>
                                        Deep
                                    </div>
                                </div>
                                <div className="bg-vf-red/10 mb-2 rounded-full px-[6px] py-[2px] flex items-center justify-center gap-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.45776 9.09984C6.18841 8.90452 5.82431 8.90452 5.55496 9.09984L2.74948 11.1343L3.79607 7.80394C3.88902 7.50816 3.79615 7.18453 3.55877 6.98352L0.895704 4.72846H4.17327C4.50386 4.72846 4.79585 4.51741 4.9018 4.20641L5.99353 1.00189L7.02399 4.19457C7.1263 4.51157 7.42122 4.72846 7.75644 4.72846H11.0936L8.37714 6.97816C8.13177 7.18137 8.03716 7.51421 8.13713 7.8156L8.6117 7.65817L8.13713 7.8156L9.23 11.1102L6.45776 9.09984ZM2.18614 11.5428C2.18624 11.5427 2.18635 11.5426 2.18646 11.5425L2.18614 11.5428ZM9.45432 11.7864C9.45428 11.7862 9.45424 11.7861 9.4542 11.786L9.45432 11.7864Z" fill="#E60000" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>4.9</span>
                                </div>
                            </div>
                            <p>Comprehensive home cleaning, offering deep sanitization to maintain a fresh and clean living .</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="m-4 shadow-xl p-4 rounded-md bg-white mb-28 ">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">Get a quote</h2>
                    <Switch
                        defaultChecked={true}
                        className="group inline-flex h-6 w-10 items-center rounded-full bg-gray-200 transition data-[checked]:bg-vf-red">
                        <span className="size-4 flex items-center justify-center translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-5">
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7885 1.4541L4.24266 7.99994L1.3335 5.09077" stroke="#E60000" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                            </svg>
                        </span>
                    </Switch>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <div className="flex flex-col items-center justify-center border-r-[1px] border-[#BEBEBE] pr-4">
                        <div className="flex items-center  gap-2">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_295_12646)">
                                    <path d="M13.175 12.7677L10.5 10.026V4.60938" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.4168 9.99967C18.4168 11.5654 17.9525 13.096 17.0826 14.3979C16.2127 15.6998 14.9763 16.7145 13.5297 17.3137C12.0832 17.9129 10.4914 18.0697 8.9557 17.7642C7.42002 17.4588 6.0094 16.7048 4.90224 15.5976C3.79507 14.4904 3.04108 13.0798 2.73562 11.5441C2.43015 10.0085 2.58693 8.41668 3.18612 6.9701C3.78531 5.52352 4.80001 4.2871 6.1019 3.41721C7.40379 2.54731 8.9344 2.08301 10.5002 2.08301H18.4168V9.99967Z" stroke="#0D0D0D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_295_12646">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-lg font-semibold">20 minute</p>
                        </div>
                        <p>Response time</p>
                    </div>
                    <div className="flex flex-col items-center justify-center pl-4">
                        <div className="flex items-center  gap-2">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2074 4.86848L17.2497 4.59829C17.3278 4.05142 16.9714 3.53221 16.9714 3.53221C16.763 3.20181 16.488 2.91861 16.1641 2.69888C15.8093 2.45799 15.4154 2.27896 15.0004 2.17154C14.543 2.05272 14.071 2.00878 13.6006 2.03807C13.1286 2.06737 12.6631 2.16991 12.2237 2.34243C11.82 2.50194 11.4473 2.72655 11.1185 3.00975C10.8174 3.26691 10.5716 3.58267 10.3959 3.93749C10.2298 4.27928 10.1533 4.65852 10.1696 5.03775C10.1826 5.27701 10.2331 5.51301 10.3226 5.73599C10.4121 5.95897 10.5342 6.1673 10.6856 6.35448C10.8435 6.55142 11.0257 6.7272 11.2292 6.87531C11.4375 7.02831 11.864 7.21548 12.113 7.32453C11.7891 8.08788 11.0323 8.5371 11.0323 8.5371C11.3448 8.56314 11.6605 8.55012 11.9698 8.49966C12.1846 8.46385 12.3962 8.40852 12.5996 8.33365C12.9414 8.19042 13.2718 8.0244 13.5908 7.83723L13.7764 7.73306" stroke="#0D0D0D" stroke-linejoin="round" />
                                <path d="M18.4104 14.3442C18.4185 14.3735 18.4234 14.4028 18.4234 14.4321C18.4201 14.7055 18.3778 14.9773 18.2964 15.2394C17.9839 16.255 17.1408 17.3439 16.1447 17.6352C13.6317 18.3839 10.9852 17.6173 8.64474 16.4422C6.70952 15.4754 5.13725 13.9129 4.1558 11.9858C2.97579 9.65506 2.20594 7.02159 2.95789 4.52159C3.25574 3.53201 4.35437 2.69217 5.37163 2.38129L6.18706 2.16645C6.32215 2.13227 6.46212 2.20714 6.50607 2.33898L7.1506 4.22537C7.47937 5.14334 7.80815 6.06131 8.1353 6.97928L8.16134 7.05089C8.20691 7.17784 8.16459 7.32107 8.05717 7.40408C7.73653 7.64659 7.38009 7.83377 6.99923 7.96072C6.54513 8.1007 6.07801 8.19021 5.60437 8.22928C5.51323 8.23904 5.43185 8.28787 5.38139 8.36437C5.33094 8.44086 5.31791 8.53527 5.34558 8.62316C5.83712 10.1857 6.69812 11.6082 7.85372 12.7687C9.02397 13.9243 10.453 14.7836 12.0204 15.2752C12.1083 15.3012 12.2027 15.2882 12.2776 15.2377C12.354 15.1889 12.4029 15.1075 12.4126 15.0164C12.4533 14.5428 12.5445 14.0756 12.6877 13.6215C12.8147 13.2439 13.0035 12.8875 13.246 12.5717C13.329 12.461 13.4738 12.4187 13.604 12.4676L13.674 12.492L16.4393 13.4718C17.0953 13.7045 17.6552 13.9389 18.3143 14.1733C18.3518 14.1863 18.3892 14.2856 18.4104 14.3442Z" stroke="#0D0D0D" stroke-linecap="round" />
                                <path d="M17.5251 4.95018L17.3965 4.91275C17.0417 4.81997 16.6738 4.78579 16.3093 4.80858C15.9414 4.83137 15.5801 4.91112 15.2367 5.04621C14.9225 5.16991 14.6328 5.34569 14.3789 5.56704C14.1445 5.76887 13.9541 6.01626 13.819 6.29621C13.5537 6.83332 13.5863 7.47134 13.9037 7.98078C14.0648 8.23957 14.278 8.46092 14.5287 8.63345C14.8037 8.82062 15.1113 8.95897 15.4336 9.04198C15.7884 9.13475 16.1563 9.17056 16.5225 9.14615H16.5583C16.682 9.23078 16.8106 9.30565 16.9456 9.37075C17.1084 9.45051 17.2793 9.51398 17.4551 9.56118C17.6585 9.61652 17.8685 9.64908 18.0801 9.65721C18.3226 9.66698 18.5651 9.64745 18.8027 9.59699C18.8027 9.59699 18.0443 9.15754 18.0215 8.70344C18.2022 8.59927 18.3698 8.47395 18.5228 8.33234C18.666 8.19888 18.7914 8.04751 18.8971 7.8815C18.9981 7.72199 19.0762 7.54947 19.1266 7.3688C19.2585 6.90005 19.1869 6.39712 18.9297 5.98534C18.8255 5.81281 18.697 5.65656 18.5472 5.52147C18.2396 5.27733 17.8945 5.0869 17.5251 4.95507" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <p className="text-lg font-semibold">100%</p>
                        </div>
                        <p>Response rate</p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}