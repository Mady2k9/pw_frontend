import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Batches() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/');
    },[]);
    return <></>
}
