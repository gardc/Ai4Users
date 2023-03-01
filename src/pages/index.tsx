import Content from '@/components/Content'
import DataTable from '@/components/DataTable'
import Parent from '@/components/Parent'
import React from 'react'
import { exampleData } from '@/pages/api/exampleData'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'

function index() {
    return (
        <Parent>
            <Content>
                <NavBar />
                <div className="index bg-gradient-to-b from-purple-300 to-slate-50 py-32 flex-col flex items-center">
                    <p className="text-center text-5xl">
                        Estimation of sick leave
                    </p>
                    <p className="text-center text-m">
                        We will estimate you total duration of sick leave
                    </p>
                </div>
                {/*Second page that shows personal information */}
                <div className="text-center bg-slate-50 flex justify-center">
                    <div
                        className="w-3/4 
                bg-white drop-shadow-lg py-8 px-16 rounded-xl flex justify-center items-center flex-col m-4"
                    >
                        <p className="text-2xl font-semibold py-3">
                            Estimation of sick leave duration
                        </p>
                        <p className="py-3">
                            In order to provide you with the appropriate support
                            we use this information to estimate the sick leave
                            duration. There is several parameters that.
                        </p>
                        <DataTable data={exampleData}></DataTable>
                        <div className="flex-col justify-center flex">
                            <div className="flex justify-center mt-4">
                                <Button color="black" href="/%">
                                    Is this information incorrect?
                                </Button>
                            </div>
                            <div className="flex justify-center mt-4">
                                <Button color="black" href="/UsingAi">
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Parent>
    )
}

export default index
