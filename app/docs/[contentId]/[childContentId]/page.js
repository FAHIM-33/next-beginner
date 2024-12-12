import ContentDisplay from "@/app/components/ContentDisplay";

function ChildContentPage({ params }) {

    return (
        <div>
            <ContentDisplay id={params?.childContentId}></ContentDisplay>
        </div >
    );
}

export default ChildContentPage;