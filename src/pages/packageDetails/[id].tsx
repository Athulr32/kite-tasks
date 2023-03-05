import { Router, useRouter } from "next/router";



import type { NextApiRequest, NextApiResponse, GetServerSidePropsContext } from 'next'
import { useEffect, useState } from "react";
import type { Data } from "@/lib/types";
import PackageDetails from "@/components/PackageDetails";

type propData = {
    id: String
}
export default function DetailsOfPackage(props: propData) {

    const [packageDetails, setPackageDetails] = useState<Data>()

    async function getDetails() {

        try {
            const res = await fetch(`/api/package/${props.id}`)
            const details = await res.json() as Data;

            setPackageDetails(details)
        }
        catch (e) {
            getDetails()
        }

    }


    useEffect(() => {

        getDetails()
    }, [])


    return (
        <>
            {!packageDetails && <div className='text-white text-center text-4xl mt-40'>Loading...</div>}
            {packageDetails && <PackageDetails {...packageDetails}></PackageDetails>}

        </>
    )



}



export async function getServerSideProps(context: GetServerSidePropsContext) {
    console.log(context.params)

    if (!context.params) {
        return {
            redirect: {
                permanent: false,
                destination: "/packages",
            },
        }
    }

    return {
        props: {
            id: context.params.id
        }
    }


}