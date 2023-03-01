import Button from "@/components/Button";
import Content from "@/components/Content";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import NavBar from "@/components/NavBar";
import Parent from "@/components/Parent";
import Link from "next/link";
import React from "react";

const UsingAI = () => {
    return (
        <Parent>
            <Content>
                <NavBar />
                <div className="bg-gradient-to-b from-purple-300 to-slate-50 pt-5 pb-16 text-center">
                    <p className="text-center text-3xl m-3">
                        Using Artificial Intelligence for estimation
                    </p>
                </div>
                <div className="text-center bg-slate-50 flex justify-center flex-col items-center">
                    <InformationDropdownBox
                        title={""}
                        initialInfo={
                            "We offer the use of an Artificial Intelligence (AI) model to be used for estimating your sick leave duration. The use of this system can help case workers in making more accurate estimations, as well as shortening the response time."
                        }
                        extendedInfo={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    />
                    <InformationDropdownBox
                         title={""}
                         initialInfo={
                             <><p>You have the right to choose whether to use this AI-model or not. If you choose to not use the model the case worker will handle your case without any involvement from the artificial intelligence model. This may result in longer processing time for your case.</p>
                               <p> Read more about your rights as a user below.</p>
                             </>
                         }
                         extendedInfo={
                             <div className="space-y-4">
                                 <h2 className=""> As a user you have the right to: </h2>
                                 <ul className="space-y-4 list-disc text-left">
                                     <li>
                                         <p className="">Get information on which of your personal data is being used and why <a href="https://lovdata.no/lov/2018-06-15-38/gdpr/a15" target="_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                             Learn more
                                             <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                         </a></p>
                                     </li>
                                     <li>
                                         <p className="">Correct faulty data about yourself <a href="https://lovdata.no/lov/2018-06-15-38/gdpr/a16" target="_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                             Learn more
                                             <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                         </a></p>
                                     </li>
                                     <li>
                                         <p className="">At any time request the removal of your personal data from our system <a href="https://lovdata.no/lov/2018-06-15-38/gdpr/a17" target="_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                             Learn more
                                             <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                         </a></p>
                                     </li>
                                     <li>
                                         <p className="">Request that the process which is using your data is canceled <a href="https://lovdata.no/lov/2018-06-15-38/gdpr/a18" target="_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                             Learn more
                                             <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                         </a></p>
                                     </li>
                                     <li>
                                         <p className="">Be presented with your personal information in an understandable way <a href=" https://lovdata.no/lov/2018-06-15-38/gdpr/a20" target="_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                             Learn more
                                             <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                         </a></p>
                                     </li>
                                     <li>
                                         <p className="">At any time protest against processing of your personal data <a href="https://lovdata.no/lov/2018-06-15-38/gdpr/a21" target="_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                             Learn more
                                             <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                         </a></p>
                                     </li>
                                 </ul>
                             </div>
                         }
                     />
                    <InformationDropdownBox
                        title={""}
                        initialInfo={"Explore how it works with our sandbox!"}
                        extendedInfo={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    />
                </div>
                <div className="flex justify-center justify-evenly m-5 ">
                    <button className="m-2 py-3 bg-black hover:bg-neutral-800 w-60 rounded-lg text-center text-white font-normal Sans">
                        <Link
                            className="text-center"
                            href={"/Summary?consent=false"}
                        >
                            Dont evaluate with AI
                        </Link>
                    </button>
                    <button className="m-2 py-3 bg-black hover:bg-neutral-800 w-60 rounded-lg text-center text-white font-normal Sans">
                        <Link
                            className="text-center"
                            href={"/Summary?consent=true"}
                        >
                            Consent to use AI
                        </Link>
                    </button>
                </div>
            </Content>
        </Parent>
    );
};

export default UsingAI;
