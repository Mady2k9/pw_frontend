import BatchDescriptionCardWrapper from "./BatchDescriptionCardWrapper";

export default function BatchOtherDetails({description}: { description: string }) {
    return <BatchDescriptionCardWrapper title={'Other Details'}>
        <div dangerouslySetInnerHTML={{__html: description}}/>
    </BatchDescriptionCardWrapper>
}
