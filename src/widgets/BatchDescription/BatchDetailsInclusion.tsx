import BatchDescriptionCardWrapper from "@/widgets/BatchDescription/BatchDescriptionCardWrapper";

export default function BatchDetailsInclusion({description}: { description: string }) {
    return <BatchDescriptionCardWrapper title={'This batch includes'}>
        <div dangerouslySetInnerHTML={{__html: description}}/>
    </BatchDescriptionCardWrapper>
}
