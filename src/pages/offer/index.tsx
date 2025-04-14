import PublicLayout from "@/layouts/PublicLayout";
import Promotion from "../home/promotion";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import whatsNewImage from '@/images/promotion/whats_new.png'

export default function OfferPage() {
    return (
        <PublicLayout>
            <section className="p-4 mb-28">
                <h2 className="font-semibold text-xl mb-4">News & Blog</h2>
                <Promotion />

                <div className="flex items-center justify-between mt-8 mb-4">
                    <h1 className="text-[18px] text-[#262626] font-semibold">Unbeatable offers just for you</h1>
                    <button className="text-vf-red text-sm underline">
                        See all
                    </button>
                </div>
                <TabGroup className="w-full">
                    <TabList className="flex items-center gap-4 border-b-[1px] border-[#BEBEBE] w-full">
                        <Tab className="data-[selected]:after:content-[''] outline-none data-[selected]:after:rounded-t-md pb-4 transition-all  data-[selected]:after:absolute data-[selected]:after:left-0 data-[selected]:after:bottom-0 data-[selected]:after:w-full data-[selected]:after:bg-vf-red data-[selected]:after:h-[4px] relative  data-[selected]:font-semibold data-[hover]:underline">Speacial Deals</Tab>
                        <Tab className="data-[selected]:after:content-[''] outline-none data-[selected]:after:rounded-t-md pb-4 transition-all data-[selected]:after:absolute data-[selected]:after:left-0 data-[selected]:after:bottom-0 data-[selected]:after:w-full data-[selected]:after:bg-vf-red data-[selected]:after:h-[4px] relative  data-[selected]:font-semibold data-[hover]:underline">Exclusive Rewards</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel className="mt-4">
                            <div className="flex flex-col items-start gap-2 w-full h-full">
                                <div className="w-full flex flex-col items-start justify-between shadow-md p-4 rounded-xl bg-white">
                                    <img className="w-full rounded-3xl" src={whatsNewImage} />
                                    <div className="flex flex-col gap-2 mt-3">
                                        <p className="font-semibold">Shop CommUnity gift cards</p>
                                        <p>You can earn exclusive opportunities by collecting points.</p>
                                    </div>
                                    <button className="text-vf-red flex items-center justify-center gap-2">
                                        Learn more
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.45825 2.91699L13.5416 10.0003L6.45825 17.0837" stroke="#E60000" strokeMiterlimit="10" strokeLinecap="round" />
                                        </svg>

                                    </button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae id alias error harum inventore assumenda. Minus asperiores, consectetur veniam eveniet tenetur officiis ducimus nobis alias deleniti. Sit, iusto earum.
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </section>
        </PublicLayout>
    )
}