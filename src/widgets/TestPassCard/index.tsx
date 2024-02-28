import {cn} from "@/lib/utils";
import style from './TestPassCard.module.css'
import { ITestPassData } from '@/api/interfaces/test-series';
export default function TestPassCard({data}: {data: ITestPassData}){
    console.log(data);
    return <div className={cn('p-10 border', style.wavyBorder)}>
        Hello
    </div>
};
