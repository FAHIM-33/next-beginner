import { getDocContent } from "@/lib/doc";

async function ContentDisplay({ id }) {
    const docContent = await getDocContent(id)

    return (
        <article className="p-5">
            <h1 className="text-green-400 text-3xl mb-8">{docContent.title}</h1>
            <span>{docContent.date}</span>
            <p>{docContent.author}</p>

        </article>
    );
}

export default ContentDisplay;